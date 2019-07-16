import React, { Component } from "react";
import { ContentCard, GreetingText } from "../styles/styles";

class Card extends Component {
  render() {
    return (
      <ContentCard>
        <GreetingText>Hello</GreetingText>
      </ContentCard>
    );
  }
}

export default Card;
