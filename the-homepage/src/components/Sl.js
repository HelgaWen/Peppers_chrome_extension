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
        }
      }
    }
    this.inputOrigin = React.createRef();
    this.inputDestination = React.createRef();
  }

  setInitialState = async () => {
    const info = await this.getInfoFromStorage();
    console.log(info)
    let siteIdOrigin;
    let siteIdDestination;
    [ siteIdOrigin, siteIdDestination ] = await this.fetchSiteId();
    if (info.SL) {
      this.setState({
        SL: {
          origin: {
            name: info.SL.origin.name,
            siteId: siteIdOrigin
          },
          destination: {
            name: info.SL.destination.name,
            siteId: siteIdDestination
          }
        }
      })
    } else {
      this.setState({ hasSlInfo: false });
    }
  }

  componentDidMount() {
    this.setInitialState();
  }

  fetchSiteId = () => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8000/api/sl/siteid/${this.state.SL.origin.name}`)
        .then(result => result.json())
        .then(data => {
          const newOriginId = data.ResponseData[0].SiteId;
          console.log('YO!', newOriginId)
          fetch(`http://localhost:8000/api/sl/siteid/${this.state.SL.destination.name}`)
            .then(result => result.json())
            .then(data => {
              const newDestinationId = data.ResponseData[0].SiteId;
              console.log('YO!', newDestinationId)
              resolve([newOriginId, newDestinationId]);
            })
        })
      });
  }

  shouldWeFetch = () => {
    return this.state.SL.origin !== 'Origin';
  }

  getInfoFromStorage = () => {
    return new Promise ((resolve, reject) => { 
      chrome.storage.sync.get(["SL"], info => {
        resolve(info);
      })
    });
  }

  setInfoFromStorage = () => {
    chrome.storage.sync.set({ SL: { origin: { name: this.state.SL.origin.name, siteId: this.state.SL.origin.siteId }, destination: { name: this.state.SL.destination.name, siteId: this.state.SL.destination.siteId } } }, () => {
      console.log("SL info is set to  ", this.state.SL);
    });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    let siteIdOrigin;
    let siteIdDestination;
    const newOrigin = this.inputOrigin.current.value === '' ? this.state.SL.origin.name : this.inputOrigin.current.value;
    const newDestination = this.inputDestination.current.value === '' ? this.state.SL.destination.name : this.inputDestination.current.value;
    [siteIdOrigin, siteIdDestination] = await this.fetchSiteId();

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
      }
    }, () => {
      this.setInfoFromStorage();
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
        <h3>Leave in: </h3>
        <div>
          RESULTAT
      </div>
      </ContentCard>
    );
  }
}

export default SL;
