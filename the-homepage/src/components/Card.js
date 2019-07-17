import React, { Component } from "react";
import { ContentCard, GreetingText } from "../styles/styles";
const apiKey = process.env.REACT_APP_API_KEY;

class Card extends Component {

  render() {
    return (
      <ContentCard>
        <GreetingText>I am a card</GreetingText>
      </ContentCard>
    );
  }
}

export default Card;
