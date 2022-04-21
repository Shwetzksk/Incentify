import React from "react";
import styles from "./_landing.module.scss";
import Button from "../../components/button/Button";
import PhoneGif from "../../assets/gif/Landing.gif";
import EmailSignup from "../../components/email-signup/email-signup";

export default function Landing() {
  return (
    <div className={`${styles.container}`}>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <div className={styles.phone}>
        <img src={PhoneGif} alt="" />
      </div>
      <div className={styles.content}>
        <h1>The Social Network for Music</h1>
        <div className={`${styles.desk_btn} `}>
          <EmailSignup />
        </div>
      </div>
      <div className={`${styles.mobile_btn} `}>
        <EmailSignup />
      </div>
    </div>
  );
}
