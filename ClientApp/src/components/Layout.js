import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { styles } from './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className={styles.container}>
        <Container className={styles.main}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
