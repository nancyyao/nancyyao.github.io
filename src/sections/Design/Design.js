import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
          <p>a designer...</p>
        </header>
        <div className="Design-body">
          <div>
            <Link to="/design-milk"><img src={milk} className="Design-polaroid" alt="milk" /></Link>
            <Link to="/design-foldable"><img src={foldable} className="Design-polaroid" alt="foldable" /></Link>
            <Link to="/design-makergirl"><img src={makergirl} className="Design-polaroid" alt="makergirl" /></Link>
          </div>
          <div>
            <Link to="/design-flexibrella"><img src={flexibrella} className="Design-polaroid" alt="flexibrella" /></Link>
            <Link to="/design-mayfest"><img src={blank} className="Design-polaroid" alt="mayfest" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
