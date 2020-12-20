import React, { Component } from 'react';
import img1 from './sc.jpg';

class Qualifications extends Component {
  state = {};
  render() {
    return (
      <div className="bg-dark text-light" id="qualifications">
        <div className="row">
          <div className="col">
            <h2 className="m-50">Qualifications</h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col">
            <div style={{ backgroundImage: 'url(' + img1 + ')' }}>
              <div className="img-button-gradient">
                <button className="btn btn-outline-light img-button">
                  CV / Resume
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ backgroundImage: 'url(' + img1 + ')' }}>
              <div className="img-button-gradient">
                <button className="btn btn-outline-light img-button">
                  CV / Resume
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ backgroundImage: 'url(' + img1 + ')' }}>
              <div className="img-button-gradient">
                <button className="btn btn-outline-light img-button">
                  CV / Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qualifications;
