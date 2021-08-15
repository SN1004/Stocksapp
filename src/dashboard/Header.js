import React from "react";
import styles from "../common/Header.module.scss";
import { Link } from "react-router-dom";

/**
 * Header used on the landing page.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Stocks Market App
      </h1>
      <Link to="/admin/login" className={styles.button}>
        Admin Login
      </Link>
      <Link to="/login" className={styles.button}>
        Logout
      </Link>
      <hr className={styles.line}/>
      <h2 className={styles.dropdownTitle}>
        Platforms <span>&#8658;</span>
      </h2>
      <Link to="/landing/Temp" className={styles.dropdownItems}>
        Purple
      </Link>
      <Link to="/landing/Temp" className={styles.dropdownItems}>
        Flipkart
      </Link>
      <Link to="/landing/Temp" className={styles.dropdownItems}>
        Amazon
      </Link>
      <Link to="/landing/Temp" className={styles.dropdownItems}>
        Myntra
      </Link>
      <Link to="/landing/Temp" className={styles.dropdownItems}>
        1mg
      </Link>
      {/* <Link to="/register" className={styles.button}>
        Register
      </Link> */}
    </header>
  );
}
