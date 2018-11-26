import React from 'react'
import {  Route, Link } from "react-router-dom";
import Home from '../../pages/Home/Home.js';
import Instagram from '../../pages/Instagram/Instagram.js';
import InSync from '../../pages/InSync/InSync.js';
import StruggleBus from '../../pages/StruggleBus/StruggleBus.js';
import BuildHer from '../../pages/BuildHer/BuildHer.js';
import CollabLab from '../../pages/CollabLab/CollabLab.js';
import Milk from '../../pages/Milk/Milk.js';
import Foldable from '../../pages/Foldable/Foldable.js';
import MakerGirl from '../../pages/MakerGirl/MakerGirl.js';
import Flexibrella from '../../pages/Flexibrella/Flexibrella.js';
import Mayfest from '../../pages/Mayfest/Mayfest.js';

const Routes = () => (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/dev" component={Home} />
      <Route exact path="/design" component={Home} />
      <Route exact path="/sketches" component={Home} />
      <Route exact path="/contact" component={Home} />
      <Route exact path="/dev-instagram" component={Instagram} />
      <Route exact path="/dev-insync" component={InSync} />
      <Route exact path="/dev-strugglebus" component={StruggleBus} />
      <Route exact path="/dev-buildher" component={BuildHer} />
      <Route exact path="/dev-collablab" component={CollabLab} />
      <Route exact path="/design-milk" component={Milk} />
      <Route exact path="/design-foldable" component={Foldable} />
      <Route exact path="/design-makergirl" component={MakerGirl} />
      <Route exact path="/design-flexibrella" component={Flexibrella} />
      <Route exact path="/design-mayfest" component={Mayfest} />
    </div>
);


export default Routes;
