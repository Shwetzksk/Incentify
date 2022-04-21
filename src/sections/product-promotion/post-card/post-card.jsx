import React from "react";
import styles from "./_post-card.module.scss";

function PostCard(props) {
  return (
    <div className={`${styles.container}`}>
      <span className={`${styles.icon}`}>{props.icon}</span>
      {Boolean(props.iconImg) && (
        <img className={`${styles.icon}`} src={props.iconImg} alt="icon img" />
      )}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.url} alt={props.id} className={`${styles.post}`} />
      </a>
    </div>
  );
}

export default PostCard;
