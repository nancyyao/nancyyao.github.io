import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import resume from "../../files/resume.pdf";

import './Navbar.css';


class NavBar extends Component {
  render () {
    return (
      <Navbar style={this.props.style} className="Navbar">
        <div className="container-fluid">
          <Nav pullLeft style={{display:"flex", flexDirection:"row"}}>
            <NavItem>
              <a onClick={function()
                { document.getElementById("home-id").scrollIntoView(); }
              }><p className="Navbar-item">nancy yao</p></a>
            </NavItem>
          </Nav>

          <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
            <NavItem>
              <a onClick={function()
                { document.getElementById("developer-id").scrollIntoView(); }
              }><p className="Navbar-item">tech</p></a>
            </NavItem>
            <NavItem>
              <a onClick={function()
                { document.getElementById("design-id").scrollIntoView(); }
              }><p className="Navbar-item">design</p></a>
            </NavItem>
            <NavItem>
              <a onClick={function()
                { document.getElementById("sketches-id").scrollIntoView(); }
              }><p className="Navbar-item">sketches</p></a>
            </NavItem>
            <NavItem>
              <a onClick={function()
                { document.getElementById("contact-id").scrollIntoView(); }
              }><p className="Navbar-item">contact</p></a>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default NavBar
