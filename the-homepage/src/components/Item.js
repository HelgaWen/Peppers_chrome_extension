import React, { Component } from "react";
import { TodoItem, ItemTitle, ItemDescription } from '../styles/todoStyles';
import { Button } from '../styles/item';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleItemClick = event => {
    event.preventDefault();
    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true });
  }

  handleRemoveButtonClick = event => {
    event.preventDefault();
    this.props.deleteItem(this.props.id);
  }

  render () {
    return (
      <TodoItem clicked={this.state.clicked} onClick={this.handleItemClick}>
        <ItemTitle>{this.props.item.title}</ItemTitle>
        <ItemDescription>{this.props.item.desc}</ItemDescription>
        <Button clicked={this.state.clicked} onClick={this.handleRemoveButtonClick}>Remove</Button>
      </TodoItem>
    );
  }
}

export default Item;
