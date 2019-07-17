import React, { Component } from "react";
import { ContentCardWrapper } from "../styles/styles";
import SL from "./Sl";
import Todo from "./Todo";

class ContentContainer extends Component {
  render() {
    return (
      <ContentCardWrapper>
        <SL />
        <Todo />
      </ContentCardWrapper>
    );
  }
}

export default ContentContainer;
