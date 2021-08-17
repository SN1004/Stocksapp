import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

/**
 * Header used on the landing page.
 */

const link = "/dashboard"
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Minimalist
      </h1>
      <Link to="/login" className={styles.buttonlogin}>
        Logout
      </Link>
      <Link to={link} className={styles.button}>
        Purple
      </Link>
      <Link to={link} className={styles.button}>
        Flipkart
      </Link>
      <Link to={link} className={styles.button}>
        Amazon
      </Link>
      <Link to={link} className={styles.button}>
        Myntra
      </Link>
      <Link to={link} className={styles.button}>
        1mg
      </Link>
      {/* <hr className={styles.line}/> */}
      {/* <Link to="/register" className={styles.button}>
        Register
      </Link> */}
    </header>
  );
}
