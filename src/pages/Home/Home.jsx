import React from "react";
import styles from "./_home.module.scss";
import Landing from "../../sections/landing/Landing";
import Purpose from "../../sections/purpose/Purpose";
import Promotion from "../../sections/product-promotion/Product-promotion";

function Home() {
  return (
    <div className={`${styles.container}`}>
      <Landing />
      <Purpose />
      <Promotion />
    </div>
  );
}

export default Home;
