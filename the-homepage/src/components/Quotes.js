/* global chrome */
import React, { Component } from "react";
import { QuotesContainer, Text, Author} from '../styles/quotesStyles';

class Quotes extends Component {
  url = "http://quotes.rest/qod.json";

  state = {
    quotes: {
      data: null,
      date: null,
      spinner: "Loading..."
    }
  };

  getTodayDate = () => {
    const date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return yyyy + "-" + mm + "-" + dd;
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = async () => {
    let date = await this.updateStateFromStorage();
    const todaysDate = this.getTodayDate();
    if (this.state.quotes.data === null || date !== todaysDate) {
      fetch(this.url)
        .then(res => res.json())
        .then(data => {
          this.setState(() => ({
            quotes: {
              ...this.state.quotes,
              data,
              date: data.contents.quotes[0].date
            }
          }));
          this.setItemInStorage();
        });
    }
  };

  updateStateFromStorage = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(["quotes"], result => {
        if (result.quotes) {
          this.setState(
            () => ({
              quotes: result.quotes.obj
            }),
            () => {
              console.log("Got from storage: ", this.state.quotes);
              resolve(this.state.quotes.date);
            }
          );
        } else {
          resolve(null);
        }
      });
    });
  };

  setItemInStorage = () => {
    let obj = this.state.quotes;
    chrome.storage.sync.set({ quotes: { obj } }, () => {
      console.log("Sent to storage: ", obj);
    });
  };

  render() {
    const display = this.state.quotes.data ? (
        <QuotesContainer>
          <Text>{this.state.quotes.data.contents.quotes[0].quote}</Text>
          <Author>{this.state.quotes.data.contents.quotes[0].author}</Author>
        </QuotesContainer>
    ) : (
        <QuotesContainer>
          <h2>{this.state.spinner}</h2>
        </QuotesContainer>
    );
    return display;
  }
}

export default Quotes;
