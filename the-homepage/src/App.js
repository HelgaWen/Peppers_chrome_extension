/* global chrome */
import React, { Component } from "react";
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";
import sun from './styles/images/sun.png';
import moon from './styles/images/moon.png';

const themes = {
  dark: {
    background: "#364154",
    color: "#27E8A7",
    boxShadow: "#292929",
    itemBackground: "#506477",
    themeBackground: "#FFF",
    placeholderColor: "#fc6c85",
    buttonBackground: "#364154",
    inputColor: "#FFF",
    name: "dark",
    icon: sun,
    iconBGC: '#F7F7F2'
  },
  light: {
    background: "#F7F7F2",
    color: "#BCBEC0",
    boxShadow: "#BCBEC0",
    itemBackground: "#FFF",
    themeBackground: "#364154",
    placeholderColor: "#fc6c85",
    buttonBackground: "#FFF",
    name: "light",
    icon: moon,
    iconBGC: '#364154'
  }
};

class App extends Component {
  state = {
    currentTheme: 'light'
  };

  componentDidMount() {
    this.getThemeFromStorage()
  }

  setThemeInStorage = (theme) => {
    chrome.storage.sync.set({ theme }, () => {
      console.log('Sent ', theme, ' to storage');
    });
  }

  getThemeFromStorage = () => {
    console.log('greis')
    chrome.storage.sync.get(['theme'], result => {
      if (result.theme) {
        this.setState({ currentTheme: result.theme });
      }
    })
  }

  toggleTheme = () => {
    let newTheme = this.state.currentTheme === 'light' ? 'dark' : 'light'
    this.setState({ currentTheme: newTheme })
    this.setThemeInStorage(newTheme);
  };

  render() {
    return (
      <ThemeProvider theme={themes[this.state.currentTheme]}>
        <Main toggleTheme={this.toggleTheme} />
      </ThemeProvider>
    );
  }
}

export default App;
