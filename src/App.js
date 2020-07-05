import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Router/Routes'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <Routes />
          </div>
        </Router>


    );
  }
}
export default App;
