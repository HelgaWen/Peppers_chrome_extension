import React, { Component } from "react";
import { TodoItem } from '../styles/todoStyles';
import { Title, Description, RmvButton } from '../styles/item';

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
        <Title>{this.props.item.title}</Title>
        <Description>{this.props.item.desc}</Description>
        <RmvButton clicked={this.state.clicked} onClick={this.handleRemoveButtonClick}>Remove</RmvButton>
      </TodoItem>
    );
  }
}

export default Item;
