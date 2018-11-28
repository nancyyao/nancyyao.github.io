import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import dev from './images/dev1.png';
import design from './images/design1.png';
import sketch from './images/sketch1.png';
import contact from './images/contact.png';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id={this.props.id} className="Landing main-section">
        <p className="Landing-tagline">hi, i'm nancy. i'm a
          <a className="Landing-link" onClick={function()
           { document.getElementById("developer-id").scrollIntoView(); } }> developer</a> and
          <a className="Landing-link" onClick={function()
            { document.getElementById("design-id").scrollIntoView(); } }> designer</a> striving to build beautiful, functional digital products.</p>

        <div className="nav-icons">
          <div className="nav-icon-container" onClick={function()
            { document.getElementById("developer-id").scrollIntoView(); } }>
            <Image className="nav-icon" src={dev} circle />
            <div class="nav-icon-overlay">
              <p class="nav-icon-text">tech projects</p>
            </div>
          </div>
          <div className="nav-icon-container" onClick={function()
            { document.getElementById("design-id").scrollIntoView(); } }>
            <Image className="nav-icon" src={design} circle />
            <div class="nav-icon-overlay">
              <p class="nav-icon-text">design projects</p>
            </div>
          </div>
          <div className="nav-icon-container" onClick={function()
            { document.getElementById("sketches-id").scrollIntoView(); } }>
            <Image className="nav-icon" src={sketch} circle />
            <div class="nav-icon-overlay">
              <p class="nav-icon-text">sketches</p>
            </div>
          </div>
          <div className="nav-icon-container" onClick={function()
            { document.getElementById("contact-id").scrollIntoView(); } }>
            <Image className="nav-icon" src={contact} circle />
            <div class="nav-icon-overlay">
              <p class="nav-icon-text">about me</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;


// <a onClick={function()
//   { document.getElementById("contact-id").scrollIntoView(); }
// }><Image className="nav-icon" src={contact} circle /></a>
