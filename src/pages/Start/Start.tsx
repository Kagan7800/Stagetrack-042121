import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import routes from '../../routes';
import Request from './Start.request';
import { actions, selectors, StartState, StartActions } from './Start.state';
import Page from '../../components/Page/Page';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
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
    this.handleLoginScreenConvert = this.handleLoginScreenConvert.bind(this);
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
  handleLoginScreenConvert() {
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
              <img style={{ cursor: 'pointer'}} src='./assets/loginbtn.png' alt='' />
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
        <div onClick={this.handleLoginScreenConvert} className={styles.STaccess}>
          Studio Access
        </div>
      );
    }
  }
  render() {
    return <>{this.handleLoginFormrender()}</>;
  }
}

export default withRouter(connect(selectors, actions)(Start));
