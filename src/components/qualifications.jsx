import React, { Component } from 'react';
import ButtonInsideImage from './buttonInsideImage';
import img1 from '../resources/cv-img.jpg';
import img2 from '../resources/degree-img.jpg';
import img3 from '../resources/raes-img.jpg';

import link1 from '../resources/CV.pdf';
import link2 from '../resources/transcript.pdf';
import link3 from '../resources/raes-award.pdf';


class Qualifications extends Component {
  state = {};
  render() {
    return (
      <div className="bg-dark text-light section" id="qualifications">
        <div className="row">
          <div className="col">
            <h2 className='p-5'>Qualifications</h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg">
            <ButtonInsideImage
              imgSrc={img1}
              buttonText='CV / Resume'
              buttonLink={link1}
            />
          </div>
          <div className="col-lg">
            <ButtonInsideImage
              imgSrc={img2}
              buttonText='Academic Transcript'
              buttonLink={link2}
            />
          </div>
          <div className="col-lg">
            <ButtonInsideImage
              imgSrc={img3}
              buttonText='RAeS Blue Streak Award'
              buttonLink={link3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Qualifications;
