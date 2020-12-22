import React, { Component } from 'react';
import img from '../resources/whiskey.jpg';
import Typist from 'react-typist';

class Splash extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <div className="container vertically-center">
          <div className="row">
            <div className="col">
              <img
                src={img}
                alt="Avatar"
                className="rounded-circle"
                style={{maxWidth: 'calc(5vw + 5vh + 20vmin)'}}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <Typist startDelay={1000} cursor={{ show: false }}>
                <h1 className="display-4 header-text">Sam Anderson</h1>
              </Typist>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
