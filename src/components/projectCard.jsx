import React, { Component } from 'react';

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="card m-20">
        <h5 className="card-header">{this.props.title}</h5>
        <div className="card-body">
          <p className="card-text">{this.props.descrp}</p>
          <div className="p-2">
            <img
              src={this.props.imgSrc}
              alt={this.props.imgAlt}
              className="img-fluid"
            />
          </div>
          <a 
          href={this.props.link} 
          className='stretched-link' 
          target="_blank"
          rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
