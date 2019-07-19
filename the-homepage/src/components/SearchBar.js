import React, { Component } from "react";
import {
  Engine,
  Input,
  Dropdown,
  Wrapper,
  Button,
  DropdownContainer,
  Image,
  EngineContainer
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
      <Wrapper>
        <DropdownContainer>
          <Engine>
            <EngineContainer>
              <Image src={this.state.engine} />
            </EngineContainer>
            <Dropdown >
              <Button title="google" onClick={this.setEngine}>
                <Image src={google} title="google" onClick={this.setEngine} />
              </Button>
              <Button title="youtube" onClick={this.setEngine}>
                <Image src={youtube} title="youtube" onClick={this.setEngine} />
              </Button>
              <Button title="wikipedia" onClick={this.setEngine}>
                <Image src={wikipedia} title="wikipedia" onClick={this.setEngine} />
              </Button>
            </Dropdown>
          </Engine>
        </DropdownContainer>
        <form onSubmit={this.redirect}>
          <Input
            placeholder="Enter search"
            ref={this.searchString}
            required
          />
        </form>
      </Wrapper>
    );
  }
}

export default SearchBar;
