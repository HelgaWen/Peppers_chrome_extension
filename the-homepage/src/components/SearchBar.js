import React, { Component } from "react";
import {
  PageWrapper,
  SearchPlatform,
  SearchInput,
  SearchDropdown
} from "../styles/styles";

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
      <PageWrapper>
        <SearchPlatform onClick={this.toggleDropdown}>
          {this.state.engine}
        </SearchPlatform>
        <SearchDropdown show={this.state.isVisible}>
          <button title="google" onClick={this.setEngine}>
            Google
          </button>
          <button title="youtube" onClick={this.setEngine}>
            Youtube
          </button>
          <button title="wikipedia" onClick={this.setEngine}>
            Wikipedia
          </button>
        </SearchDropdown>
        <form onSubmit={this.redirect}>
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
