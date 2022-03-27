import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  const { buttonText, buttonHandler } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{" "}
        <spa className={styles.title2}>Connoisseur</spa> ☕
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops! </p>
      <button className={styles.button} onClick={buttonHandler}>
        {buttonText}
      </button>
    </div>
  );
}

export default Banner;
