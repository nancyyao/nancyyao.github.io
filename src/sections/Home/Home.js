import React, { Component } from 'react';
import circle from '../../files/seafoam-circle.png';
import code from './images/code-circle.png';
import design from './images/design-circle.png';
import sketch from './images/sketch-circle.png';
import contact from './images/contact-circle.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id={this.props.id} className="Home main-section">
        <p className="Home-tagline">hi, i'm nancy. i'm a developer and designer striving
        to build beautiful, functional digital products.</p>
        <div className="nav-icons">
          <a onClick={function()
            { document.getElementById("developer-id").scrollIntoView(); }
          }><img src={code} className="nav-icon" alt="circle"/></a>
          <a onClick={function()
            { document.getElementById("design-id").scrollIntoView(); }
          }><img src={design} className="nav-icon" alt="circle" /></a>
          <a onClick={function()
            { document.getElementById("sketches-id").scrollIntoView(); }
          }><img src={sketch} className="nav-icon" alt="circle" /></a>
          <a onClick={function()
            { document.getElementById("contact-id").scrollIntoView(); }
          }><img src={contact} className="nav-icon" alt="circle" /></a>
        </div>
      </div>
    );
  }
}

export default Home;
