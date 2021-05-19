import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import routes from '../../routes';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';
import Start from '../Start/Start';
interface HomeProps extends RouteComponentProps {}

class Home extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleJoinClick = this.handleJoinClick.bind(this);
  }

  handleStartClick() {
    this.props.history.push(routes.start.path);
  }

  handleJoinClick() {
    this.props.history.push(routes.join.path);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.bannerContainer}>
            <img src='./assets/bannerLogin.png' alt='' />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.subContentContainer}>
              <div className={styles.mainContainer}>
                <div className={styles.mainSubContainer}>
                  <div className={styles.mainSubContainer1}>
                    <img src='./assets/kidpic.png' height='100%' alt='' />
                  </div>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Start />
                <div className={styles.MFLO}>What is Music Fun with your Little One?</div>
              </div>
            </div>
            <div className={styles.titleTxt}>Meet up with friends & family from anywhere, share our spectecular music journey </div>
            <div className={styles.lowerContainer}>
              <div className={styles.lowerSubContainer}>
                <img src='./assets/lower1.png' width='47%' height='80%' alt='' />
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>What is Music Fun with your Little One?</div>
                  <div className={styles.text}>
                    An enjoyable Parent/Guardian and Child experience with a live Instructor taking you on a journey of music appreciation.
                  </div>
                </div>
              </div>
              <div className={styles.lowerSubContainer}>
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>About our programs</div>
                  <div className={styles.text}>
                    We provide a group program with friends, families, groups and schools to interact and discover to joy of music.{' '}
                  </div>
                </div>
                <img src='./assets/lower2.png' width='47%' height='80%' alt='' />
              </div>
              <div className={styles.lowerSubContainer}>
                <img src='./assets/lower3.png' width='47%' height='80%' alt='' />
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>Music Fun... is #1 </div>
                  <div className={styles.text}>Best of all, you get to share your experience with your favorite people connecting online.. </div>
                </div>
              </div>
              <div className={styles.lowerSubContainer}>
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>How do I sign up?</div>
                  <div className={styles.text}>
                    Register and set up your day and time, Bring or join a group and start your music journey. It’s as easy as 1,2,3 & 4{' '}
                  </div>
                </div>
                <img src='./assets/lower4.png' width='47%' height='80%' alt='' />
              </div>
              <div className={styles.lowerSubContainer}>
                <img src='./assets/lower4.png' width='47%' height='80%' alt='' />
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>Who can join class?</div>
                  <div className={styles.text}>
                    Our classes are limited 8 participants with children. Bring your friends, cousins, team, band and experience the magic!{' '}
                  </div>
                </div>
              </div>
              <div className={styles.lowerSubContainer}>
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>Why enroll in the 8 week interactive program?</div>
                  <div className={styles.text}>Introduce music, have fun and try new and creative ways to interact with your little ... </div>
                </div>
                <img src='./assets/lower4.png' width='47%' height='80%' alt='' />
              </div>
              <div className={styles.lowerSubContainer}>
                <img src='./assets/lower4.png' width='47%' height='80%' alt='' />
                <div className={styles.textContainer}>
                  <div className={styles.highlightedtxt}>Who can join class?</div>
                  <div className={styles.text}>Music Fun with your Little One is an 8 week interactive program:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
