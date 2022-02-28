import React from "react";
import styles from "./_card.module.scss";

function Card(props) {
  const { img, text, title, id } = props;
  return (
    <div className={`${styles.container} ${styles[id]}`}>
      <img src={img} alt="gif" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
