import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard(props) {
  const { title, image, descrp, onClick, onChange, index } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(clicked ? false : true);
  };
  const handleButtonClick = () => {
    onChange(index);
    onClick();
  }

  return (
    <Card className='projectCard mb-2' bg='primary' text='light'>
      <Card.Header className='h3'>{title}</Card.Header>
      {!clicked ? (
        <Card.Body onClick={handleClick} className='d-flex flex-column projectCardBody'>
          <div style={{ padding: '0.5rem' }}>
            <Card.Img src={image.url} alt={image.assetDescription} className='projectCardImage' />
          </div>
          <Button className='mt-auto' onClick={handleButtonClick} variant='dark'>View</Button>
        </Card.Body>
      ) : (
          <Card.Body onClick={handleClick} className='d-flex flex-column projectCardBody'>
            <div style={{ padding: '0.5rem' }}>
              <Card.Text style={{ fontSize: 'calc(1rem + 1vw)' }}>{descrp}</Card.Text>
            </div>
            <Button className='mt-auto' onClick={handleButtonClick} variant='dark'>View</Button>
          </Card.Body>
        )}
    </Card>
  );
};

export default ProjectCard;
