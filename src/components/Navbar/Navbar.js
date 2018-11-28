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
            <Link to="/" className="Navbar-item"><p>nancy yao</p></Link>
          </Nav>
          <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
            <Link to="/dev" className="Navbar-item"><p>developer</p></Link>
            <Link to="/design" className="Navbar-item"><p>designer</p></Link>
            <Link to="/sketches" className="Navbar-item"><p>sketches</p></Link>
            <Link to="/contact" className="Navbar-item"><p>contact</p></Link>
            <a className="Navbar-item" href={resume}>resume</a>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default NavBar
