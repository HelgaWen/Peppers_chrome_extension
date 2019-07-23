/* global chrome*/
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { Input, Submit, ItemsContainer, Form } from "../styles/todoStyles";
import Item from "./Item";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.title = React.createRef();
    this.description = React.createRef();
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getItemsFromStorage();
  }

  onSubmit = event => {
    event.preventDefault();
    const newItem = {
      title: this.title.current.value,
      desc: this.description.current.value,
      key: Date.now()
    };
    this.setState({ items: [...this.state.items, newItem] }, () => {
      this.setItemInStorage();
    });
    event.target.reset();
  };

  setItemInStorage = () => {
    let obj = [...this.state.items];
    chrome.storage.sync.set({ items: { obj } }, () => {
      console.log("Sent ", obj, " to storage");
    });
  };

  getItemsFromStorage = () => {
    chrome.storage.sync.get(["items"], result => {
      if (result.items) {
        this.setState({ items: result.items.obj });
      }
    });
  };

  deleteItem = itemId => {
    this.setState(
      { items: this.state.items.filter((el, index) => index !== itemId) },
      () => {
        this.setItemInStorage();
      }
    );
  };

  render() {
    let display = [];
    this.state.items.forEach((item, index) =>
      display.push(<Item id={index} item={item} deleteItem={this.deleteItem} />)
    );
    return (
      <ContentCard column cssPosition={this.props.position}>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder="Title" type="text" ref={this.title} required />
          <Input placeholder="Description" type="text" ref={this.description} />
          <Submit>Add</Submit>
        </Form>
        <ItemsContainer>{display}</ItemsContainer>
      </ContentCard>
    );
  }
}

export default Todo;
