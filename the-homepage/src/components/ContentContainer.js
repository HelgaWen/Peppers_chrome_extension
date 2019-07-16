import React, { Component } from "react";
import { ContentCardWrapper, ContentCard } from "../styles/styles";
import Card from "./Card";

class ContentContainer extends Component {
  render() {
    return (
      <ContentCardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentCardWrapper>
    );
  }
}

export default ContentContainer;
