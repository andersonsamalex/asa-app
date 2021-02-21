import React from 'react';
import { Row, Col } from 'react-bootstrap';

function SocialLinks(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
        >
            <Row>
                <Col xs={2}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi"
                        viewBox={props.viewBox}
                    >
                        {props.path}
                    </svg>
                </Col>
                <Col xs={9}>
                    <h3 className="social-labels">{props.socialLabel}</h3>
                </Col>
            </Row>
        </a>
    )
}
export default SocialLinks