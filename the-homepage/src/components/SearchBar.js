import React, { Component } from "react";
import {
  Engine,
  Input,
  Dropdown,
  Wrapper,
  Button,
  DropdownContainer,
  Image,
  EngineContainer,
  Form
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
      case "Youtube":
        this.setState({
          engine: youtube,
          path: "https://www.youtube.com/results?search_query="
        });
        break;
      case "Wikipedia":
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
              <Button title="Google" onClick={this.setEngine}>
                <Image src={google} title="Google" onClick={this.setEngine} />
              </Button>
              <Button title="Youtube" onClick={this.setEngine}>
                <Image src={youtube} title="Youtube" onClick={this.setEngine} />
              </Button>
              <Button title="Wikipedia" onClick={this.setEngine}>
                <Image src={wikipedia} title="Wikipedia" onClick={this.setEngine} />
              </Button>
            </Dropdown>
          </Engine>
        </DropdownContainer>
        <Form onSubmit={this.redirect}>
          <Input
            placeholder="Enter search"
            ref={this.searchString}
            required
          />
        </Form>
      </Wrapper>
    );
  }
}

export default SearchBar;
