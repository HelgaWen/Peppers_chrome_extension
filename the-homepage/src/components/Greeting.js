/* global chrome*/
import React, { Component } from "react";
import { PageWrapper, GreetingText, GreetingWrapper } from "../styles/styles";

class Greeting extends Component {
  render() {
    return (
      <GreetingWrapper>
        <GreetingText>HELLO {this.props.name}</GreetingText>
      </GreetingWrapper>
    );
  }
}

export default Greeting;
