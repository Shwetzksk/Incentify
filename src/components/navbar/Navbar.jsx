import React, { useState } from "react";
import IncentifyLogo from "../../assets/icons/logo-text.png";
import { Link } from "react-router-dom";
import styles from "./_navbar.module.scss";
import SocialMedias from "../social-medias/Social-medias";

function Links(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.links}>
        <div onClick={props.onClose}>
          <a href="#introducing-club">Introducing Clubs ⚡</a>
        </div>
        <div onClick={props.onClose}>
          <Link to="/about">About Us</Link>
        </div>
        <div onClick={props.onClose}>
          <a
            href="https://medium.com/@clubincentify"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div onClick={props.onClose}>
          <a href="mailto:rohan@incentify.club">Contact</a>
        </div>
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
      <div
        className={`${styles.menu_icon} ${showMenu ? styles.close_icon : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.menu_container} ${
          showMenu && styles.menu_container_mobile
        }`}
      >
        <Links onClose={() => setShowMenu(false)} />
      </div>
    </div>
  );
}
