/* global chrome*/
import React, { Component } from "react";
import { PageWrapper } from "../styles/styles";

class Greeting extends Component {
  render() {
    return (
      <PageWrapper>
        <p>HELLO {this.props.name}</p>
      </PageWrapper>
    );
  }
}

export default Greeting;
