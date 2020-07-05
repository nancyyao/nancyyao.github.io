import React from 'react'
import {  Route }from "react-router-dom";
import Home from '../../pages/Home/Home.js';

const Routes = () => (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/dev" component={Home} />
      <Route exact path="/design" component={Home} />
      <Route exact path="/sketches" component={Home} />
    </div>
);


export default Routes;
