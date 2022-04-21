import React from "react";
import styles from "./_social-media.module.scss";
import SubstackLogo from "../../assets/icons/substack.png";
import twitterImg from "../../assets/icons/twitter.png";
import instagramImg from "../../assets/icons/instagram.svg";
import { MediumLogo } from "phosphor-react";

function SocialMedias() {
  return (
    <div className={`${styles.container}`}>
      <a
        href=" https://www.instagram.com/clubincentify/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramImg} alt="substack" className={styles.icon} />
      </a>

      <a
        href="https://twitter.com/clubincentify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterImg} alt="substack" className={styles.icon} />
      </a>
      <a
        href=" https://incentify.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={SubstackLogo} alt="substack" className={styles.icon} />
      </a>
      <a
        href=" https://medium.com/@clubincentify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MediumLogo size={30} weight="fill" className={styles.icon} />
      </a>
    </div>
  );
}

export default SocialMedias;
