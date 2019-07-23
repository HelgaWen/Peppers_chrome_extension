/* global chrome */
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { Input, Headline, InputContainer, SubmitButton } from "../styles/slStyles";
import Departure from "./Departure";

class SL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSlInfo: false,
      SL: {
        origin: {
          name: "Origin",
          siteId: null
        },
        destination: {
          name: "Destination",
          siteId: null
        },
        departures: []
      }
    };
    this.inputOrigin = React.createRef();
    this.inputDestination = React.createRef();
  }

  componentDidMount() {
    this.setInitialState();
  }

  setInitialState = async () => {
    const info = await this.getInfoFromStorage();
    let originId, destinationId;
    if (info.SL) {
      [originId, destinationId] = await this.fetchSiteId(
        info.SL.origin.name,
        info.SL.destination.name
      );
      let metros = await this.fetchMetros(originId, destinationId);
      this.updateState(info.SL.origin.name, originId, info.SL.destination.name, destinationId, metros);
    }
  };

  updateState = (origin, originId, destination, destinationId, metros) => {
    this.setState(
      {
        SL: {
          origin: {
            name: origin,
            siteId: originId
          },
          destination: {
            name: destination,
            siteId: destinationId
          },
          departures: metros
        }
      },
      () => console.log("SL: Updated state ", this.state.SL)
    );
  }

  fetchSiteId = (origin, destination) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8000/api/sl/siteid/${origin}`)
        .then(result => result.json())
        .then(data => {
          const newOriginId = data.ResponseData[0].SiteId;
          fetch(`http://localhost:8000/api/sl/siteid/${destination}`)
            .then(result => result.json())
            .then(data => {
              const newDestinationId = data.ResponseData[0].SiteId;
              resolve([newOriginId, newDestinationId]);
            });
        });
    });
  };

  fetchMetros = (originId, destinationId) => {
    return new Promise((resolve, reject) => {
      fetch(
        `http://localhost:8000/api/sl/travelA2B/${originId}/${destinationId}`
      )
        .then(result => result.json())
        .then(metros => {
          resolve(metros);
        });
    });
  };

  getInfoFromStorage = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(["SL"], info => {
        resolve(info);
      });
    });
  };

  setInfoToStorage = (origin, originId, destination, destinationId) => {
    chrome.storage.sync.set(
      {
        SL: {
          origin: {
            name: origin,
            siteId: originId
          },
          destination: {
            name: destination,
            siteId: destinationId
          }
        }
      },
      () => console.log("SL info is set to  ", this.state.SL)
    );
  };

  onSubmit = async event => {
    event.preventDefault();
    let originId, destinationId;
    const newOrigin =
      this.inputOrigin.current.value === ""
        ? this.state.SL.origin.name
        : this.inputOrigin.current.value;
    const newDestination =
      this.inputDestination.current.value === ""
        ? this.state.SL.destination.name
        : this.inputDestination.current.value;
    
    this.resetInputFields();
    [originId, destinationId] = await this.fetchSiteId(newOrigin, newDestination);
    this.setInfoToStorage(newOrigin, originId, newDestination, destinationId);
    const metros = await this.fetchMetros(originId, destinationId);
    this.updateState(newOrigin, originId, newDestination, destinationId, metros);
  };

  resetInputFields = () => {
    const inputField1 = document.querySelector('#inputfield1');
    inputField1.value = "";
    const inputField2 = document.querySelector('#inputfield2');
    inputField2.value = "";
  }

  onSwitchClick = event => {
    event.preventDefault();
    [this.state.SL.origin, this.state.SL.destination] = [this.state.SL.destination, this.state.SL.origin];
    [this.inputOrigin, this.inputDestination] = [this.inputDestination, this.inputOrigin];
    this.onSubmit(event);
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    let display = [];
    this.state.SL.departures.forEach((metro, index) =>
      display.push(<Departure id={index} metro={metro} />)
    );
    return (
      <ContentCard column cssPosition={this.props.position}>
        <Headline>
          <h2>Metros from</h2>
        </Headline>
        <form onSubmit={this.onSubmit}>
          <InputContainer>
            <Input id="inputfield1" placeholder={this.capFirstLetter(this.state.SL.origin.name)} type="text" ref={this.inputOrigin} />
            <button type="button" onClick={this.onSwitchClick}> to </button>
            <Input id="inputfield2" placeholder={this.capFirstLetter(this.state.SL.destination.name)} type="text" ref={this.inputDestination} />
            <SubmitButton type='submit'/>
          </InputContainer>
        </form>
        <div>{display}</div>
      </ContentCard>
    );
  }
}

export default SL;
