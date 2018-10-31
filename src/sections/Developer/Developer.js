import React, { Component } from 'react';
import instagram from './images/dev-insta.png';
import insync from './images/dev-insync.png';
import strugglebus from './images/dev-strugglebus.png';
import buildher from './images/dev-buildher.png';
import collablab from './images/dev-collablab.png';


import './Developer.css';

class Developer extends Component {
  render() {
    return (
      <div id={this.props.id} className="Developer main-section">
        <header className="section-header">
          <p>i'm a developer...</p>
        </header>
        <div className="Dev-body">
          <a><img src={instagram} className="Dev-mockup-phone" alt="instagram" /></a>
          <a><img src={insync} className="Dev-mockup-phone" alt="insync" /></a>
          <a><img src={strugglebus} className="Dev-mockup-phone" alt="strugglebus" /></a>
        </div>
        <div className="Dev-body">
          <a><img src={buildher} className="Dev-mockup-desktop" alt="buildher" /></a>
          <a><img src={collablab} className="Dev-mockup-desktop" alt="collablab" /></a>
        </div>
      </div>
    );
  }
}

export default Developer;
