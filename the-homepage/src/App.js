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

  toggleTheme = () => {
    this.state.currentTheme === lightTheme ? this.setState({ currentTheme: darkTheme, htmlBGC: '#364154' }) : this.setState({ currentTheme: lightTheme, htmlBGC: '#FFF' })
    // if (this.state.htmlBGC === '#FFF') {
    //   let x = document.getElementsByTagName('html');
    //   console.log(x);
    //   x.style.background = '#FFF';
    // } else if (this.state.htmlBGC === '#364154') {
    //   let x = document.getElementsByTagName('html');
    //   console.log(x);
    //   x.style.background = '#364154';
    // }
    // this.state.currentTheme === lightTheme ? document.getElementsByTagName('html').style.backgroundColor = '#FFF' : document.getElementsByTagName('html').style.backgroundColor = '#364154';
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
