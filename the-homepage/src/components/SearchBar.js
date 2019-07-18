import React, { Component } from "react";
import {
  SearchPlatformBtn,
  SearchInput,
  SearchDropdown,
  SearchWrapper,
  SearchButton,
  TempDiv,
  EngineImage
} from "../styles/styles";
import google from '../styles/google.png';

class SearchBar extends Component {
  state = {
    isVisible: false,
    path: "https://www.google.com/search?q=",
    engine: "Google"
  };

  searchString = React.createRef();

  setEngine = event => {
    event.preventDefault();
    console.log("selected engine ", event.target.title);
    switch (event.target.title) {
      case "youtube":
        this.setState({
          engine: "Youtube",
          path: "https://www.youtube.com/results?search_query="
        });
        break;
      case "wikipedia":
        this.setState({
          engine: "Wikipedia",
          path: "https://en.wikipedia.org/wiki/"
        });
        break;
      default:
        this.setState({
          engine: "Google",
          path: "https://www.google.com/search?q="
        });
    }
    this.toggleDropdown();
  };

  redirect = event => {
    console.log("redirect");
    event.preventDefault();
    window.location = this.state.path + this.searchString.current.value;
  };

  toggleDropdown = event => {
    console.log("toggleDropDown");
    if (event) event.preventDefault();
    this.state.isVisible
      ? this.setState({ isVisible: false })
      : this.setState({ isVisible: true });
  };

  render() {
    return (
      <SearchWrapper>
        <TempDiv>
          <SearchPlatformBtn onClick={this.toggleDropdown}>
            {/* {this.state.engine} */}
          </SearchPlatformBtn>
          <SearchDropdown show={this.state.isVisible}>
            <SearchButton title="google" onClick={this.setEngine}>
              <EngineImage src={google}></EngineImage>
            </SearchButton>
            <SearchButton title="youtube" onClick={this.setEngine}>
              <EngineImage src={google}></EngineImage>
            </SearchButton>
            <SearchButton title="wikipedia" onClick={this.setEngine}>
              <EngineImage src={google}></EngineImage>
            </SearchButton>
          </SearchDropdown>
        </TempDiv>
        <form onSubmit={this.redirect}>
          <SearchInput
            placeholder="Enter search keyword"
            ref={this.searchString}
            required
          />
        </form>
      </SearchWrapper>
    );
  }
}

export default SearchBar;
