import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar'
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';

import Landing from '../../sections/Landing/Landing.js';
import Developer from '../../sections/Developer/Developer.js';
import Design from '../../sections/Design/Design.js';
import Sketches from '../../sections/Sketches/Sketches.js';
import Contact from '../../sections/Contact/Contact.js';

import './Home.css';


const Home = (props) => {
  return (
    <div>
      <StickyContainer>
        <Landing id="landing-id"/>
        <Developer id="developer-id"/>
        <Design id="design-id"/>
        <Sketches id="sketches-id"/>
        <Sticky topOffset={200}>
          {({ style }) => (
            <NavBar style={style} />
          )}
        </Sticky>
        <Contact id="contact-id"/>

      </StickyContainer>
    </div>
  )
}

export default Home;
