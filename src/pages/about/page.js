import React from "react";
import styles from "./style.css";


export default class AboutPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>About</h1>
        <p className={styles.welcomeText}>Thanks for joining!</p>
      </div>
    );
  }
}
