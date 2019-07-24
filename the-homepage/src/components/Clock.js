import React, { Component } from "react";
import ClockContainer from "./ClockContainer";
import { ClockWrapper } from "../styles/greeting";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const time = new Date();
    // set time units
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      this.setState({
        hours
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      this.setState({
        minutes
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      this.setState({
        seconds
      });
    }
  }

  render() {
    // state object destructuring
    const { hours, minutes, seconds, hoursShuffle } = this.state;

    return (
      <ClockWrapper>
        <ClockContainer unit={"hours"} digit={hours} shuffle={hoursShuffle} />:
        <ClockContainer unit={"minutes"} digit={minutes} />:
        <ClockContainer unit={"seconds"} digit={seconds} />
      </ClockWrapper>
    );
  }
}

export default Clock;
