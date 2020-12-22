import React, { Component } from 'react';
import { Link} from 'react-scroll';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
        role="navigation"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about"
                  role="button"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="qualifications"
                  role="button"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  Qualifications
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="projects"
                  role="button"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  role="button"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
