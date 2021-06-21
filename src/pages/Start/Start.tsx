<<<<<<< HEAD
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import routes from '../../routes';
import Request from './Start.request';
import { actions, selectors, StartState, StartActions } from './Start.state';
import styles from './start.module.scss';
interface StartProps extends StartState, StartActions, RouteComponentProps {}

class Start extends Component<StartProps> {
  request: Request;

  constructor(props: any) {
    super(props);
    this.request = new Request();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleLoginFormrender = this.handleLoginFormrender.bind(this);
    this.handleReplaceLoginScreenWithStartScreen = this.handleReplaceLoginScreenWithStartScreen.bind(this);
  }

  handleInputChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const { value, name } = target;
    switch (name) {
      case 'username':
        this.props.replaceUsername(value);
        break;
      case 'password':
        this.props.replacePassword(value);
        break;
    }
  }

  handleStartClick() {
    const { username, password } = this.props;
    const credentials = { username, password };
    this.request.signIn(credentials, () => {
      this.props.replaceAppAuthType('host');
      this.props.history.push(routes.meeting.path);
    });
  }
  handleReplaceLoginScreenWithStartScreen() {
    this.props.replaceApploginScreen();
  }
  clearForm() {
    this.props.replaceUsername('');
    this.props.replacePassword('');
  }

  componentWillUnmount() {
    this.clearForm();
  }
  handleLoginFormrender() {
    if (this.props.clicked) {
      return (
        <div className={styles.STaccessContainer}>
          <div className={styles.STaccess1}>Studio Access</div>
          <div className={styles.inputContainer}>
            <input name='username' type='text' value={this.props.username} placeholder='Username' onChange={this.handleInputChange} />
            <input name='password' type='password' value={this.props.password} placeholder='Password' onChange={this.handleInputChange} />
          </div>
          <div onClick={this.handleStartClick}>
            <img style={{ cursor: 'pointer' }} src='./assets/loginbtn.png' alt='' />
          </div>
          <div className={styles.forgotPassword}>Forgot Password</div>
          <div style={{ textAlign: 'center' }}>
            <div className={styles.Register}>Register </div>
            <div className={styles.Register_sub_text}>as New User</div>
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={this.handleReplaceLoginScreenWithStartScreen} className={styles.STaccess}>
          <div className={styles.arrow_container}>
            <div className={styles.arrow_down}></div>
          </div>
          <div className={styles.STaccessText}>Studio Access</div>
        </div>
      );
    }
  }
  render() {
    return <>{this.handleLoginFormrender()}</>;
  }
}

export default withRouter(connect(selectors, actions)(Start));
=======
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import React, { ChangeEvent, Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import routes from '../../routes'
import Request from './Start.request'
import { actions, selectors, StartState, StartActions } from './Start.state'
import Page from '../../components/Page/Page'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

interface StartProps extends StartState, StartActions, RouteComponentProps {}

class Start extends Component<StartProps> {
  request: Request

  constructor (props: any) {
    super(props)
    this.request = new Request()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStartClick = this.handleStartClick.bind(this)
  }

  handleInputChange (event: ChangeEvent) {
    const target = event.target as HTMLInputElement
    const { value, name } = target
    switch (name) {
      case 'username':
        this.props.replaceUsername(value)
        break
      case 'password':
        this.props.replacePassword(value)
        break
    }
  }

  handleStartClick () {
    const { username, password } = this.props
    const credentials = { username, password }
    this.request.signIn(credentials, () => {
      this.props.replaceAppAuthType('host')
      this.props.history.push(routes.meeting.path)
    })
  }

  clearForm () {
    this.props.replaceUsername('')
    this.props.replacePassword('')
  }

  componentWillUnmount () {
    this.clearForm()
  }

  render () {
    return (
      <IonPage>
        <IonContent>
          <Page
            invert={false}
            container="small">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <Input
                    name="username"
                    type="text"
                    value={this.props.username}
                    placeholder="Username"
                    handleChange={this.handleInputChange} />
                  <Input
                    name="password"
                    type="password"
                    value={this.props.password}
                    placeholder="Password"
                    handleChange={this.handleInputChange} />
                  <Button
                    text="Start Meeting"
                    handleClick={this.handleStartClick} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </Page>
        </IonContent>
      </IonPage>
    )
  }
}

export default withRouter(connect(selectors, actions)(Start))
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
