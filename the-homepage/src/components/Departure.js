import React, { Component } from 'react';
import { Container, Text } from '../styles/departureStyles';

class Departure extends Component {

  getTimeLeftInMin = () => {
    const today = new Date();
    const metroDateObj = Date.parse(this.props.metro.time);
    const diff = metroDateObj - today;
    return Math.floor(((diff % 86400000) % 3600000) / 60000);
  }

  render() {
    return (
      <Container>
        <Text>{this.getTimeLeftInMin()} min {this.props.metro.direction} </Text>
      </Container>
    )
  }
}

export default Departure;