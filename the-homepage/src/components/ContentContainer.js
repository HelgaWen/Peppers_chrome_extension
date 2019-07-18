import React from "react";
import { ContentCardWrapper } from "../styles/contentContainer";
import SL from "./Sl";
import Todo from "./Todo";
import Weather from "./Weather";

function ContentContainer() {
  return (
    <ContentCardWrapper>
      <SL />
      <Todo />
      <Weather />
    </ContentCardWrapper>
  );
}

export default ContentContainer;
