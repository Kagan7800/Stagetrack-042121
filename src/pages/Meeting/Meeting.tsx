import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow, isPlatform } from '@ionic/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { every, filter, find, forEach, includes, some } from 'lodash';
import { MediaConnection } from 'peerjs';
import { IEvent } from 'fabric/fabric-impl';
import routes from '../../routes';
import PeerService from '../../services/PeerService';
import MediaService from '../../services/MediaService';
import MeetingService from '../../services/MeetingService';
import VideoService from '../../services/VideoService';
import AuthService from '../../services/AuthService';
import AlertService from '../../services/AlertService';
import NotificationService from '../../services/NotificationService';
import WhiteboardDrawingService from '../../services/Whiteboard/WhiteboardDrawingService';
import WhiteboardCanvasService from '../../services/Whiteboard/WhiteboardCanvasService';
import ScreenCaptureService from '../../services/ScreenCaptureService';
import RTPSenderService from '../../services/RTPSenderService';
import StreamTrackService from '../../services/StreamTrackService';
import AppStorage from '../../components/App/App.storage';
import HostMiddleware from '../../middleware/HostMiddleware';
import MeetingRepository from '../../repositories/MeetingRepository';
import socket from './Meeting.socket';
import { selectors, actions, MeetingState, MeetingActions, VideoState, MeetingWhiteboardDrawingState } from './Meeting.state';
import Page from '../../components/Page/Page';
import Menu, { MenuPosition } from '../../components/Menu/Menu';
import ActiveVideo from '../../components/ActiveVideo/ActiveVideo';
import VideoBlock from '../../components/VideoBlock/VideoBlock';
import ActiveVideoSkeleton from '../../components/ActiveVideoSkeleton/ActiveVideoSkeleton';
import styles from './Meeting.module.scss';
import GridContainer from '../grid/grid';
import { actions as meetingActions, selectors as meetingSelectors, VideoStateKind } from './Meeting.state';
import store from '../../store';

interface MeetingProps extends MeetingState, MeetingActions, RouteComponentProps {}

class Meeting extends Component<MeetingProps> {
  static raiseHandTimeout: number = 5000;
  static videoColumnSize: string = isPlatform('mobile') ? '4' : '2';
  peerService: PeerService;
  mediaService: MediaService;
  meetingService: MeetingService;
  videoService: VideoService;
  authService: AuthService;
  notificationService: NotificationService;
  whiteboardDrawingService: WhiteboardDrawingService;
  whiteboardCanvasService: WhiteboardCanvasService;
  screenCaptureService: ScreenCaptureService;
  rtpSenderService: RTPSenderService;
  streamTrackService: StreamTrackService;
  appStorage: AppStorage;
  hostMiddleware: HostMiddleware;
  meetingRepository: MeetingRepository;

  constructor(props: MeetingProps) {
    super(props);
    this.peerService = new PeerService();
    this.mediaService = new MediaService();
    this.meetingService = new MeetingService();
    this.videoService = new VideoService();
    this.authService = new AuthService();
    this.notificationService = new NotificationService();
    this.whiteboardDrawingService = new WhiteboardDrawingService();
    this.whiteboardCanvasService = new WhiteboardCanvasService();
    this.screenCaptureService = new ScreenCaptureService();
    this.rtpSenderService = new RTPSenderService();
    this.streamTrackService = new StreamTrackService();
    this.appStorage = new AppStorage();
    this.hostMiddleware = new HostMiddleware();
    this.hostMiddleware.auth(this.props.history);
    this.meetingRepository = new MeetingRepository();
    this.handleMenuRaiseHandClick = this.handleMenuRaiseHandClick.bind(this);
    this.handleMenuEndMeetingClick = this.handleMenuEndMeetingClick.bind(this);
    this.handleMenuVideoClick = this.handleMenuVideoClick.bind(this);
    this.handleMenuAudioClick = this.handleMenuAudioClick.bind(this);
    this.handleMenuScreenShareClick = this.handleMenuScreenShareClick.bind(this);
    this.handleMenuWhiteboardClick = this.handleMenuWhiteboardClick.bind(this);
    this.handleMenuMemberRemoveClick = this.handleMenuMemberRemoveClick.bind(this);
    this.handleVideoBlockClick = this.handleVideoBlockClick.bind(this);
    this.handleWhiteboardCanvasClearClick = this.handleWhiteboardCanvasClearClick.bind(this);
    this.handleWhiteboardDrawingAdd = this.handleWhiteboardDrawingAdd.bind(this);
  }

  get className() {
    const mobileClass = isPlatform('mobile') && styles.mobile;
    return `${styles.meeting} ${mobileClass} ${styles.menuTopSpace}`;
  }

  get activeVideo() {
    console.log(this.props.videos);
    return find(this.props.videos, 'active');
  }

  get activeVideoSkeletonVisibility() {
    return !this.activeVideo;
  }

  get activeVideoBlock() {
    return (
      this.activeVideo && (
        <ActiveVideo
          video={this.ScreenVideos ? this.ScreenVideos : this.activeVideo}
          whiteboardDrawings={this.props.whiteboardDrawings}
          whiteboardEnabled={this.props.whiteboardEnabled}
          handleWhiteboardCanvasClearClick={this.handleWhiteboardCanvasClearClick}
          handleWhiteboardDrawingAdd={this.handleWhiteboardDrawingAdd}
          handleVideoBlockClick={this.handleVideoBlockClick}
        />
      )
    );
  }

  // Function made by developer
  get videosFirst() {
    const videos = filter(this.props.videos);
    if (videos.length > 0) {
      return this.video(videos[0]);
    }
  }

  get videos() {
    const videos = filter(this.props.videos, { active: false, kind: 'media' });
    return videos.map((video) => this.video(video));
  }
  get ScreenVideos() {
    const videos = find(this.props.videos, { kind: 'screen' });
    return videos;
  }

  get userVideo() {
    const { connectionId, videos } = this.props;
    return find(videos, { id: connectionId });
  }

  get canInviteMember() {
    return Boolean(this.props.id);
  }

  get canRaiseHand() {
    if (!this.userVideo) return false;
    return !this.userVideo.raiseHand;
  }

  get canEndMeeting() {
    return Boolean(this.props.id);
  }

  get canVideoMute() {
    if (!this.userVideo) return false;
    return !this.userVideo.streamMuted.video;
  }

  get canAudioMute() {
    if (!this.userVideo) return false;
    return !this.userVideo.streamMuted.audio;
  }

  get canScreenShare() {
    const videos = this.props.videos;
    return every(videos, (video) => video.kind !== 'screen');
  }

  get canWhiteboardEnable() {
    return !this.props.whiteboardEnabled;
  }

  get inviteText() {
    const url = `https://${process.env.REACT_APP_HOST}`;
    const { id } = this.props;
    return `Hi there,\n Jump into Stagetrack Studio - ${url}/join?id=${id}`;
  }

  handleStreamStop() {
    const screenStream = this.meetingService.getScreenStream();
    console.log('>>>>>> phuda >>>>>>>>', screenStream);
    const tracks = screenStream.getTracks();
    forEach(tracks, (track) => {
      track.onended = () => this.switchUserStreamToMedia();
    });
  }

  switchUserStreamToMedia() {
    this.mediaService.getStream(this.props.history, () => {
      // const mediaStream = this.meetingService.getMediaStream();
      // this.videoService.replaceUserStream(mediaStream, 'media');
      // this.rtpSenderService.replaceStream(mediaStream);
      const screenStream = this.meetingService.getScreenStream();
      this.streamTrackService.stop(screenStream);
      this.videoService.pullScreenVideo();
    });
  }

  switchUserStreamToScreen() {
    this.screenCaptureService.getStream(() => {
      const screenStream = this.meetingService.getScreenStream();
      const { connectionId } = meetingSelectors(store.getState());
      this.videoService.createMediaVideo(connectionId, screenStream, 'screen', (localVideo) => {
        this.videoService.pushScreenVideo(localVideo);
      });
      // console.log(this.ScreenVideos);

      // this.videoService.replaceUserStream(screenStream, 'screen'); // TODO : add stream instead of replacing stream
      // this.rtpSenderService.replaceStream(screenStream); // TODO : add stream instead of replacing stream
      this.handleStreamStop();
      // const mediaStream = this.meetingService.getMediaStream();
      // this.streamTrackService.stop(mediaStream);
    });
  }

  handleMenuRaiseHandClick() {
    if (this.userVideo?.raiseHand) return;
    const { id, connectionId } = this.props;
    socket.raiseHand.publish(id, connectionId);
  }

  handleMenuEndMeetingClick() {
    const prompt = 'Are you sure to end meeting?';
    AlertService.push(prompt, () => {
      this.peerService.disconnect();
    });
  }

  handleMenuVideoClick() {
    if (this.userVideo) {
      const enabled = this.mediaService.toggleVideoMute(this.userVideo.stream);
      this.props.replaceVideoStreamMutedVideo(this.props.connectionId, !enabled);
    }
  }

  handleMenuAudioClick() {
    if (this.userVideo) {
      const enabled = this.mediaService.toggleAudioMute(this.userVideo.stream);
      this.props.replaceVideoStreamMutedAudio(this.props.connectionId, !enabled);
    }
  }

  handleMenuScreenShareClick() {
    if (this.canScreenShare) this.switchUserStreamToScreen();
    else this.switchUserStreamToMedia();
  }

  handleMenuWhiteboardClick() {
    const { id } = this.props;
    const whiteboardEnabled = !this.props.whiteboardEnabled;
    socket.whiteboardEnabled.publish(id, whiteboardEnabled);
    this.props.replaceWhiteboardEnabled(whiteboardEnabled);
  }

  handleMenuMemberRemoveClick() {
    if (this.activeVideo?.memberRemove) {
      const { id } = this.props;
      socket.memberRemove.publish(id, this.activeVideo.id);
    }
  }

  handleVideoBlockClick(video: VideoState) {
    this.props.replaceVideoActive(video.id, true);
  }

  handleWhiteboardCanvasClearClick() {
    socket.whiteboardCanvasClear.publish(this.props.id);
  }

  handleWhiteboardDrawingAdd(event: IEvent) {
    const { id } = this.props;
    const drawing = event.target as MeetingWhiteboardDrawingState;
    this.props.pushWhiteboardDrawing(drawing);
    socket.whiteboardDrawingAdd.publish(id, drawing);
  }

  handleRemoteRaiseHand(meetingId: string) {
    socket.raiseHand.subscribe(meetingId, (connectionId) => {
      this.props.replaceVideoRaiseHand(connectionId, true);
      setTimeout(() => {
        this.props.replaceVideoRaiseHand(connectionId, false);
      }, Meeting.raiseHandTimeout);
    });
  }

  handleRemoteMemberRemove(meetingId: string) {
    socket.memberRemove.subscribe(meetingId, (connectionId) => {
      const isUser = this.meetingService.isUserMeeting(connectionId);
      if (isUser) this.peerService.disconnect();
      else {
        this.videoService.pullVideo(connectionId);
        this.meetingRepository.setHostVideoActive();
      }
    });
  }

  handleRemoteDisconnect(meetingId: string) {
    socket.remoteDisconnect.subscribe(meetingId, (connectionId) => {
      const isHostMeeting = this.meetingService.isHostMeeting(connectionId);
      if (isHostMeeting) this.exitMeeting();
      else this.videoService.pullVideo(connectionId);
    });
  }

  handleRemoteRTPTrackReplacement(meetingId: string) {
    socket.rtpTrackReplaced.subscribe(meetingId, (payload) => {
      const { connectionId, kind } = payload;
      this.props.replaceVideoKind(connectionId, kind);
      this.props.updateVideoRenderId(connectionId);
    });
  }

  handleRemoteConferenceCall(meetingId: string, localStream: MediaStream) {
    socket.conferenceCall.subscribe(meetingId, (connectionId) => {
      this.notificationService.notifyMember(connectionId);
      if (this.meetingService.canConferenceCall(connectionId)) {
        this.peerService.call(connectionId, localStream, (call) => {
          this.meetingService.pushCall(call);
          this.handleCallStreaming(call);
        });
      }
    });
  }

  handleRemoteWhiteboardEnabled(meetingId: string) {
    socket.whiteboardEnabled.subscribe(meetingId, (whiteboardEnabled) => {
      this.props.replaceWhiteboardEnabled(whiteboardEnabled);
    });
  }

  handleRemoteWhiteboardDrawingAdd(meetingId: string) {
    socket.whiteboardDrawingAdd.subscribe(meetingId, (drawing) => {
      const isDrawingExists = this.whiteboardDrawingService.isExists(drawing);
      if (!isDrawingExists) {
        this.whiteboardDrawingService.parse(drawing, (drawings) => {
          this.whiteboardDrawingService.add(drawings);
        });
      }
    });
  }

  handleRemoteWhiteboardDrawingSync(localConnectionId: string) {
    socket.whiteboardDrawingSync.subscribe(localConnectionId, (whiteboardSync) => {
      const { drawings, whiteboardEnabled } = whiteboardSync;
      if (whiteboardEnabled) {
        this.props.replaceWhiteboardEnabled(whiteboardEnabled);
      }
      this.props.replaceWhiteboardDrawings(drawings);
      socket.whiteboardDrawingSync.unsubscribe(localConnectionId);
    });
  }

  handleRemoteWhiteboardCanvasClear(meetingId: string) {
    socket.whiteboardCanvasClear.subscribe(meetingId, () => {
      this.whiteboardCanvasService.clear();
      this.props.replaceWhiteboardDrawings([]);
    });
  }

  video(video: VideoState) {
    return <VideoBlock ratio='square' video={video} handleClick={this.handleVideoBlockClick} />;
  }
  socketUnsubscribe() {
    const { id } = this.props;
    socket.raiseHand.unsubscribe(id);
    socket.conferenceCall.unsubscribe(id);
    socket.rtpTrackReplaced.unsubscribe(id);
    socket.remoteDisconnect.unsubscribe(id);
    socket.memberRemove.unsubscribe(id);
    socket.whiteboardEnabled.unsubscribe(id);
    socket.whiteboardDrawingAdd.unsubscribe(id);
    socket.whiteboardCanvasClear.unsubscribe(id);
  }

  handleDisconnect() {
    this.peerService.onDisconnect(() => {
      const { id, connectionId } = this.props;
      socket.remoteDisconnect.publish(id, connectionId);
      this.exitMeeting();
    });
  }

  whiteboardDrawingSync(connectionId: string) {
    const { whiteboardEnabled, whiteboardDrawings: drawings } = this.props;
    const whiteboardSync = { drawings, whiteboardEnabled };
    socket.whiteboardDrawingSync.publish(connectionId, whiteboardSync);
  }

  exitMeeting() {
    this.videoService.stopUserVideo();
    this.meetingService.resetMeeting();
    this.socketUnsubscribe();
    this.peerService.disconnect();
    this.authService.resetType();
    this.props.replaceWhiteboardEnabled(false);
    this.props.replaceWhiteboardDrawings([]);
    this.appStorage.removeAccessToken(() => {
      this.props.history.push(routes.home.path);
    });
  }
  // creating user video from media stream object passed from mediaService.getStream function
  handleUserStream(localConnectionId: string, localStream: MediaStream) {
    this.videoService.createMediaVideo(localConnectionId, localStream, 'media', (localVideo) => {
      this.videoService.pushVideo(localVideo);
    });
  }

  handleCallStreaming(call: MediaConnection) {
    this.peerService.onCalling(call, (remoteConnectionId, remoteStream) => {
      this.videoService.createMediaVideo(remoteConnectionId, remoteStream, 'media', (remoteVideo) => {
        this.videoService.pushVideo(remoteVideo);
      });
    });
  }

  handleReceiveCall(meetingId: string, localStream: MediaStream) {
    this.peerService.onReceiveCall((call) => {
      this.meetingService.pushCall(call);
      const { peer: connectionId } = call;
      this.peerService.answerCall(call, localStream);
      this.whiteboardDrawingSync(connectionId);
      socket.conferenceCall.publish(meetingId, connectionId);
      this.notificationService.notifyHost(connectionId);
      this.handleCallStreaming(call);
    });
  }

  joinMeeting(meetingId: string, localConnectionId: string, localStream: MediaStream) {
    if (this.meetingService.isMemberMeeting(localConnectionId)) {
      this.peerService.call(meetingId, localStream, (call) => {
        this.meetingService.pushCall(call);
        this.handleCallStreaming(call);
      });
    }
  }

  handleMeeting() {
    const { history } = this.props;
    this.peerService.handleErrors(history);
    this.peerService.onOpen((localConnectionId) => {
      this.meetingService.setId(localConnectionId, (meetingId) => {
        if (meetingId) {
          // this.handleRemoteRaiseHand(meetingId);
          // this.handleRemoteMemberRemove(meetingId);
          // this.handleDisconnect();
          this.mediaService.getStream(history, (localStream) => {
            this.handleUserStream(localConnectionId, localStream);
            this.handleReceiveCall(meetingId, localStream);
            this.joinMeeting(meetingId, localConnectionId, localStream);
            this.handleRemoteDisconnect(meetingId);
            this.handleRemoteRTPTrackReplacement(meetingId);
            this.handleRemoteConferenceCall(meetingId, localStream);
            this.handleRemoteWhiteboardEnabled(meetingId);
            this.handleRemoteWhiteboardDrawingAdd(meetingId);
            this.handleRemoteWhiteboardDrawingSync(localConnectionId);
            this.handleRemoteWhiteboardCanvasClear(meetingId);
          });
        } else this.exitMeeting();
      });
    });
  }

  componentWillUnmount() {
    this.exitMeeting();
  }

  componentDidMount() {
    this.handleMeeting();
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          <Page invert={false} container='full'>
            <div className={this.className}>
              <div id='container'>
                <GridContainer
                  values={this.props.videos.filter((video) => video.kind === 'media').length}
                  videos={this.videos}
                  getFirstVideo={this.videosFirst}
                  activeVideo={this.activeVideoBlock}
                  activeVideoSkeletonVisibility={this.activeVideoSkeletonVisibility}
                  canInviteMember={this.canInviteMember}
                  canRaiseHand={this.canRaiseHand}
                  canEndMeeting={this.canEndMeeting}
                  canVideoMute={this.canVideoMute}
                  canAudioMute={this.canAudioMute}
                  canScreenShare={this.canScreenShare}
                  canWhiteboardEnable={this.canWhiteboardEnable}
                  canMemberRemove={this.activeVideo?.memberRemove}
                  inviteText={this.inviteText}
                  handleRaiseHandClick={this.handleMenuRaiseHandClick}
                  handleEndMeetingClick={this.handleMenuEndMeetingClick}
                  handleVideoClick={this.handleMenuVideoClick}
                  handleAudioClick={this.handleMenuAudioClick}
                  handleScreenShareClick={this.handleMenuScreenShareClick}
                  handleWhiteboardClick={this.handleMenuWhiteboardClick}
                  handleMemberRemoveClick={this.handleMenuMemberRemoveClick}
                />
              </div>
            </div>
          </Page>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(connect(selectors, actions)(Meeting));
