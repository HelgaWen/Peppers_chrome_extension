import React, {Component} from 'react';
import { Container } from '../styles/departureStyles';

class Departure extends Component {
  constructor(props) {
    super(props);
  }
  
  getTimeLeftInMin = () => {
    const today = new Date(); 
    const metroDateObj = Date.parse(this.props.metro.time);
    const diff = metroDateObj - today;
    return Math.floor(((diff % 86400000) % 3600000) / 60000);
  }

  render() {
  return (
    <Container>
      <h2>{this.getTimeLeftInMin()} min</h2>
      <h2>{this.props.metro.direction}</h2>
    </Container>
  )
  }
}

export default Departure;