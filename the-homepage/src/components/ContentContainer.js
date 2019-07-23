/* global chrome */
import React, { Component } from "react";
import { ContentCardWrapper } from "../styles/contentContainer";
import SL from "./Sl";
import Todo from "./Todo";
import Weather from "./Weather";
import Quotes from "./Quotes";
import { Rnd } from "react-rnd";

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      rnd: {
        SL: {
          width: 200,
          height: 200,
          x: 10,
          y: 10
        },
        Todo: {
          width: 200,
          height: 200,
          x: 10,
          y: 10
        },
        Weather: {
          width: 200,
          height: 200,
          x: 10,
          y: 10
        },
        Quotes: {
          width: 200,
          height: 200,
          x: 10,
          y: 10
        }
      }
    };
  }

  componentDidMount() {
    this.getRndFromStorage();
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
    return (
      <ContentCardWrapper>
        <Rnd
          size={{
            width: this.state.rnd.SL.width,
            height: this.state.rnd.SL.height
          }}
          position={{ x: this.state.rnd.SL.x, y: this.state.rnd.SL.y }}
          onDragStop={(e, d) => {
            this.setState(
              {
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

        {/* <Rnd
          size={{
            width: this.state.rnd.Weather.width,
            height: this.state.rnd.Weather.height
          }}
          position={{
            x: this.state.rnd.Weather.x,
            y: this.state.rnd.Weather.y
          }}
          onDragStop={(e, d) => {
            this.setState({ rnd: { Weather: { x: d.x, y: d.y } } }, () =>
              this.setRndInStorage()
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                rnd: {
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
            width: this.state.rnd.Quotes.width,
            height: this.state.rnd.Quotes.height
          }}
          position={{
            x: this.state.rnd.Quotes.x,
            y: this.state.rnd.Quotes.y
          }}
          onDragStop={(e, d) => {
            this.setState({ rnd: { Quotes: { x: d.x, y: d.y } } }, () =>
              this.setRndInStorage()
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState(
              {
                rnd: {
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
*/}
      </ContentCardWrapper>
    );
  }
}

export default ContentContainer;
