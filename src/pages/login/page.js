import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  goAbout() {
    browserHistory.push('/about');
  }
  
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
        <button className={styles.signUpButton} onClick={this.goAbout}>About</button>
      </div>
    );
  }
}
