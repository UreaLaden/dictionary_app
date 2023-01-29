import React, { Component } from "react";
import { Layout } from "./components/Layout";
import { NavMenu } from "./components/NavMenu";
import { Dictionary } from "./components/Dictionary";
import { FontContext } from "./store/dictionary-context";
import { dropdownOptions } from "./utils/constants";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default class App extends Component {
  static displayName = App.name;
  static contextType = FontContext;

  componentDidMount() {
    dropdownOptions.forEach((option) => {
      this.context.addFontOption(option);
    });
    this.context.setFont(dropdownOptions[0].family);
  }

  render() {
    return (
      <Layout>
        <NavMenu />
        <Dictionary currentFont={this.context.currentFont} />
      </Layout>
    );
  }
}
