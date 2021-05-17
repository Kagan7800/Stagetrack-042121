//@ts-nocheck
import React, { useState } from 'react';
import './grid.css';
import styles from '../Meeting/Meeting.module.css';
import { IonImg, isPlatform, IonIcon } from '@ionic/react';
import copyToClipboard from 'copy-to-clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import AlertService from '../../services/AlertService';
import { personAddOutline, handRightOutline, videocamOutline, micOutline, laptopOutline, easelOutline, personRemoveOutline } from 'ionicons/icons';

function Grid(props) {
  var {
    values,
    videos,
    getFirstVideo,
    activeVideo,
    canInviteMember,
    canRaiseHand,
    canEndMeeting,
    canVideoMute,
    canAudioMute,
    canScreenShare,
    canWhiteboardEnable,
    canMemberRemove,
    inviteText,
    handleRaiseHandClick,
    handleEndMeetingClick,
    handleVideoClick,
    handleAudioClick,
    handleScreenShareClick,
    handleWhiteboardClick,
    handleMemberRemoveClick,
  } = props;

  var values = values || 1;
  const [borderColor, setBorderColor] = useState('blue');
  const [openNav, setOpenNav] = useState(false);
  const [title, setTitle] = useState('Music Fun with your Little One');

  const handleOnOpenNav = () => {
    setOpenNav(!openNav);
  };

  const handleLeftImages = () => {
    let elements = [<div className={`changeNewBorderColor ${borderColor} vidCapture${values}_${1}`}>{getFirstVideo}</div>];
    for (let i = 1; i <= values; i++) {
      if (i === 4) {
        elements.push(<div className={`changeNewBorderColor vidCapture${values}_${2}`}>{videos[i - 2]}</div>);
      }
    }
    return elements;
  };

  const handleRightImages = () => {
    let elements = [];
    for (let i = 1; i <= values; i++) {
      let condition1 = values >= 4 && i == 2;
      let condition2 = values >= 13 && i >= 13;

      if (i === 1 || condition1 || condition2) {
        // console.log('>>>>>if', i);
      } else {
        elements.push(<div className={`changeNewBorderColor ${borderColor} vidCapture${values}_${i}`}>{videos[i - 2]}</div>);
      }
    }
    return elements;
  };
  const handleBottomImages = () => {
    let elements = [];
    if (values >= 13) {
      for (let i = 13; i <= values; i++) {
        elements.push(<div className={`changeNewBorderColor ${borderColor} vidCapture${values}_${i}`}>{videos[i - 2]}</div>);
      }

      return elements;
    }
  };

  const handleOnColorChange = (event) => {
    const { name } = event.target;
    console.log(name);
    setBorderColor(name);
  };
  const handleInviteMemberClick = () => {
    if (!canInviteMember) return;
    if (isPlatform('hybrid')) SocialSharing.share(inviteText);
    else {
      copyToClipboard(inviteText);
      AlertService.push('Invitation copied.');
    }
  };

  return (
    <div id='container'>
      <div id='contentContainer'>
        <aside id='nav_side'>
          {openNav ? (
            <div id='mySidepanel' style={{ color: 'white' }} className='sidepanel'>
              <a className='closebtn' onClick={handleOnOpenNav}>
                &times;
              </a>
              <div className={`menuItemSidebar${canRaiseHand ? 'active' : ''}`} onClick={handleRaiseHandClick}>
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={handRightOutline} />
                Raise hand
              </div>
              {/* <div onClick={handleEndMeetingClick}>
                {' '}
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={handRightOutline} />
                End meeting
              </div> */}
              {/* <div onClick={handleVideoClick}>
                {' '}/
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={handRightOutline} />
                Video Enable
              </div> */}
              <div className={`menuItemSidebar${canAudioMute ? 'active' : ''}`} onClick={handleAudioClick}>
                {' '}
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={micOutline} />
                Audio enable
              </div>
              <div className={`menuItemSidebar${canScreenShare ? 'active' : ''}`} onClick={handleScreenShareClick}>
                {' '}
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={laptopOutline} /> Screen share
              </div>
              <div className={`menuItemSidebar${canWhiteboardEnable ? 'active' : ''}`} onClick={handleWhiteboardClick}>
                {' '}
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={easelOutline} />
                White Board
              </div>
              <div className={`menuItemSidebar${canMemberRemove ? 'active' : ''}`} onClick={handleMemberRemoveClick}>
                {' '}
                <IonIcon style={{ marginRight: 20, marginLeft: 10 }} icon={personRemoveOutline} />
                Remove person
              </div>
              <div id='session'>
                <IonImg onClick={canEndMeeting ? handleEndMeetingClick : ''} className='session' src='/assets/sessionLeave.png' />
                <IonImg onClick={canVideoMute ? handleVideoClick : handleVideoClick} className='session' src='/assets/sessionPause.png' />
                <IonImg onClick={handleInviteMemberClick} className='session' src='/assets/sessionStart.png' />
              </div>
              <div id='newCaptureBorderColorsContainer'>
                <button name='green' onClick={handleOnColorChange} id='newCaptureGreen'></button>
                <button name='aqua' onClick={handleOnColorChange} id='newCaptureAqua'></button>
                <button name='red' onClick={handleOnColorChange} id='newCaptureRed'></button>
                <button name='orange' onClick={handleOnColorChange} id='newCaptureOrange'></button>
              </div>
            </div>
          ) : (
            <button className='openbtn' id='openbtn' onClick={handleOnOpenNav}>
              &#9776;
            </button>
          )}
        </aside>
        <main>
          <div className='mainTop'>
            {values >= 27 ? null : values === 26 ? (
              <div id='newMainContentAreaX26'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{videos[21]}</div>
                  <div className='newMainContentHeaderBg26'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture26_26'>Balcony Seats</div>
                  <div className='changeNewBorderColor vidCapture25_25'>{videos[24]}</div>
                  <div className='changeNewBorderColor vidCapture24_24'>{videos[23]}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{videos[22]}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>

                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 25 ? (
              <div id='newMainContentAreaX25'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{videos[21]}</div>
                  <div className='newMainContentHeaderBg25'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture25_25'>{videos[24]}</div>
                  <div className='changeNewBorderColor vidCapture24_24'>{videos[23]}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{videos[22]}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 24 ? (
              <div id='newMainContentAreaX24'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{videos[21]}</div>
                  <div className='newMainContentHeaderBg24'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture24_24'>{videos[23]}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{videos[22]}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 23 ? (
              <div id='newMainContentAreaX23'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{videos[21]}</div>
                  <div className='newMainContentHeaderBg23'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                        <div className='chan
                  geNewBorderColor vidCapture23_23'>{videos[22]}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 22 ? (
              <div id='newMainContentAreaX22'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{videos[22]}</div>
                  <div className='newMainContentHeaderBg22'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 21 ? (
              <div id='newMainContentAreaX21'>
                <div className='newMainContentHeaderBg21'>
                  <h3 className='banner_title'>{title} </h3>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{videos[10]}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{videos[20]}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        {/* <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div> */}
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{videos[16]}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{videos[15]}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{videos[14]}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{videos[13]}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{videos[12]}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{videos[2]}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{videos[3]}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{videos[4]}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{videos[5]}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{videos[6]}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{videos[7]}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{videos[8]}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{videos[9]}</div>
                  </div>
                </div>
              </div>
            ) : values === 20 ? (
              <div id='newMainContentAreaX20'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX20'>
                    <div className='changeNewBorderColor vidCapture20_1'>{videos[0]}</div>
                  </div>
                  <div className='x20BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture20_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture20_20'>{videos[19]}</div>
                    <div className='changeNewBorderColor vidCapture20_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture20_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture20_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture20_11'>{videos[10]}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          {/* <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div> */}
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture20_17'>{videos[16]}</div>
                        <div className='changeNewBorderColor vidCapture20_16'>{videos[15]}</div>
                        <div className='changeNewBorderColor vidCapture20_15'>{videos[14]}</div>
                        <div className='changeNewBorderColor vidCapture20_14'>{videos[13]}</div>
                        <div className='changeNewBorderColor vidCapture20_13'>{videos[12]}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture20_3'>{videos[2]}</div>
                      <div className='changeNewBorderColor vidCapture20_4'>{videos[3]}</div>
                      <div className='changeNewBorderColor vidCapture20_5'>{videos[4]}</div>
                      <div className='changeNewBorderColor vidCapture20_6'>{videos[5]}</div>
                      <div className='changeNewBorderColor vidCapture20_7'>{videos[6]}</div>
                      <div className='changeNewBorderColor vidCapture20_8'>{videos[7]}</div>
                      <div className='changeNewBorderColor vidCapture20_9'>{videos[8]}</div>
                      <div className='changeNewBorderColor vidCapture20_10'>{videos[9]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 19 ? (
              <div id='newMainContentAreaX19'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX18'>
                    <div className='changeNewBorderColor vidCapture19_1'>{videos[0]}</div>
                    <div className='changeNewBorderColor vidCapture19_2'>{videos[1]}</div>
                  </div>
                  <div className='x18BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture19_19'>{videos[18]}</div>
                    <div className='changeNewBorderColor vidCapture19_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture19_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture19_11'>{videos[10]}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          {/* <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div> */}
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture19_17'>{videos[16]}</div>
                        <div className='changeNewBorderColor vidCapture19_16'>{videos[15]}</div>
                        <div className='changeNewBorderColor vidCapture19_15'>{videos[14]}</div>
                        <div className='changeNewBorderColor vidCapture19_14'>{videos[13]}</div>
                        <div className='changeNewBorderColor vidCapture19_13'>{videos[12]}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture19_3'>{videos[2]}</div>
                      <div className='changeNewBorderColor vidCapture19_4'>{videos[3]}</div>
                      <div className='changeNewBorderColor vidCapture19_5'>{videos[4]}</div>
                      <div className='changeNewBorderColor vidCapture19_6'>{videos[5]}</div>
                      <div className='changeNewBorderColor vidCapture19_7'>{videos[6]}</div>
                      <div className='changeNewBorderColor vidCapture19_8'>{videos[7]}</div>
                      <div className='changeNewBorderColor vidCapture19_9'>{videos[8]}</div>
                      <div className='changeNewBorderColor vidCapture19_10'>{videos[9]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 18 ? (
              <div id='newMainContentAreaX18'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX18'>
                    <div className='changeNewBorderColor vidCapture18_1'>{videos[0]}</div>
                  </div>
                  <div className='x18BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture18_2'>{videos[1]}</div>
                    <div className='changeNewBorderColor vidCapture18_18'>{videos[17]}</div>
                    <div className='changeNewBorderColor vidCapture18_12'>{videos[11]}</div>
                    <div className='changeNewBorderColor vidCapture18_11'>{videos[10]}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          {/* <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div> */}
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture18_17'>{videos[16]}</div>
                        <div className='changeNewBorderColor vidCapture18_16'>{videos[15]}</div>
                        <div className='changeNewBorderColor vidCapture18_15'>{videos[14]}</div>
                        <div className='changeNewBorderColor vidCapture18_14'>{videos[13]}</div>
                        <div className='changeNewBorderColor vidCapture18_13'>{videos[12]}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture18_3'>{videos[2]}</div>
                      <div className='changeNewBorderColor vidCapture18_4'>{videos[3]}</div>
                      <div className='changeNewBorderColor vidCapture18_5'>{videos[4]}</div>
                      <div className='changeNewBorderColor vidCapture18_6'>{videos[5]}</div>
                      <div className='changeNewBorderColor vidCapture18_7'>{videos[6]}</div>
                      <div className='changeNewBorderColor vidCapture18_8'>{videos[7]}</div>
                      <div className='changeNewBorderColor vidCapture18_9'>{videos[8]}</div>
                      <div className='changeNewBorderColor vidCapture18_10'>{videos[9]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id={`newMainContentAreaX${values}`}>
                {values >= 11 ? (
                  <React.Fragment>
                    <div className={'x11Left'}>
                      <div className='newMainContentHeaderBgX12'>
                        <h3 className='banner_title'>{title} </h3>
                      </div>
                      <div className={'newMainContentMain'}>
                        <div className={`newMainContentLeft${values >= 12 ? 'X11' : values > 1 ? `X${values}` : ''}`}>
                          {handleLeftImages().map((item) => item)}
                        </div>
                        {values >= 13 ? (
                          <div className='x13Middle'>
                            <div className='newMainContentMiddleX13'>
                              <div className='newMainContentRightInner'>
                                {/* <div className='newMainContentRightInnerMenu'>
                                  <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                  </div>
                                </div> */}
                                <div className='newMainContentRightInnerTextarea'>
                                  <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                                </div>
                              </div>
                            </div>
                            <div className='x13BottomVids'>{handleBottomImages().map((item) => item)}</div>
                          </div>
                        ) : (
                          <div
                            className={`${
                              values >= 12 ? 'newMainContentMiddleX11' : values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'
                            }`}>
                            <div className='newMainContentRightInner'>
                              {/* <div className='newMainContentRightInnerMenu'>
                                <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>
                              </div> */}
                              <div className='newMainContentRightInnerTextarea'>
                                <div className='newMainContentRightInnerTextarea'>{activeVideo}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='x11Right'>{handleRightImages().map((item) => item)}</div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className='newMainContentHeaderBg'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                    <div className='newMainContentMain'>
                      <div className={`newMainContentLeft${values > 1 ? `X${values}` : ''}`}>{handleLeftImages().map((item) => item)}</div>
                      <div className={`${values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'}`}>
                        <div className='newMainContentRightInner'>
                          {/* <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div> */}
                          {/* {activeVideoSkeletonVisibility && ( */}
                          <div id='newMainContentRightInnerTextarea' className='newMainContentRightInnerTextarea'>
                            {activeVideo}
                          </div>
                          {/* )} */}
                        </div>
                      </div>
                      <div className={`newMainContentRightX${values}`}>{handleRightImages().map((item) => item)}</div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Grid;
