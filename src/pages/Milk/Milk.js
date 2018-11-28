import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import MilkHero from './images/milk_cad_blue.png';
import MilkBoard1 from './images/milk_imageboard1.png';
import MilkBoard2 from './images/milk_imageboard2.png';
import MilkBoard3 from './images/milk_imageboard3.png';
import MilkSketchPaper from './images/milk_sketch1.png';
import MilkSketchBlue from './images/milk_sketch2.png';
import MilkSketchRed from './images/milk_sketch3.png';
import MilkTeal from './images/milk_cad_teal.png';
import MilkRed from './images/milk_cad_red.png';

import './Milk.css';

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

class Milk extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
        <StickyContainer>

          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="MILK" role="Designer" date="Apr - May 2018"
              tagline="Designing a water bottle inspired by the Visual Brand Language of the MINI Cooper."/>
            </Row>

            <Row className="detail-row">
             <Col xs={12}>
               <img className="detail-hero-image" src={MilkHero}/>
             </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-left" src={MilkBoard1}/>
               </Col>
               <Col xs={5} style={styles.col}>
                 <Caption side="caption-right" header="Inspiration for everyday objects"
                  text=<p>MILK is a water bottle inspired by the Visual Brand Language of the MINI Cooper.</p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={5} style={styles.col}>
                <Caption side="caption-left" header="Capturing the MINI essence"
                 text=<p>The MINI Cooper calls to mind an iconic look and feel that it has stayed true to since
                 the 60s. I drew inspiration from its defining brand traits: bold, colorful, and classic.</p>/>
              </Col>
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-right" src={MilkBoard2}/>
                 <img className="detail-image-right" src={MilkBoard3}/>
               </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={6} style={styles.col}>
                 <img className="detail-image-left" src={MilkSketchBlue}/>
                 <img className="detail-image-left" src={MilkSketchRed}/>
               </Col>
               <Col xs={6} style={styles.col}>
                 <Caption side="caption-right" header="Concept sketches"
                  text=<p>Classic silhouettes and loud colors were key. MINI Cooper isn't just meant for
                  function -- it wants to be seen. THis product had to be more than just a water vessel;
                  it needed to be an accessory.</p>/>
                  <img className="detail-image-right milk-sketch-paper" src={MilkSketchPaper}/>
               </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-left" src={MilkTeal}/>
                 <img className="detail-image-left" src={MilkRed}/>
               </Col>
               <Col xs={5} style={styles.col}>
                 <Caption side="caption-right" header="MILK"
                  text=<p>The final design is modeled after another iconic shape -- the glass milk bottles
                  of the past.<br/><br/>SolidWorks renderings show a more detailed view of the painted glass bottle
                  with a steel cap, inspired by classic MINI Cooper colors and stripes.</p>/>
               </Col>
            </Row>
          </Grid>
          <Sticky>
            {({ style }) => (
              <NavBar style={style} />
            )}
          </Sticky>
        </StickyContainer>
      </div>
    );
  }
}

export default Milk;
