import React, { Component } from 'react';
import img from '../resources/sam.jpg'

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <h2 className='m-30'>About Me</h2>
        <div className="container-lg">
          <div className="row">
            <div className="col-md">
              <p className='text-justify'>
                I am a recent aerospace engineering graduate from the university
                of Hertfordshire. I spent a semester studying at both RMIT in
                Melbourne and UPC in Barcelona. Having graduated with a first
                class degree I have honed my technical skills including multiple
                programming languages and software packages. My hobbies and
                other employment has allowed me to develop my soft skills such
                as teamwork and networking.
              </p>
            </div>
            <div className="col-sm">
              <img
                src={img}
                alt="Avatar"
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
