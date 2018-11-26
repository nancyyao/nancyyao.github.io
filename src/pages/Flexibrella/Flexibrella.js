import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import FlexHero from './images/flexibrella_hero.png';
import FlexUser from './images/flexibrella_user.png';
import FlexSketch1 from './images/flexibrella_sketch1.png';
import FlexSketch2 from './images/flexibrella_sketch2.png';
import FlexSketch3 from './images/flexibrella_sketch3.png';
import FlexCloseup1 from './images/flexibrella_closeup_1.png';
import FlexCloseup2 from './images/flexibrella_closeup_2.png';
import FlexCloseup3 from './images/flexibrella_closeup_3.png';
import FlexTeam from './images/flexibrella_team.JPG';

import './Flexibrella.css';

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

class Flexibrella extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
        <BackButton />

          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="Flexibrella" role="Designer" date="June - Aug 2016"
              tagline="An accessible tool for rainy days."/>
            </Row>

            <Row className="detail-row">
             <Col xs={12}>
               <img className="detail-hero-image" src={FlexHero}/>
             </Col>
            </Row>

             <Row className="detail-row">
             <Col xs={6} style={styles.col}>
               <Caption side="caption-left caption-top" header="Designing for user needs"
                text=<p>The design problem presented to my team of four by our client, Eden
                Supportive Living (Chicago), was to make it easier for their many wheelchair-using
                residents to go out in rainy weather.</p>/>
             </Col>
             <Col xs={5} style={styles.col}>
               <img className="detail-image-right" src={FlexUser}/>
             </Col>
            </Row>



            <Row className="detail-row">
              <Col className="flex-col-1" xs={4} style={styles.col}>
                <img className="detail-image-left detail-image-tight" src={FlexSketch1}/>
              </Col>

              <Col className="flex-col-2" xs={4} style={styles.col}>
                <img className="detail-image-tight" src={FlexSketch2}/>
              </Col>

              <Col className="flex-col-3" xs={4} style={styles.col}>
                <Caption side="caption-tight" header="Iterative process"
                 text=<p>Our design process consisted of research, interviews with Eden
                 residents, ideation, prototyping, and user observation.<br/><br/>The final
                 design shields users from rain, can easily attach to wheelchairs, is adjustable
                 in angle and height, and is easy to stow.</p>/>
                 <img className="detail-image-right detail-image-tight" src={FlexSketch3}/>
              </Col>
            </Row>
          </Grid>

      </div>
    );
  }
}

export default Flexibrella;
