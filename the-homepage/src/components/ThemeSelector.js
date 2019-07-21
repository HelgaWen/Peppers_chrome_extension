import React, { Component } from 'react';
import { ThemeContainer, ThemeImage } from '../styles/themeStyles'
import moon from '../styles/images/moon.png';
import sun from '../styles/images/sun.png';

class ThemeSelector extends Component {

    state = {
        currentMode: moon,
        imageBackground: '#364154',
        active: false
    }

    callBothFunc = () => {
        this.changeImage();
        this.props.clickFunction();
    }



    changeImage = () => {
        this.state.currentMode === sun ? this.setState({ currentMode: moon, imageBackground: '#364154', active: true }) : this.setState({ currentMode: sun, imageBackground: '#FFF', active: true });
        setTimeout(() => {
            this.setState({ active: false })
        }, 1000);
    }

    render() {
        return (
            <ThemeContainer active={this.state.active} background={this.state.imageBackground} onClick={this.callBothFunc}>
                <ThemeImage current={this.state.currentMode} />
            </ThemeContainer>
        );
    }
}

export default ThemeSelector;