import React, { Component } from "react";
import {
  SearchPlatformBtn,
  SearchInput,
  SearchDropdown,
  SearchWrapper,
  SearchButton,
  TempDiv
} from "../styles/searchBar";

class SearchBar extends Component {
  state = {
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
    event.preventDefault();
    window.location = this.state.path + this.searchString.current.value;
  };

  render() {
    return (
      <SearchWrapper>
        <TempDiv>
          <SearchPlatformBtn>
            {this.state.engine}
            <SearchDropdown show={this.state.isVisible}>
              <SearchButton title="google" onClick={this.setEngine}>
                Google
              </SearchButton>
              <SearchButton title="youtube" onClick={this.setEngine}>
                Youtube
              </SearchButton>
              <SearchButton title="wikipedia" onClick={this.setEngine}>
                Wikipedia
              </SearchButton>
            </SearchDropdown>
          </SearchPlatformBtn>
        </TempDiv>
        <form onSubmit={this.redirect}>
          <SearchInput
            placeholder="Enter search"
            ref={this.searchString}
            required
          />
        </form>
      </SearchWrapper>
    );
  }
}

export default SearchBar;
