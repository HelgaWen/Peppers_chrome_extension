/* global chrome*/
import React, { Component } from 'react';
import { PageWrapper, InputWrapper, InputLabel, NameInput } from "../styles/styles";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameExist: false,
            name: ''
        }
        this.inputName = React.createRef();
    }

    componentWillMount() {
        console.log('COMPONENT DID MOUNT');
        this.getName();
    }

    componentDidUpdate() {
        console.log('COMPONENT DID UPDATE');
        // this.readAndPrintName();
    }

    setName = (name) => {
        chrome.storage.sync.set({ name: name }, function () {
            console.log('Name is set to  ' + name);
        });
    }

    getName = () => {
        console.log('Does name exist: ' + this.state.nameExist);
        chrome.storage.sync.get(['name'], (result) => {
            console.log('Name currently is ' + result.name);
            if (result.name) {
                this.setState({ name: result.name, nameExist: true })
            }
        });
    }

    readAndPrintName = () => {
        chrome.storage.sync.get(['name'], function (result) {
            console.log('Name currently is2 ' + result.name);
        });
        console.log('ReadandPrintName: ' + this.state.name);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input name Value: ' + this.inputName.current.value);
        this.setName(this.inputName.current.value);
        this.setState({ name: this.inputName.current.value });
        this.setState({ nameExist: true });
        console.log('Name: ' + this.state.name);
    };


    render() {
        return (
            <PageWrapper>
                {this.state.nameExist ? (
                    <p>HEJSAN {this.state.name}</p>
                ) : (
                        <InputWrapper>
                            <form onSubmit={this.handleSubmit}>
                                <InputLabel>Please enter your name</InputLabel>
                                <NameInput required type="text" name="Title" ref={this.inputName} placeholder="Your name here"></NameInput>
                            </form>
                        </InputWrapper>
                    )}
            </PageWrapper>
        );
    }
}

export default Greeting;
