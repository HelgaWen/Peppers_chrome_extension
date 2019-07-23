/* global chrome */
import React, { Component } from "react";
import Main from "./components/Main";
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  background: '#364154',
  color: '#27e8a7',
  boxShadow: 'black',
  itemBackground: '#506477',
  themeBackground: '#FFF',
  placeholderColor: '#fc6c85',
  buttonBackground: '#364154',
}

const lightTheme = {
  background: '#FFF',
  color: '#27e8a7',
  boxShadow: '#42675a',
  itemBackground: '#ddffdb',
  themeBackground: '#364154',
  placeholderColor: '#fc6c85',
  buttonBackground: '#FFF',
}

class App extends Component {

  state = {
    currentTheme: lightTheme,
    htmlBGC: '#FFF'
  }

  componentDidMount() {
    this.getThemeFromStorage()
  }

  setThemeInStorage = () => {
    let obj = {
      currentTheme: this.state.currentTheme,
      htmlBGC: this.state.htmlBGC,
    }
    chrome.storage.sync.set({ theme: obj }, () => {
      console.log('Sent ', obj, ' to storage');
      console.log('Set theme in storage from App')
    });
  }

  getThemeFromStorage = () => {
    chrome.storage.sync.get(['theme'], result => {
      if (result) {
        console.log('result ', result)
        this.setState({ currentTheme: result.theme.currentTheme, htmlBGC: result.theme.htmlBGC });
      }
    })
  }

  toggleTheme = () => {
    this.state.currentTheme === lightTheme ? this.setState({ currentTheme: darkTheme, htmlBGC: '#364154' }) : this.setState({ currentTheme: lightTheme, htmlBGC: '#FFF' }, () => this.setThemeInStorage())
  }

  render() {
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <Main toggleTheme={this.toggleTheme} />
      </ThemeProvider>
    );
  }
}

export default App;
