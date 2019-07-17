import React, { Component } from "react";
import { PageWrapper, SpinnerAnimation } from "../styles/styles";

class Spinner extends Component {
  render() {
    return (
      <PageWrapper>
        <SpinnerAnimation />
      </PageWrapper>
    )
  }
}

export default Spinner;
