/* global chrome */
import React, { Component } from "react";
import Greeting from "./Greeting";
import Form from "./Form";
import Spinner from "./Spinner";
import ContentContainer from "./ContentContainer";
import { PageWrapper, GreetingDiv, QuotesDiv, SearchBarDiv, CardContainerDiv } from "../styles/general";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";
import Quotes from "./Quotes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameExist: "unknown",
      name: ""
    };
    this.inputName = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.getName();
    }, 1000);
  }

  setName = name => {
    chrome.storage.sync.set({ name: name }, function () {
      console.log("Name is set to  " + name);
    });
  };

  getName = () => {
    chrome.storage.sync.get(["name"], result => {
      if (result.name) {
        this.setState({ name: result.name, nameExist: true });
      } else {
        this.setState({ nameExist: false });
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setName(this.inputName.current.value);
    this.setState({ name: this.inputName.current.value, nameExist: true });
  };

  render() {
    switch (this.state.nameExist) {
      case true:
        return (
          <PageWrapper>
            <ThemeSelector toggleTheme={this.props.toggleTheme} />
            <GreetingDiv>
              <Greeting name={this.state.name} />
            </GreetingDiv>
            <QuotesDiv>
              <Quotes />
            </QuotesDiv>
            <SearchBarDiv>
              <SearchBar />
            </SearchBarDiv>
            <CardContainerDiv>
              <ContentContainer />
            </CardContainerDiv>
          </PageWrapper>
        );
      case false:
        return (
          <Form handleSubmit={this.handleSubmit} inputName={this.inputName} />
        );
      default:
        return (
          <PageWrapper>
            <Spinner />
          </PageWrapper>
        );
    }
  }
}

export default Main;
