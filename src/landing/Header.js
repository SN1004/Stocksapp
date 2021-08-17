import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

/**
 * Header used on the landing page.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Minimalist
      </h1>
      <Link to="/login" className={styles.button}>
        Logout
      </Link>
    </header>
  );
}
