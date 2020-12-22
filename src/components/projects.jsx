import React, { Component } from 'react';
import ProjectCard from './projectCard';
import img1 from '../resources/Spacecraft-Bottom.png';
import img2 from '../resources/Peregrine.png';
import img3 from '../resources/asa-app-code.png';

import link1 from '../resources/IndividualProjectReport.pdf';
import link2 from '../resources/Performance&PropulsionReport.pdf';

class projects extends Component {
  state = {};
  render() {
    return (
      <div id="projects" className='section'>
        <h2 className='p-5'>Projects</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm my-2" >
              <ProjectCard
                title="MAIAR Spacecraft"
                descrp="Conceptual design of an asteroid sample return spacecraft."
                imgSrc={img1}
                imgAlt="Spacecraft"
                link={link1}
              />
            </div>
            <div className="col-sm my-2">
              <ProjectCard
                title="UH SB-90 Peregrine"
                descrp="Group project developing a regional aircraft."
                imgSrc={img2}
                imgAlt="Regional Jet"
                link={link2}
              />
            </div>
            <div className='col-sm my-2'>
              <ProjectCard
              title='React.js based personal website'
              descrp='First foray into modern web development'
              imgSrc={img3}
              imgAlt='jsx code'
              link='https://github.com/andersonsamalex/asa-app'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default projects;
