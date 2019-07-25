/* global chrome */
import React, { Component } from "react";
import { ContentCardWrapper, HideContentContainer } from "../styles/contentContainer";
import SL from "./Sl";
import Todo from "./Todo";
import Weather from "./Weather";
import { CardContainerDiv } from "../styles/general";
import FavouriteLinks from "./FavouriteLinks";
import { Rnd } from "react-rnd";
import { SettingsContainer, SettingsImage } from '../styles/settingsStyles';
import ResetChrome from './ResetChrome';
import HideContent from './HideContent';

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      rnd: {
        SL: {
          width: "198px",
          height: "310px",
          x: 345,
          y: 0
        },
        Todo: {
          width: "209px",
          height: "300px",
          x: 20,
          y: 0
        },
        Weather: {
          width: "167px",
          height: "234px",
          x: 660,
          y: 0
        },
        FavouriteLinks: {
          width: "195px",
          height: "234px",
          x: 950,
          y: 0
        }
      },
      hidden: {
        SL: false,
        Todo: false,
        Weather: false,
        Links: false,
      }
    };
  }

  componentDidMount() {
    this.getRndFromStorage();
    this.getHiddenFromStorage();
  }

  activateEditMode = () => {
    this.state.editMode ? (this.setState({ editMode: false })) : (this.setState({ editMode: true }));
  }

  setRndInStorage = () => {
    chrome.storage.sync.set({ rnd: this.state.rnd }, () => {
      console.log("Sent ", this.state.rnd, " to storage");
    });
  };

  getRndFromStorage = () => {
    chrome.storage.sync.get(["rnd"], result => {
      console.log("RESULT IN GET FROM STORAGE: ", result.rnd);
      if (result.rnd) {
        this.setState({ rnd: result.rnd });
      }
    });
  };

  setHiddenInStorage = () => {
    chrome.storage.sync.set({ hidden: this.state.hidden }, () => {
      console.log("Sent ", this.state.hidden, " to storage");
    });
  }

  getHiddenFromStorage = () => {
    chrome.storage.sync.get(["hidden"], result => {
      console.log("RESULT IN GET FROM STORAGE: ", result.hidden);
      if (result.hidden) {
        this.setState({ hidden: result.hidden });
      }
    });
  }

  toggleHide = (id) => {
    switch (id) {
      case 'SL': this.setState({ ...this.state.hidden, hidden: { ...this.state.hidden, SL: !this.state.hidden.SL } });
        console.log('in SL');
        break;
      case 'Todo': this.setState({ ...this.state.hidden, hidden: { ...this.state.hidden, Todo: !this.state.hidden.Todo } });
        break;
      case 'Weather': this.setState({ ...this.state.hidden, hidden: { ...this.state.hidden, Weather: !this.state.hidden.Weather } });
        console.log('in Weather');
        break;
      case 'Links': this.setState({ ...this.state.hidden, hidden: { ...this.state.hidden, Links: !this.state.hidden.Links } });
        break;
      default: this.setState({ hidden: { SL: false, Todo: false, Weather: false, Links: false } });
    }

    setTimeout(() => {
      this.setHiddenInStorage();
    }, 500);

  }

  render() {
    const display = this.state.editMode ? (
      <React.Fragment>
        <Rnd
          size={{
            width: this.state.rnd.SL.width,
            height: this.state.rnd.SL.height
          }}
          position={{ x: this.state.rnd.SL.x, y: this.state.rnd.SL.y }}
          onDragStop={(e, d) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  SL: {
                    ...this.state.rnd.SL,
                    x: d.x,
                    y: d.y
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          bounds={CardContainerDiv}
        >
          <SL hidden={this.state.hidden.SL} />
        </Rnd>
        <Rnd
          size={{
            width: this.state.rnd.Todo.width,
            height: this.state.rnd.Todo.height
          }}
          position={{ x: this.state.rnd.Todo.x, y: this.state.rnd.Todo.y }}
          onDragStop={(e, d) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  Todo: {
                    ...this.state.rnd.Todo,
                    x: d.x,
                    y: d.y
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  Todo: {
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          bounds={ContentCardWrapper}
        >
          <Todo hidden={this.state.hidden.Todo} />
        </Rnd>
        <Rnd
          size={{
            width: this.state.rnd.Weather.width,
            height: this.state.rnd.Weather.height
          }}
          position={{
            x: this.state.rnd.Weather.x,
            y: this.state.rnd.Weather.y
          }}
          onDragStop={(e, d) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  Weather: {
                    ...this.state.rnd.Weather,
                    x: d.x,
                    y: d.y
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          bounds={ContentCardWrapper}
        >
          <Weather hidden={this.state.hidden.Weather} />
        </Rnd>
        <Rnd
          size={{
            width: this.state.rnd.FavouriteLinks.width,
            height: this.state.rnd.FavouriteLinks.height
          }}
          position={{
            x: this.state.rnd.FavouriteLinks.x,
            y: this.state.rnd.FavouriteLinks.y
          }}
          onDragStop={(e, d) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  FavouriteLinks: {
                    ...this.state.rnd.FavouriteLinks,
                    x: d.x,
                    y: d.y
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  FavouriteLinks: {
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                  }
                }
              },
              () => this.setRndInStorage()
            );
          }}
          bounds={ContentCardWrapper}
        >
          <FavouriteLinks hidden={this.state.hidden.Links} />
        </Rnd>
      </React.Fragment>
    ) : (
        <React.Fragment>
          <SL position={this.state.rnd.SL} hidden={this.state.hidden.SL} />
          <Todo position={this.state.rnd.Todo} hidden={this.state.hidden.Todo} />
          <Weather position={this.state.rnd.Weather} hidden={this.state.hidden.Weather} />
          <Quotes position={this.state.rnd.Quotes} />
          <FavouriteLinks position={this.state.rnd.FavouriteLinks} hidden={this.state.hidden.Links} />
        </React.Fragment>
      );
    return (
      <React.Fragment>
        <SettingsContainer>
          <SettingsImage isEdit={this.state.editMode} onClick={this.activateEditMode} />
          {this.state.editMode ?
            <React.Fragment>
              <ResetChrome />
              <HideContentContainer>
                <HideContent Text='Weather' toggleHide={this.toggleHide} isChecked={this.state.hidden.Weather} />
                <HideContent Text='SL' toggleHide={this.toggleHide} isChecked={this.state.hidden.SL} />
                <HideContent Text='Todo' toggleHide={this.toggleHide} isChecked={this.state.hidden.Todo} />
                <HideContent Text='Links' toggleHide={this.toggleHide} isChecked={this.state.hidden.Links} />
              </HideContentContainer>
            </React.Fragment>
            : <React.Fragment />}
        </SettingsContainer>
        <ContentCardWrapper>
          {display}
        </ContentCardWrapper>
      </React.Fragment>
    );
  }
}

export default ContentContainer;
