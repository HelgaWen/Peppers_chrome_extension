import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { SlInput, SlHeadline, InputContainer } from "../styles/slStyles";
class SL extends Component {

  render() {
    return (
  <ContentCard column>
    <SlHeadline>
        <h3>Metros from</h3>
        </SlHeadline>
      <form onSubmit={this.onSubmit}>
        <InputContainer>
          <SlInput placeholder="Origin" type="text" ref={this.title} />
          <h3> to </h3>
          <SlInput placeholder="Destination" type="text" ref={this.description} />
      </InputContainer>
      </form>
      <h3>Leaves in: </h3>
      <div>
      RESULTAT
      </div>
  </ContentCard>
    );
  }
}

export default SL;
