import React, { Component } from "react";
import { ContentCard } from "../styles/general";

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
      <ContentCard>
        <div>
          <p>{this.state.data.contents.quotes[0].quote}</p>
          <p>{this.state.data.contents.quotes[0].author}</p>
        </div>
      </ContentCard>
    ) : (
      <ContentCard noborder>
        <h2>{this.state.spinner}</h2>
      </ContentCard>
    );
    return diplay;
  }
}

export default Quotes;
