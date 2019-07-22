/* global chrome */
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { Input, Headline, InputContainer } from "../styles/slStyles";

const SLApiKey = '222e319bd06249f39ef7ad7319123f56';

class SL extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSlInfo: false,
      SL: {
        origin: {
          name: 'Origin',
          siteId: null
        },
        destination: {
          name: 'Destination',
          siteId: null
        }
      }
    }
    this.inputOrigin = React.createRef();
    this.inputDestination = React.createRef();
  }

  componentDidMount() {
    this.getInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage();
    this.fetchSiteId();
  }

  fetchSiteId = () => {
    let newOriginId;
    let newDestinatinId;

    fetch(`https://api.sl.se/api2/typeahead.json?key=${SLApiKey}&searchstring=${this.state.SL.origin.name}&stationsonly=true&maxresults=1`, {

    })
      .then(result => result.json())
      .then(data => {
        console.log('YO!')
        console.log(data)
        // newOriginId = data.ResponseData.SiteId;
        // fetch(`https://api.sl.se/api2/typeahead.json?key=${SLApiKey}&searchstring=${this.state.SL.destination.name}&stationsonly=true&maxresults=1`, {
        //   mode: 'no-cors'
        // })
        //   .then(result => result.json())
        //   .then(data => {


        //     this.newDestinationId = data.ResponseData.SiteId
        //     this.setState({ SL: { origin: { siteId: newOriginId }, destination: { siteId: newDestinatinId } } }, console.log('SL STATE IS: ', this.state.SL));
        //   })
      })
  }

  shouldWeFetch = () => {
    return this.state.SL.origin !== 'Origin';
  }

  getInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage = () => {
    chrome.storage.sync.get(["SL"], info => {
      if (info.SL) {
        this.setState({
          SL: {
            origin: info.SL.origin.name,
            destination: info.SL.destination.name
          }
        })
      } else {
        this.setState({ hasSlInfo: false });
      }
    });
  }

  setInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage = () => {
    chrome.storage.sync.set({ SL: { origin: { name: this.state.SL.origin.name, siteId: this.state.SL.origin.siteId }, destination: { name: this.state.SL.destination.name, siteId: this.state.SL.destination.siteId } } }, () => {
      console.log("SL info is set to  " + this.state.SL.origin, this.state.SL.destination);
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const checkOrigin = this.inputOrigin.current.value === '' ? this.state.SL.origin.name : this.inputOrigin.current.value;
    const checkDestination = this.inputDestination.current.value === '' ? this.state.SL.destination.name : this.inputDestination.current.value;
    this.setState({
      SL: {
        origin: checkOrigin,
        destination: checkDestination
      }
    }, () => {
      this.setInformationOfYourPersonallyChosenOriginAndDestinationFromYourChromeStorage();
    }
    );
  }

  render() {
    return (
      <ContentCard column>
        <Headline>
          <h3>Metros from</h3>
        </Headline>
        <form onSubmit={this.onSubmit}>
          <InputContainer>
            <Input placeholder={this.state.SL.origin} type="text" ref={this.inputOrigin} />
            <h3> to </h3>
            <Input placeholder={this.state.SL.destination} type="text" ref={this.inputDestination} />
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
