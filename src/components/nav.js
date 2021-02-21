import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Navi(props) {

    return (
        <Navbar expand='md' sticky='top' variant='dark' bg='dark' role="navigation">
            <Navbar.Toggle type="button" data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon" > </span>
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav style={{margin: 'auto'}}>
                    <Nav.Item className="mx-5" >
                        <Link activeClass="active"
                            className="nav-link"
                            to="about"
                            role="button"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-50}>
                            About
                            </Link>
                    </Nav.Item>
                    <Nav.Item className="mx-5" >
                        <Link activeClass="active"
                            className="nav-link"
                            to="qualifications"
                            role="button"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-55} >
                            Qualifications
                            </Link>
                    </Nav.Item>
                    <Nav.Item className="mx-5" >
                        <Link activeClass="active"
                            className="nav-link"
                            to="projects"
                            role="button"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-50} >
                            Projects
                            </Link>
                    </Nav.Item>
                    <Nav.Item className="mx-5" >
                        <Link activeClass="active"
                            className="nav-link"
                            to="contact"
                            role="button"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-10} >
                            Contact
                            </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navi;