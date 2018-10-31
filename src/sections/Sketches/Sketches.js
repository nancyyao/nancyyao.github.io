import React, { Component } from 'react';
import shoe from './images/sketch-shoe.png';
import furniture from './images/sketch-furniture.png';
import pet from './images/sketch-pet.png';
import wearable from './images/sketch-wearable.png';
import tent from './images/sketch-tent.png';
import mod from './images/sketch-mod.png';

import './Sketches.css';

class Sketches extends Component {
  render() {
    return (
      <div id={this.props.id} className="Sketches main-section">
        <header className="section-header">
          <p>...and a designer.</p>
        </header>
        <div className="Sketches-body">
          <div>
            <a><img src={shoe} className="Sketch-image" alt="shoe" /></a>
            <a><img src={furniture} className="Sketch-image" alt="furniture" /></a>
            <a><img src={pet} className="Sketch-image" alt="pet" /></a>
          </div>
          <div>
            <a><img src={wearable} className="Sketch-image" alt="wearable" /></a>
            <a><img src={tent} className="Sketch-image" alt="tent" /></a>
            <a><img src={mod} className="Sketch-image" alt="mod" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketches;
