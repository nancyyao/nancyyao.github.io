import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Landing from '../../sections/Landing/Landing.js';
import Developer from '../../sections/Developer/Developer.js';
import Design from '../../sections/Design/Design.js';

import './Home.css';


const Home = (props) => {
  return (
    <div>
      <Landing id="landing-id"/>
      <Developer id="developer-id"/>
      <Design id="design-id"/>
    </div>
  )
}

export default Home;
