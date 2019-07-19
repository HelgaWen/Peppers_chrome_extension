import React, { Component } from "react";
import {
  SearchEngine,
  SearchInput,
  SearchDropdown,
  SearchWrapper,
  SearchButton,
  DropdownContainer,
  EngineImage,
  SearchEngineContainer
} from "../styles/searchBar";
import google from '../styles/images/google.png';
import youtube from '../styles/images/youtube.png';
import wikipedia from '../styles/images/wikipedia.png';

class SearchBar extends Component {
  state = {
    path: "https://www.google.com/search?q=",
    engine: google
  };

  searchString = React.createRef();


  setEngine = event => {
    event.preventDefault();
    console.log("selected engine ", event.target.title);
    switch (event.target.title) {
      case "youtube":
        this.setState({
          engine: youtube,
          path: "https://www.youtube.com/results?search_query="
        });
        break;
      case "wikipedia":
        this.setState({
          engine: wikipedia,
          path: "https://en.wikipedia.org/wiki/"
        });
        break;
      default:
        this.setState({
          engine: google,
          path: "https://www.google.com/search?q="
        });
    }

  };

  redirect = event => {
    event.preventDefault();
    window.location = this.state.path + this.searchString.current.value;
  };

  render() {
    return (
      <SearchWrapper>
        <DropdownContainer>
          <SearchEngine>
            <SearchEngineContainer>
              <EngineImage src={this.state.engine} />
            </SearchEngineContainer>
            <SearchDropdown >
              <SearchButton title="google" onClick={this.setEngine}>
                <EngineImage src={google} title="google" onClick={this.setEngine} />
              </SearchButton>
              <SearchButton title="youtube" onClick={this.setEngine}>
                <EngineImage src={youtube} title="youtube" onClick={this.setEngine} />
              </SearchButton>
              <SearchButton title="wikipedia" onClick={this.setEngine}>
                <EngineImage src={wikipedia} title="wikipedia" onClick={this.setEngine} />
              </SearchButton>
            </SearchDropdown>
          </SearchEngine>
        </DropdownContainer>
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
