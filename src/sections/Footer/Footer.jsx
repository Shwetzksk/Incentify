import React from "react";
import styles from "./_footer.module.scss";
import logo from "../../assets/icons/logo-text.png";
import SocialMedias from "../../components/social-medias/Social-medias";

function Footer() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="logo" />
      </div>
      <div className={`${styles.sub_container}`}>
        <div className={`${styles.links}`}>
          <span>Terms of use</span>
          <span>Privacy policy</span>
        </div>
        <div className={`${styles.socialMedias}`}>
          <p>Connect with us</p>
          <SocialMedias />
        </div>
      </div>
    </div>
  );
}

export default Footer;
