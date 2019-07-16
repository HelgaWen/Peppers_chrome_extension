import React, { Component } from "react";
import {
  PageWrapper,
  SearchPlatform,
  SearchInput,
  SearchDropdown
} from "../styles/styles";

class SearchBar extends Component {
  state = {
    engine: ["google", "youtube", "wikipedia"],
    isVisible: true
  };

  searchString = React.createRef();

  redirect = event => {
    event.preventDefault();
    window.location =
      "https://www.google.com/search?q=" + this.searchString.current.value;
  };

  render() {
    return (
      <PageWrapper>
        <form onSubmit={this.redirect}>
          <SearchPlatform>Google</SearchPlatform>
          <SearchDropdown show={this.state.isVisible}>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
          </SearchDropdown>
          <SearchInput
            placeholder="Enter search keyword"
            ref={this.searchString}
            required
          />
        </form>
      </PageWrapper>
    );
  }
}

export default SearchBar;
