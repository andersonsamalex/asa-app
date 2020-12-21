import React, { Component } from 'react';
import ButtonInsideImage from './buttonInsideImage';
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
            <ButtonInsideImage
              imgSrc={img1}
              imgAttachment="fixed"
              imgSize="center"
            />
          </div>
          <div className="col">
            <ButtonInsideImage
              imgSrc={img1}
              imgAttachment="fixed"
              imgSize="center"
            />
          </div>
          <div className="col">
            <ButtonInsideImage
              imgSrc={img1}
              imgAttachment="fixed"
              imgSize="center"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Qualifications;
