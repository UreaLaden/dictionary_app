import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { NavMenu } from './components/NavMenu';
import { Dictionary } from './components/Dictionary';

export default class App extends Component {
  static displayName = App.name;

  constructor(props){
    super(props)
    this.state ={
      searchWord:''
    }
  }
  setSearchWord = (value) => {
    this.setState({searchWord:value})
  }

  render() {
    return (
      <Layout>
        <NavMenu setSearchWord={this.setSearchWord}/>
        <Dictionary searchWord={this.state.searchWord}/>
      </Layout>
    );
  }
}
