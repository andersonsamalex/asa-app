import React, { Component } from 'react';
import img from '../resources/sam.jpg';

class About extends Component {
  state = {};
  render() {
    return (
      <div className="section" id="about">
        <h2 className="p-5">About Me</h2>
        <div className="container-lg">
          <div className="row">
            <div className="col-md">
              <p className="text-justify">
                I am a recent aerospace engineering graduate from the university
                of Hertfordshire. I spent a semester studying at both RMIT in
                Melbourne and UPC in Barcelona. <br/><br/> Throughout my degree I gained a
                deeper passion for space engineering and am committed to
                furthering the utilisation and sustainability of space. My
                passion led me to win the RAeS Blue Streak Prize for my work
                designing a concept for an asteroid sample return spacecraft. I
                am a curious, and creative person who enjoys developing
                solutions to problems even in my down-time. I am pro-active as
                to my career in space, I have been working to build a large
                network of space professionals and have been regularly attending
                UK space networking events. <br/><br/>My hobbies include cooking, software
                development and sailing; the latter through which I competed in
                both the Tall Ships Race 2015 and the Tall Ships Regatta 2017.
              </p>
            </div>
            <div className="col-sm">
              <img
                src={img}
                alt="Avatar"
                className="img-thumbnail"
                style={{ maxWidth: 'calc(5vw + 5vh + 50vmin)' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
