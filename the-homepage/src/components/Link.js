import React, { Component } from "react";
import { TodoItem, LinkDisplay, RmvButton } from '../styles/favouriteLinksStyles';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleLinkClick = event => {
    event.preventDefault();
    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true });
  }

  handleRemoveButtonClick = event => {
    event.preventDefault();
    this.props.deleteLink(this.props.id);
  }

  render () {
    return (
      <TodoItem clicked={this.state.clicked} onClick={this.handleLinkClick}>
        <LinkDisplay>{this.props.links.link}</LinkDisplay>
        <RmvButton clicked={this.state.clicked} onClick={this.handleRemoveButtonClick}>Remove</RmvButton>
      </TodoItem>
    );
  }
}

export default Link;
