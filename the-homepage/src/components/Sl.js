/* global chrome */
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { Input, Headline, InputContainer, SubmitButton } from "../styles/slStyles";

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
        },
        departures: []
      }
    }
    this.inputOrigin = React.createRef();
    this.inputDestination = React.createRef();
  }
  


  componentDidMount() {
    this.setInitialState();
  }


  setInitialState = async () => {
    const info = await this.getInfoFromStorage();
    let siteIdOrigin, siteIdDestination;
    if(info.SL){
      [ siteIdOrigin, siteIdDestination ] = await this.fetchSiteId(info.SL.origin.name, info.SL.destination.name);
      let metros = await this.fetchMetros(siteIdOrigin, siteIdDestination)
      console.log(metros)
      this.setState({SL: {
        origin: {
          name: info.SL.origin.name,
          siteId: siteIdOrigin,
        },
        destination: {
          name: info.SL.destination.name,
          siteId: siteIdDestination
        },
        departures: metros
      }}, () => console.log('Updated state ', this.state.SL))
    }
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
            })
        })
      });
  }

  fetchMetros = (originId, destinationId) => {
    return new Promise ((resolve, reject) => {
      fetch(`http://localhost:8000/api/sl/travelA2B/${originId}/${destinationId}`)
        .then(result => result.json())
        .then(metros => {
          resolve(metros);
        });
    })
  }

  getInfoFromStorage = () => {
    return new Promise ((resolve, reject) => { 
      chrome.storage.sync.get(["SL"], info => {
        resolve(info);
      })
    });
  }

  setInfoToStorage = (origin, originId, destination, destinationId) => {
    chrome.storage.sync.set({ 
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
    }, () => console.log("SL info is set to  ", this.state.SL));
  }

  onSubmit = async (event) => {
    event.preventDefault();
    let siteIdOrigin, siteIdDestination;
    const newOrigin = this.inputOrigin.current.value === '' ? this.state.SL.origin.name : this.inputOrigin.current.value;
    const newDestination = this.inputDestination.current.value === '' ? this.state.SL.destination.name : this.inputDestination.current.value;

    [ siteIdOrigin, siteIdDestination ] = await this.fetchSiteId(newOrigin, newDestination);

    this.setInfoToStorage(newOrigin, siteIdOrigin, newDestination, siteIdDestination)

    const metros = await this.fetchMetros(siteIdOrigin, siteIdDestination);
    console.log('ON SUBMIT ', metros)

    this.setState({
      SL: {
        origin: {
          name: newOrigin,
          siteId: siteIdOrigin
        },
        destination: {
          name: newDestination,
          siteId: siteIdDestination
        },
        departures: metros
      }
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
            <Input placeholder={this.state.SL.origin.name} type="text" ref={this.inputOrigin} />
            <h3> to </h3>
            <Input placeholder={this.state.SL.destination.name} type="text" ref={this.inputDestination} />
            <SubmitButton type='submit'/>
          </InputContainer>
        </form>
        <h3>Leave in</h3>
        <div>
          RESULTAT
      </div>
      </ContentCard>
    );
  }
}

export default SL;
