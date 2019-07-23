/* global chrome */
import React, { Component } from 'react';
import { ThemeContainer, ThemeImage } from '../styles/themeStyles'
import moon from '../styles/images/moon.png';
import sun from '../styles/images/sun.png';

class ThemeSelector extends Component {

  state = {
    settings: {
      currentMode: moon,
      imageBackground: '#364154',
      active: false
    }
  }

  componentDidMount() {
    this.getThemeFromStorage();
  }

  callFunctions = () => {
    this.props.clickFunction();
    this.changeImage();
  }

  setThemeInStorage = () => {
    let obj = {
      currentMode: this.state.settings.currentMode,
      imageBackground: this.state.settings.imageBackground,
      active: false
    }
    chrome.storage.sync.set({ settings: obj }, () => {
      console.log('Sent ', obj, ' to storage');
      console.log('Set theme in storage from themeSelector')
    });
  }

  getThemeFromStorage = () => {
    chrome.storage.sync.get(['settings'], result => {
      if (result.settings) {
        console.log('result.settings ', result.settings)
        this.setState({ settings: result.settings });
      }
    })
  }

  changeImage = () => {
    this.state.settings.currentMode === sun ? this.setState({ settings: { currentMode: moon, imageBackground: '#364154', active: true } }) : this.setState({ settings: { currentMode: sun, imageBackground: '#FFF', active: true } }, () => this.setThemeInStorage());
    setTimeout(() => {
      this.setState({ active: false })
    }, 1000);
  }

  render() {
    return (
      <ThemeContainer active={this.state.settings.active} background={this.state.settings.imageBackground} onClick={this.callFunctions}>
        <ThemeImage current={this.state.settings.currentMode} />
      </ThemeContainer>
    );
  }
}

export default ThemeSelector;