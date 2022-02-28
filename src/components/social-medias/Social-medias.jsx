import React from "react";
import styles from "./_social-media.module.scss";
import SubstackLogo from "../../assets/icons/substack.png";
import twitterImg from "../../assets/icons/twitter.png";
import instagramImg from "../../assets/icons/instagram.svg";
import { MediumLogo } from "phosphor-react";

function SocialMedias() {
  return (
    <div className={`${styles.container}`}>
      <img src={instagramImg} alt="substack" className={styles.icon} />
      <img src={twitterImg} alt="substack" className={styles.icon} />
      <img src={SubstackLogo} alt="substack" className={styles.icon} />
      <MediumLogo size={30} weight="fill" className={styles.icon} />
    </div>
  );
}

export default SocialMedias;
