import React, { Component } from "react";
import { ContentCard } from "../styles/general";

class Quotes extends Component {
  url = "http://quotes.rest/qod.json";

  state = {
    data: null,
    spinner: "Loading..."
  };

  componentDidMount() {
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ data });
    //   });
  }

  render() {
    const display = this.state.data ? (
      <ContentCard cssPosition={this.props.position}>
        <div>
          <p>{this.state.data.contents.quotes[0].quote}</p>
          <p>{this.state.data.contents.quotes[0].author}</p>
        </div>
      </ContentCard>
    ) : (
      <ContentCard noborder cssPosition={this.props.position}>
        <h2>{this.state.spinner}</h2>
      </ContentCard>
    );
    return display;
  }
}

export default Quotes;
