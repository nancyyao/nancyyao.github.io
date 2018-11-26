import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import FoldHero from './images/Foldable-Hero.png';
import FoldSketch1 from './images/Foldable-Sketch-1.png';
import FoldSketch2 from './images/Foldable-Sketch-2.png';
import FoldSketch3 from './images/Foldable-Sketch-3.png';
import FoldCad1 from './images/Foldable1.png';
import FoldCad2 from './images/Foldable3.JPG';
import FoldCad3 from './images/Foldable2.png';
import FoldModel1 from './images/Foldable-Model-1.png';
import FoldModel2 from './images/Foldable-Model-2.png';

import './Foldable.css';

const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    col: {
        paddingLeft: 1,
        paddingRight: 1,
    }
};

class Foldable extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
        <BackButton />

          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="Foldable" role="Designer" date="Apr - Jun 2018"
              tagline="An efficient cooking solution for apartment dwellers with limited space."/>
            </Row>

            <Row className="detail-row">
               <Col xs={12}>
                 <img className="detail-hero-image" src={FoldHero}/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={5} style={styles.col}>
                <Caption side="caption-left" header="Optimizing in the kitchen"
                 text=<p>Foldable aims to inspire apartment dwellers with limited space to optimize
                 their kitchen use and prepare meals more often.</p>/>
              </Col>
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-right" src={FoldSketch1}/>
                 <img className="detail-image-right" src={FoldSketch2}/>
               </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-left" src={FoldSketch3}/>
               </Col>
               <Col xs={5} style={styles.col}>
                 <Caption side="caption-left" header="Solving common complaints"
                  text=<p>My team was inspired by common pain points in the kitchen mentioned by fellow
                  classmates, such as the lack of space in cramped apartments and time commitment of
                  cleaning up.<br/><br/>We considered many different solutions, from over-the-sink surfaces
                  to pull-out counters, but based on feedback from students, the winning idea was multi-tasking
                  dinnerware.</p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col className="foldable-col-1" xs={4} style={styles.col}>
                 <img className="detail-image-tight" src={FoldCad3}/>
              </Col>
              <Col className="foldable-col-2" xs={4} style={styles.col}>
                 <img className="detail-image-tight" src={FoldCad2}/>
              </Col>
              <Col className="foldable-col-3" xs={4}>
                <img className="detail-image-tight" src={FoldCad3}/>
                <Caption side="caption-tight" header="SolidWorks modeling"
                 text=<p>Foldable has easy hinges closed with magnets. It allows for one-dish meal prep
                 by converting from a chopping board for produce to a serving bowl with a simple finish that's
                 sleek enough to display.</p>/>
              </Col>
            </Row>

          <Row className="detail-row">
            <Col xs={5} style={styles.col}>
              <Caption side="caption-left" header="Test run in the kitchen"
               text=<p>After rough prototyping, design revisions, and CAD modeling, we 3D printed a prototype
               that was tested in the kitchen. Chop, toss, and serve!</p>/>
            </Col>
             <Col xs={7} style={styles.col}>
               <img className="detail-image-right" src={FoldModel1}/>
               <img className="detail-image-right" src={FoldModel2}/>
             </Col>
          </Row>
          </Grid>

      </div>
    );
  }
}

export default Foldable;
