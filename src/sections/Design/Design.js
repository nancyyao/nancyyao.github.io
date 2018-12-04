import React, { Component } from 'react';
import { Link } from "react-router-dom";

import milk from './images/polaroid-milk.png';
import foldable from './images/polaroid-foldable.png';
import makergirl from './images/polaroid-makergirl.png';
import flexibrella from './images/polaroid-flexibrella.png';
import mayfest from './images/polaroid-mayfest.png';
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
            <Link to="/design-milk">
              <div class="design-overlay-container">
                <img src={milk} className="Design-polaroid" alt="milk" />
                <div class="design-overlay">
                  <p class="design-overlay-text">MILK</p>
                </div>
              </div>
            </Link>
            <Link to="/design-foldable">
              <div class="design-overlay-container">
                <img src={foldable} className="Design-polaroid" alt="foldable" />
                <div class="design-overlay">
                  <p class="design-overlay-text">Foldable</p>
                </div>
              </div>
            </Link>
            <Link to="/design-makergirl">
              <div class="design-overlay-container">
                <img src={makergirl} className="Design-polaroid" alt="makergirl" />
                <div class="design-overlay">
                  <p class="design-overlay-text">MakerGirl</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/design-flexibrella">
              <div class="design-overlay-container">
                <img src={flexibrella} className="Design-polaroid" alt="flexibrella" />
                <div class="design-overlay">
                  <p class="design-overlay-text">Flexibrella</p>
                </div>
              </div>
            </Link>
            <Link to="/design-mayfest">
              <div class="design-overlay-container">
                <img src={mayfest} className="Design-polaroid" alt="mayfest" />
                <div class="design-overlay">
                  <p class="design-overlay-text">Mayfest</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
