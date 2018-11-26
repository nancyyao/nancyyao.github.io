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
              <Link to="/"><p className="Navbar-item">nancy yao</p></Link>
            </NavItem>
          </Nav>

          <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
            <NavItem>
              <Link to="/dev"><p className="Navbar-item">tech</p></Link>
            </NavItem>
            <NavItem>
              <Link to="/design"><p className="Navbar-item">design</p></Link>
            </NavItem>
            <NavItem>
              <Link to="/sketches"><p className="Navbar-item">sketches</p></Link>
            </NavItem>
            <NavItem>
              <Link to="/contact"><p className="Navbar-item">contact</p></Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default NavBar


// <a onClick={function()
//   { document.getElementById("design-id").scrollIntoView(); }
// }><p className="Navbar-item">design</p></a>
