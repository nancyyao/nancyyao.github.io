import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Router/Routes'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'
import NavBar from './components/Navbar/Navbar'
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  render() {
    return (

        <Router>
        <ScrollToTop>
          <div>
            <Routes />
          </div>
        </ScrollToTop>
        </Router>


    );
  }
}
export default App;
