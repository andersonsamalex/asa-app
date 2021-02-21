import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import img from '../resources/whiskey.jpg';
import Typist from 'react-typist';

function Splash(props) {
  return (
    <div className="section">
      <Container className="vertically-center">
        <Row>
          <Col>
            <img
              src={props.content.url}
              alt={props.content.assetDescription}
              className="rounded-circle"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Typist startDelay={1000} cursor={{ show: false }}>
              <h1 className="display-4 header-text">Sam Anderson</h1>
            </Typist>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Splash;
