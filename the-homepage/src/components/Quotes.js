import React, { Component } from "react";

class Quotes extends Component {
  url = "http://quotes.rest/qod.json";

  state = {
    data: null,
    spinner: "Loading...",
    haveData: false
  };

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data, haveData: true });
      });
  }

  render() {
    if (this.state.haveData) {
      return (
        <div>
          {this.state.data.contents.quotes[0].quote}
          {this.state.data.contents.quotes[0].author}
        </div>
      );
    } else {
      return <h2>{this.state.spinner}</h2>;
    }
  }
}

export default Quotes;
