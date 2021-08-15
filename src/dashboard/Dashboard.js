import React from "react";
import styles from "./Dashboard.module.scss";
import NavigationPane from "./NavigationPane";
import HomePane from "./HomePane";
import PaneLayout from "./PaneLayout";
import BuyStockPane from "./BuyStockPane";
import ViewChartPane from "./ViewChartPane";
import LogoutPane from "./LogoutPane";
import Cookies from "js-cookie";
import Header from "./Header";

/**
 * Page that displays the dashboard. This includes the navigation pane and the
 * main content pane. The main pane can be changed depending on which navigation
 * item is selected.
 *
 * This component stores `activeIndex` in its state. This is a 0-indexed number
 * indicating which nav item to highlight and which pane to display.
 *
 * It also stores the login token, `token` in the state.
 */
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      token: Cookies.get("token")
    };

    console.log("Token received: " + this.state.token);

    this.onSelect = this.onSelect.bind(this);
  }
  /**
   * Changes which navigation item is active.
   *
   * @param {integer} i the index of the navigation item to select,
   *                    corresponding to the pane to display.
   */
  onSelect(i) {
    this.setState({ activeIndex: i });
  }

  render() {
    const navItems = ["Logout"];
    const panes = [
      <LogoutPane />
    ];

    return (
      <div className={styles.containerParent}>
        
        <main className={styles.containerMain}>
        <Header />
          <div className={styles.containerPanes}>
          {/* <a class="menu-item dropdown">
            <a title="Platforms" className={styles.dropdownTitle}>Platforms</a>
            <span class="dropdown-toggle shapely-dropdown" data-toggle="dropdown" >
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
            <ul role="menu" class=" dropdown-menu">
            <li class="menu-item" className={styles.dropdown} >
              <a title="Purple" href="../landing/Temp" className={styles.dropdownItems}>Purple</a></li>
            <li class="menu-item" className={styles.dropdown}>
              <a title="Amazon" href="../landing/Temp"className={styles.dropdownItems}>Amazon</a></li>
            <li class="menu-item"className={styles.dropdown}>
              <a title="Flipkart" href="../landing/Temp"className={styles.dropdownItems}>Flipkart</a></li>
            <li class="menu-item"className={styles.dropdown}>
              <a title="Myntra" href="../landing/Temp"className={styles.dropdownItems}>Myntra</a></li>
            <li class="menu-item"className={styles.dropdown}>
              <a title="1mg" href="../landing/Temp"className={styles.dropdownItems}>1mg</a></li>
              </ul>
            </a> */}
          </div>
        </main>
      </div>
    );
  }
}
