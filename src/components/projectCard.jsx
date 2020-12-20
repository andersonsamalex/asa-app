import React, { Component } from 'react';

class ProjectCard extends Component {
    state = {  }
    render() {
        return (
            <div className="card m-20">
                <h5 className="card-header">{this.props.title}</h5>
                <div className="card-body>">
                  <p className="card-text p-1">
                    {this.props.descrp}
                  </p>
                  <img
                    src={this.props.imgSrc}
                    alt={this.props.imgAlt}
                    className="img-fluid"
                  />
                </div>
              </div>
        );
    }
}

export default ProjectCard;