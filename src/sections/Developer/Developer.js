import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
          <Link to="/dev-instagram"><img src={instagram} className="Dev-mockup-phone" alt="instagram" /></Link>
          <Link to="/dev-insync"><img src={insync} className="Dev-mockup-phone" alt="insync" /></Link>
          <Link to="/dev-strugglebus"><img src={strugglebus} className="Dev-mockup-phone" alt="strugglebus" /></Link>
        </div>
        <div className="Dev-body">
          <Link to="/dev-buildher"><img src={buildher} className="Dev-mockup-desktop" alt="buildher" /></Link>
          <Link to="/dev-collablab"><img src={collablab} className="Dev-mockup-desktop" alt="collablab" /></Link>
        </div>
      </div>
    );
  }
}

export default Developer;
