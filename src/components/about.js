import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function About(props) {

  function insertHTML(html) {
    return { __html: html };
  }

  return (
    <div className="section" id="about">
      <h2 className="p-5">About Me</h2>
      <Container>
        <Row style={{flexWrap: 'wrap-reverse', justifyContent: 'center'}}>
        <Col xs={12} sm={12} md={8}>
            <p className="text-justify" dangerouslySetInnerHTML={insertHTML(props.content.generalDescription.html)}>
            </p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img
              src={props.content.generalAsset.url}
              alt={props.content.generalAsset.assetDescription}
              style={{width: '100%', borderRadius: '3vw' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
