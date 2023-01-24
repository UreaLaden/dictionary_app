import React, { Component } from "react";
import { SearchBox } from "@fluentui/react";
import { styles } from "./NavMenu.css";
import { Icon, Toggle } from "@fluentui/react";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let toggleIcon = <Icon className={styles.moonIcon} iconName={"moon"} />;
    return (
      <div className={styles.navBarContainer}>
        <header className={styles.navHeader}>
          <div className={styles.uiControls}>
            <div className={styles.icon}>
              <Icon iconName={"book"} />
            </div>
            <div className={styles.themes}>
              <div className={styles.fontFamily}>
                <div className={styles.familySelector}>
                  <select className={styles.fontOptions}>
                    <option value="Sans Serif">Sans Serif</option>
                    <option value="Serif">Serif</option>
                    <option selected value="Mono">
                      Mono
                    </option>
                  </select>
                </div>
              </div>
              <Icon className={styles.downArrow} iconName={"arrow-down"} />
              <div className={styles.verticalDivider}></div>
              <Toggle
                className={styles.toggle}
                inlineLabel
                label={<div>{toggleIcon}</div>}
              />
            </div>
          </div>
          <SearchBox className={styles.searchBox} placeholder={"Search"} />
        </header>
      </div>
    );
  }
}
