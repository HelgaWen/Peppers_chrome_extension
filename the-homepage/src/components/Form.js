import React, { Component } from "react";
import {
  InputWrapper,
  InputLabel,
  NameInput
} from "../styles/form";
import { PageWrapper } from "../styles/general";

class Form extends Component {
  render() {
    return (
      <PageWrapper>
        <InputWrapper>
          <form onSubmit={this.props.handleSubmit}>
            <InputLabel>Please enter your name</InputLabel>
            <NameInput
              required
              type="text"
              name="Title"
              ref={this.props.inputName}
              placeholder="Your name here"
            />
          </form>
        </InputWrapper>
      </PageWrapper>
    );
  }
}

export default Form;
