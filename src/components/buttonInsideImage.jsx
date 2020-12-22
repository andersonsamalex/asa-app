import React, { Component } from 'react';

class ButtonInsideImage extends Component {
  state = {};
  render() {
    const imgStyle = {
      backgroundImage: 'url(' + this.props.imgSrc + ')',
    };
    return (
      <div className="buttonInsideImage" style={imgStyle}>
        <a
          className="btn btn-primary img-button"
          href={this.props.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.buttonText}
        </a>
      </div>
    );
  }
}

export default ButtonInsideImage;
