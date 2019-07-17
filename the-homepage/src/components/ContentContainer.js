import React from "react";
import { ContentCardWrapper } from "../styles/contentContainer";
import SL from "./Sl";
import Todo from "./Todo";

function ContentContainer() {
  return (
    <ContentCardWrapper>
      <SL />
      <Todo />
    </ContentCardWrapper>
  );
}

export default ContentContainer;
