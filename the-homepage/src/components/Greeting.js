import React, { Component } from "react";
import { GreetingText, GreetingWrapper, GreetingLine } from "../styles/greeting";

class Greeting extends Component {
  state = {
    timePhrase: 'Good Evening '
  }

  componentDidMount() {
    this.getCurrentTimeOfDay();
  }
  getCurrentTimeOfDay = () => {
    const today = new Date();
    // const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timeInHour = today.getHours();

    switch (timeInHour) {
      case timeInHour > '06' && timeInHour < '12': this.setState({ timeOfDay: 'Good Morning ' })
        break;
      case timeInHour > '12' && timeInHour < '18': this.setState({ timeOfDay: 'Good Afternoon ' })
        break;
      case timeInHour > '18' && timeInHour < '22': this.setState({ timeOfDay: 'Good Evening ' })
        break;
      case timeInHour > '22' && timeInHour < '06': this.setState({ timeOfDay: 'Good Night ' })
        break;
      default: this.setState({ timeOfDay: 'Good day ' })
    }
  }

  render() {
    return (
      <GreetingWrapper>
        <GreetingLine />
        <GreetingText>{this.state.timePhrase} {this.props.name}</GreetingText>
      </GreetingWrapper>
    );
  }
}

export default Greeting;
