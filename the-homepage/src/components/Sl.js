/* global chrome */
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { SlInput, SlHeadline, InputContainer } from "../styles/slStyles";
class SL extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSlInfo : false,
      SL: {
        origin: 'Origin',
        destination: 'Destination'
      }
    }
    this.inputOrigin = React.createRef();
    this.inputDestination = React.createRef();
  }

  componentDidMount() {
    this.getInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage();
  }

  getInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage = () => {
    chrome.storage.sync.get(["SL"], info => {
      if (info.SL) {
        this.setState(prevstate => ({
          SL: { 
              ...prevstate.SL,
              origin: info.SL.origin,
              destination: info.SL.destination
            }
          }))
      } else {
        this.setState({ hasSlInfo: false });
      }
    });
  }

  setInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage = () => {
    chrome.storage.sync.set({ SL: {origin:this.state.SL.origin, destination:this.state.SL.destination }},  () => {
      console.log("SL info is set to  " + this.state.SL.origin, this.state.SL.destination);
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      SL: { 
          origin: this.inputOrigin.current.value,
          destination: this.inputDestination.current.value
        }
      }, () => {
        this.setInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage();
      }
    );
  }

  render() {
    return (
      <ContentCard column>
        <SlHeadline>
          <h3>Metros from</h3>
        </SlHeadline>
        <form onSubmit={this.onSubmit}>
          <InputContainer>
            <SlInput placeholder={this.state.SL.origin} type="text" ref={this.inputOrigin} />
            <h3> to </h3>
            <SlInput placeholder={this.state.SL.destination} type="text" ref={this.inputDestination} />
          <input type='submit'></input>
          </InputContainer>
        </form>
        <h3>Leaves in: </h3>
        <div>
          RESULTAT
      </div>
      </ContentCard>
    );
  }
}

export default SL;
