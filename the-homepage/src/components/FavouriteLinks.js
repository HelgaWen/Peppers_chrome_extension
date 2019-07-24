/* global chrome*/
import React, { Component } from "react";
import { ContentCard, Button } from "../styles/general";
import { Input, Submit, LinksContainer, Form } from "../styles/favouriteLinksStyles";
import Link from "./Link";

class FavouriteLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
    this.links = React.createRef();
    this.deleteLink = this.deleteLink.bind(this);
  }

  componentDidMount() {
    this.getLinksFromStorage();
  }

  onSubmit = event => {
    event.preventDefault();
    const newLink = {
      link: this.links.current.value,
      key: Date.now()
    };
    this.setState({ links: [...this.state.links, newLink] }, () => {
      this.setLinkInStorage();
    });
    event.target.reset();
  };

  setLinkInStorage = () => {
    let obj = [...this.state.links];
    chrome.storage.sync.set({ links: { obj } }, () => {
      console.log("Sent ", obj, " to storage");
    });
  };

  getLinksFromStorage = () => {
    chrome.storage.sync.get(["links"], result => {
      if (result.links) {
        this.setState({ links: result.links.obj });
      }
    });
  };

  deleteLink = linkId => {
    this.setState(
      { links: this.state.links.filter((el, index) => index !== linkId) },
      () => {
        this.setLinkInStorage();
      }
    );
  };

  render() {
    let display = [];
    this.state.links.forEach((link, index) =>
      display.push(<Link id={index} links={link} deleteLink={this.deleteLink} />)
    );
    return (
      <ContentCard column cssPosition={this.props.position}>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder="URL" type="text" ref={this.links} required />
          <Button>Add</Button>
        </Form>
        <LinksContainer>{display}</LinksContainer>
      </ContentCard>
    );
  }
}

export default FavouriteLinks;
