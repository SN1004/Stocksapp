import React from "react";
import styles from "./Card.module.scss";

/**
 * A card which displays one piece of information in a dashboard pane.
 *
 * It takes the following as props:
 *  - `title`
 *  - `children`
 */
export default function Card(props) {
  return (
    <div className={styles.card}>
      <a className={styles.title}>{props.title}</a>
      {props.children}
    </div>
  );
}
