import React, { Component } from "react";
import { GreetingText, GreetingWrapper } from "../styles/greeting";

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
