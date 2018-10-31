import React, { Component } from 'react';
import Home from './sections/Home/Home.js';
import Developer from './sections/Developer/Developer.js';
import Design from './sections/Design/Design.js';
import Sketches from './sections/Sketches/Sketches.js';
import Contact from './sections/Contact/Contact.js';
import NavBar from './components/Navbar/Navbar'
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <StickyContainer>
        <Home id="home-id"/>
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
    );
  }
}

        // <Sticky topOffset={200}>
        //   {({ style }) => (
        //     <NavBar style={style} />
        //   )}
        // </Sticky>
export default App;
