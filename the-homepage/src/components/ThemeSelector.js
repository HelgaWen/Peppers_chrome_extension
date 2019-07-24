/* global chrome */
import React, { Component } from 'react';
import { ThemeContainer, ThemeImage } from '../styles/themeStyles'

let t;

class ThemeSelector extends Component {

  state = {
    active: false
  }

  callFunctions = () => {
    this.props.toggleTheme();
    this.changeImage();
  }

  changeImage = () => {
    this.setState({ active: true })
    clearTimeout(t)
    t = setTimeout(() => {
      this.setState({ active: false })
    }, 1500);
  }

  render() {
    return (
      <ThemeContainer active={this.state.active} onClick={this.callFunctions}>
        <ThemeImage />
      </ThemeContainer>
    );
  }
}

export default ThemeSelector;