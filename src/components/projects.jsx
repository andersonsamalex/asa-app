import React, { Component } from 'react';
import ProjectCard from './projectCard';
import img1 from './sc.jpg';

class projects extends Component {
  state = {};
  render() {
    return (
      <div id="projects">
        <h2 className='m-30 mt-50'>Projects</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm justify-content-around">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm justify-content-around">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
