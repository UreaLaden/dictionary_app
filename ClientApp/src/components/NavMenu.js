import React, { Component } from "react";
import { SearchBox } from "@fluentui/react";
import { styles } from "./NavMenu.css";
import { Icon, Toggle } from "@fluentui/react";
import { DropDown } from "./DropDown";
import { FontContext } from "../store/dictionary-context";
import { EnableDarkMode } from "../utils/constants";

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  static contextType = FontContext;

  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
    this.toggleRef = React.createRef();
    this.state = {
      darkmodeEnabled: false,
    };
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
  };

  onToggleButtonClicked = (event) => {
    this.context.enableDarkmode(!this.state.darkmodeEnabled);
    EnableDarkMode(!this.state.darkmodeEnabled);
    this.setState({darkmodeEnabled:!this.state.darkmodeEnabled});
  };

  async queryWord(word) {
    try{
      this.context.setIsLoading(true);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.context.updateWordDetails(data[0]);
        this.context.setErrorDetails(data);
        this.context.setIsLoading(false);
      })          
      .catch((error) => {
        console.log(`Unable to fetch: ${error}`);
      });
    }catch(error){
      console.log('There was an issue with the request');
      console.table(error);
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
                  selectOption={this.optionSelectedHandler}
                />
              </div>
              <div className={styles.verticalDivider}></div>
              <Toggle
                className={styles.toggle}
                ref={this.toggleRef}
                defaultChecked={this.context.darkmodeEnabled}
                inlineLabel
                label={<div>{toggleIcon}</div>}
                onChange={this.onToggleButtonClicked}
              />
            </div>
          </div>
          <SearchBox
            className={
              this.context.darkmodeEnabled
                ? styles.searchBoxDark
                : styles.searchBoxLight
            }
            ref={this.searchRef}
            style={{ fontFamily: this.context.currentFont }}
            placeholder={"Search for any word..."}
            onSearch={this.handleSearch}
          />
        </header>
      </div>
    );
  }
}
