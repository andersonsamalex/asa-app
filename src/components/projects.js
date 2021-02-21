import React from 'react';
import ProjectCard from './projectCard.js';
import { Container, CardColumns } from 'react-bootstrap';

function projects(props) {
  const { onClick, onChange } = props;

  return (
    <div id="projects" className='section'>
      <h2 className='p-5'>Projects</h2>
      <Container>
        <CardColumns>
          {props.content.map(({
            projectName,
            projectBriefDescription,
            projectImage,
            }, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={projectName}
              descrp={projectBriefDescription}
              image={projectImage}
              onClick={onClick}
              onChange={onChange}

              />
          ))}
        </CardColumns>
      </Container>
    </div>
  );
}
export default projects;
