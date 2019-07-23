import React, { Component } from "react";

class Quotes extends Component {
  url = "http://quotes.rest/qod.json";

  state = {
    data: null,
    spinner: "Loading..."
  };

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const diplay = this.state.data ? (
      <div>
        {this.state.data.contents.quotes[0].quote}
        {this.state.data.contents.quotes[0].author}
      </div>
    ) : (
      <h2>{this.state.spinner}</h2>
    );
    return diplay;
  }
}

export default Quotes;
