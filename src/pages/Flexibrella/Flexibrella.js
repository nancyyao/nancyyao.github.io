import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
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
        <StickyContainer>

          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="Flexibrella" role="Designer" date="June - Aug 2016"
              skills="User research/testing, Prototyping, Sketching, Design thinking"
              tagline="Designing an accessible tool to make it easier for wheelchair users to go out on rainy days."/>
            </Row>

            <Row className="detail-row">
             <Col xs={12}>
               <img className="detail-hero-image" src={FlexHero}/>
             </Col>
            </Row>

             <Row className="detail-row">
             <Col xs={6} style={styles.col}>
               <Caption side="caption-left" header="Designing for user needs"
                text=<p>The design problem presented to my team of four by our client, Eden
                Supportive Living (Chicago), was to make it easier for their many wheelchair-using
                residents to go out in rainy weather.<br/><br/>The picture to the right shows a
                test run of our prototype.</p>/>
             </Col>
             <Col xs={6} style={styles.col}>
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
                 residents, ideation, prototyping, and user observation.<br/><br/></p>/>
                 <img className="detail-image-right detail-image-tight" src={FlexSketch3}/>
              </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={6} style={styles.col}>
                <img className="detail-image-left" src={FlexCloseup1}/>
                <img className="detail-image-left" src={FlexCloseup2}/>
              </Col>

              <Col xs={6} style={styles.col}>
                <Caption side="caption-right" header="Building a prototype"
                 text=<p>Flexibrella consists of: an
                 aluminum U-channel with 3D printed plastic lining and a screw for attachment;
                 a gooseneck arm for easy adjustment; and a polyethylene and plexiglass base. </p>/>
              </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={6} style={styles.col}>
                <Caption side="caption-left" header="Final product"
                 text=<p>The final design is an umbrella holder attachment that shields users from rain, can easily attach to
                 wheelchairs, is adjustable in angle and height, and is easy to stow.</p>/>
              </Col>

              <Col xs={6} style={styles.col}>
                <img className="detail-image-right" src={FlexCloseup3}/>
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

export default Flexibrella;
