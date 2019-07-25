/* global chrome */
import React, { Component } from 'react';
import { Text } from '../styles/contentContainer';
import "../styles/index.css";
import Checkbox from '../styles/hideContentStyles';

class HideContent extends Component {

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
        this.props.toggleHide(event.target.id);
    }

    render() {
        return (
            <label>
                <Checkbox id={this.props.Text}
                    checked={this.props.isChecked}
                    onChange={this.handleCheckboxChange}
                />
                <Text>Hide {this.props.Text}</Text>
            </label>
        )
    }
}

export default HideContent;