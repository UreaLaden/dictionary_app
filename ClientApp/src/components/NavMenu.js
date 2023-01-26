import React, { Component } from "react";
import { SearchBox } from "@fluentui/react";
import { styles } from "./NavMenu.css";
import { Icon, Toggle } from "@fluentui/react";
import {DropDown} from './DropDown';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      searchParam: "",
      currentFont: "Mono",
    };
    this.searchRef = React.createRef();
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleSearch = (value) => {
    this.props.setSearchWord(value);
  };

  // onRenderPlaceHolder = (props) => {
  //   console.log(this.panelRef.current?.panel);
  //   return (
  //     <div className={styles.familySelector}>
  //       <span>{props.placeholder}</span>
  //       <Icon iconName={"arrow-down"} />
  //     </div>
  //   );
  // };
  // onRenderCarotDown = (props) => {
  //   console.log(this.panelRef.current?.panel);
  //   return (
  //       <Icon iconName={"arrow-down"} />
  //   );
  // };

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
                  <DropDown iconName={'arrow-down'}/>
              </div>
              <div className={styles.verticalDivider}></div>
              <Toggle
                className={styles.toggle}
                defaultChecked
                inlineLabel
                label={<div>{toggleIcon}</div>}
              />
            </div>
          </div>
          <SearchBox
            className={styles.searchBox}
            ref={this.searchRef}
            placeholder={"Search for any word..."}
            onSearch={this.handleSearch}
          />
        </header>
      </div>
    );
  }
}
