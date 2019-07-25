import React, { Component } from "react";
import Clock from "./Clock";
import { GreetingTextAndClockContainer } from "../styles/greeting";
import {
  GreetingText,
  GreetingWrapper,
  GreetingLine
} from "../styles/greeting";

class Greeting extends Component {
  state = {
    timePhrase: "Good Evening "
  };

  componentDidMount() {
    this.getCurrentTimeOfDay();
  }

  getCurrentTimeOfDay = () => {
    const today = new Date();
    const timeInHour = today.getHours();
    if (timeInHour >= 6 && timeInHour < 12)
      this.setState({ timePhrase: "Good Morning " });
    else if (timeInHour >= 12 && timeInHour < 18)
      this.setState({ timePhrase: "Good Afternoon " });
    else if (timeInHour >= 18 && timeInHour < 22)
      this.setState({ timePhrase: "Good Evening " });
    else if (timeInHour >= 22 || timeInHour < 6)
      this.setState({ timePhrase: "Good Night " });
  };

  render() {
    return (
      <GreetingWrapper>
        <GreetingLine />
        <GreetingTextAndClockContainer>
          <GreetingText>
            {this.state.timePhrase} {this.props.name}
          </GreetingText>
          <Clock />
        </GreetingTextAndClockContainer>
      </GreetingWrapper>
    );
  }
}

export default Greeting;
