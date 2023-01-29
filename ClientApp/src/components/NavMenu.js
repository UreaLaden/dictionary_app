import React, { Component } from "react";
import { SearchBox } from "@fluentui/react";
import { styles } from "./NavMenu.css";
import { Icon, Toggle } from "@fluentui/react";
import { DropDown } from "./DropDown";
import { FontContext } from "../store/dictionary-context";

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  static contextType = FontContext;

  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  handleSearch = (value) => {
    this.clearInput();
    this.queryWord(value);
  };

  clearInput = () => {
    const input = this.searchRef.current.querySelector("input");
    input.value = "";
  };

  optionSelectedHandler = (option) => {
    this.context.setFont(option.family);
  }

  async queryWord(word) {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      this.context.setIsLoading(true);
      const data = await response.json();
      this.context.setIsLoading(false);
      this.context.updateWordDetails(data[0]);
    } catch (error) {
      console.log(`Unable to fetch: ${error}`);
    }
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
                <DropDown 
                  dropdownOptions={this.context.fontOptions} 
                  iconName={"arrow-down"} 
                  selectOption={this.optionSelectedHandler} />
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
