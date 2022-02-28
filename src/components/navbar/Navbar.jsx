import React, { useState } from "react";
import IncentifyLogo from "../../assets/icons/logo-text.png";
import { Link } from "react-router-dom";
import styles from "./_navbar.module.scss";
import SocialMedias from "../social-medias/Social-medias";

function Links() {
  return (
    <div className={styles.menu}>
      <div className={styles.links}>
        <div>
          <a href="#introducing-club">Introducing Clubs ⚡</a>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <SocialMedias />
    </div>
  );
}
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={IncentifyLogo} alt="inentify logo" />
        </Link>
      </div>
      <div className={`${styles.menuIcon}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.menu_container} ${
          showMenu && styles.menu_container_mobile
        }`}
      >
        <Links />
      </div>
    </div>
  );
}
