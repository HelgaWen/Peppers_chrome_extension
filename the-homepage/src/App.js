/* global chrome */
import React, { Component } from "react";
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  background: "#364154",
  color: "#27E8A7",
  boxShadow: "#292929",
  itemBackground: "#506477",
  themeBackground: "#FFF",
  placeholderColor: "#fc6c85",
  buttonBackground: "#364154",
  inputColor: "#FFF",
  theme: "dark"
};

const lightTheme = {
  background: "#F7F7F2",
  color: "#BCBEC0",
  boxShadow: "#BCBEC0",
  itemBackground: "#FFF",
  themeBackground: "#364154",
  placeholderColor: "#fc6c85",
  buttonBackground: "#FFF",
  theme: "light"
};

class App extends Component {
  state = {
    currentTheme: lightTheme,
    htmlBGC: "#F7F7F2"
  };

  // componentDidMount() {
  //   this.getThemeFromStorage()
  // }

  // setThemeInStorage = () => {
  //   let obj = {
  //     currentTheme: this.state.currentTheme,
  //     htmlBGC: this.state.htmlBGC,
  //   }
  //   chrome.storage.sync.set({ theme: obj }, () => {
  //     console.log('Sent ', obj, ' to storage');
  //     console.log('Set theme in storage from App')
  //   });
  // }

  // getThemeFromStorage = () => {
  //   chrome.storage.sync.get(['theme'], result => {
  //     if (result) {
  //       console.log('result ', result)
  //       this.setState({ currentTheme: result.theme.currentTheme, htmlBGC: result.theme.htmlBGC });
  //     }
  //   })
  // }

  toggleTheme = () => {
    //this.state.currentTheme === lightTheme ? this.setState({ currentTheme: darkTheme, htmlBGC: '#364154' }) : this.setState({ currentTheme: lightTheme, htmlBGC: '#FFF' }, () => this.setThemeInStorage())
    this.state.currentTheme === lightTheme
      ? this.setState({ currentTheme: darkTheme, htmlBGC: "#364154" })
      : this.setState({ currentTheme: lightTheme, htmlBGC: "#F7F7F2" });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <Main toggleTheme={this.toggleTheme} />
      </ThemeProvider>
    );
  }
}

export default App;
