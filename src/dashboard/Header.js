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
        Stocks Market App
      </h1>
      <Link to="/login" className={styles.button}>
        Logout
      </Link>
      <Link to={link} className={styles.dropdownItems}>
        Purple
      </Link>
      <Link to={link} className={styles.dropdownItems}>
        Flipkart
      </Link>
      <Link to={link} className={styles.dropdownItems}>
        Amazon
      </Link>
      <Link to={link} className={styles.dropdownItems}>
        Myntra
      </Link>
      <Link to={link} className={styles.dropdownItems}>
        1mg
      </Link>
      <hr className={styles.line}/>
      {/* <Link to="/register" className={styles.button}>
        Register
      </Link> */}
    </header>
  );
}
