import React, { Component } from 'react';
import milk from './images/polaroid-milk.png';
import foldable from './images/polaroid-foldable.png';
import makergirl from './images/polaroid-makergirl.png';
import flexibrella from './images/polaroid-flexibrella.png';
import blank from './images/polaroid-blank.png';
import './Design.css';

class Design extends Component {
  render() {
    return (
      <div id={this.props.id} className="Design main-section">
        <header className="section-header">
          <p>a maker...</p>
        </header>
        <div className="Design-body">
          <div>
            <a><img src={milk} className="Design-polaroid" alt="milk" /></a>
            <a><img src={foldable} className="Design-polaroid" alt="foldable" /></a>
            <a><img src={makergirl} className="Design-polaroid" alt="makergirl" /></a>
          </div>
          <div>
            <a><img src={flexibrella} className="Design-polaroid" alt="flexibrella" /></a>
            <a><img src={blank} className="Design-polaroid" alt="mayfest" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
