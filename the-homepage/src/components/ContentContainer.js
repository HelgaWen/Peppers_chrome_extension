/* global chrome */
import React, { Component } from "react";
import { ContentCardWrapper } from "../styles/contentContainer";
import SL from "./Sl";
import Todo from "./Todo";
import Weather from "./Weather";
import Quotes from "./Quotes";
import FavouriteLinks from "./FavouriteLinks"
import { Rnd } from "react-rnd";
import { SettingsContainer, SettingsImage } from '../styles/settingsStyles';
import ResetChrome from './ResetChrome';

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      rnd: {
        SL: {
          width: "431px",
          height: "211px",
          x: 300,
          y: 0
        },
        Todo: {
          width: "209px",
          height: "94px",
          x: 25,
          y: 0
        },
        Weather: {
          width: "161px",
          height: "261px",
          x: 800,
          y: 0
        },
        Quotes: {
          width: "200px",
          height: "150px",
          x: 1032,
          y: 150
        },
        FavouriteLinks: {
          width: "195px",
          height: "75px",
          x: 1032,
          y: 0
        }
      }
    };
  }

  componentDidMount() {
    this.getRndFromStorage();
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
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  SL: {
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
          <SL />
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
          <Todo />
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
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  Weather: {
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
          <Weather />
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
          <FavouriteLinks />
        </Rnd>
        <Rnd
          size={{
            width: this.state.rnd.Quotes.width,
            height: this.state.rnd.Quotes.height
          }}
          position={{ x: this.state.rnd.Quotes.x, y: this.state.rnd.Quotes.y }}
          onDragStop={(e, d) => {
            this.setState(
              {
                ...this.state,
                rnd: {
                  ...this.state.rnd,
                  Quotes: {
                    ...this.state.rnd.Quotes,
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
                  Quotes: {
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
          <Quotes />
        </Rnd>
      </React.Fragment>
    ) : (
        <React.Fragment>
          <SL position={this.state.rnd.SL} />
          <Todo position={this.state.rnd.Todo} />
          <Weather position={this.state.rnd.Weather} />
          <Quotes position={this.state.rnd.Quotes} />
          <FavouriteLinks position={this.state.rnd.FavouriteLinks} />
        </React.Fragment>
      );
    return (
      <React.Fragment>
        <SettingsContainer>
          <SettingsImage isEdit={this.state.editMode} onClick={this.activateEditMode} />
          {this.state.editMode ? <ResetChrome /> : <React.Fragment />}
        </SettingsContainer>
        <ContentCardWrapper>
          {display}
        </ContentCardWrapper>
      </React.Fragment>
    );
  }
}

export default ContentContainer;
