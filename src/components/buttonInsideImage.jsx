import React, { Component } from 'react';

class ButtonInsideImage extends Component {
    state = {  }
    render() {
        const imgStyle = {
            backgroundImage: 'url(' + this.props.imgSrc + ')',
            backgroundSize: this.props.imgSize,
            backgroundAttachment: this.props.imgAttachment
        }
        return (
            <div style={imgStyle}>
                <button className="btn btn-outline-light img-button">
                  CV / Resume
                </button>
            </div>
        );
    }
}

export default ButtonInsideImage;