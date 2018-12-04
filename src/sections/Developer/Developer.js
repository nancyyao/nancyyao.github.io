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
          <Link to="/dev-instagram">
            <div class="dev-overlay-container">
              <img src={instagram} className="Dev-mockup-phone" alt="instagram" />
              <div class="dev-overlay-phone">
                <p class="dev-overlay-text">Instagram</p>
              </div>
            </div>
          </Link>
          <Link to="/dev-insync">
            <div class="dev-overlay-container">
              <img src={insync} className="Dev-mockup-phone" alt="insync" />
              <div class="dev-overlay-phone">
                <p class="dev-overlay-text">InSync</p>
              </div>
            </div>
          </Link>
          <Link to="/dev-strugglebus">
            <div class="dev-overlay-container">
              <img src={strugglebus} className="Dev-mockup-phone" alt="strugglebus" />
              <div class="dev-overlay-phone">
                <p class="dev-overlay-text">StruggleBus</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="Dev-body">
          <Link to="/dev-buildher">
            <div class="dev-overlay-container">
              <img src={buildher} className="Dev-mockup-desktop" alt="buildher" />
              <div class="dev-overlay-desktop">
                <p class="dev-overlay-text">BuildHer</p>
              </div>
            </div>
          </Link>
          <Link to="/dev-collablab">
            <div class="dev-overlay-container">
              <img src={collablab} className="Dev-mockup-desktop" alt="collablab" />
              <div class="dev-overlay-desktop">
                <p class="dev-overlay-text">CollabLab</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Developer;
