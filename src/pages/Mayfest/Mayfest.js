import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import NavBar from '../../components/Navbar/Navbar';

import './Mayfest.css';

import DilloLogo from './images/dillo.png';
import DilloSketch1 from './images/Sketches_1.JPG';
import DilloSketch2 from './images/Sketches_2.JPG';
import WireLineup from './images/wireframes/lineup.png';
import WireArtist1 from './images/wireframes/artist_detail1.png';
import WireArtist2 from './images/wireframes/artist_detail2.png';
import WireResources from './images/wireframes/resources.png';
import OldLineup from './images/old_app/lineup.png';
import OldArtist from './images/old_app/artist.png';
import OldResources from './images/old_app/resources.PNG';
import NewArtist from './images/final_app_screenshots/artist1.png';
import NewAnnouncements from './images/final_app_screenshots/announcements.png';
import NewResources from './images/final_app_screenshots/resources.png';
import NewLineup from './images/final_app_screenshots/mainstage.png';

const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 1,
        paddingRight: 1,
    }
};

class CollabLab extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
      <StickyContainer>
       <Grid fluid style={styles.grid}>
        <Row className="detail-row">
          <DetailHeader name="Mayfest" role="UX Designer"
          date="Sep 2018 - Dec 2018" skills="Sketch, UI/UX, Design thinking"
          tagline="Improving user experience for the tech presence of the biggest
          student-run music festival in the nation."/>
        </Row>

        <Row className="detail-row">
          <Col xs={6} style={styles.col}>
           <img className="dillo-logo detail-image-left" src={DilloLogo}/>
          </Col>
          <Col xs={6} style={styles.col}>
             <Caption side="caption-right" header="The need for UX design"
              text={<p>I was recruited to Mayfest as a UX designer to improve the mobile
              app used by students during their biggest event, the music festival
              <a href="http://www.dilloday.com/"> Dillo Day</a>. <br/><br/>My high level goals were to
              encourage students to see more artists by increasing awareness of both the schedule
              and the artists themselves, making it easier for users to explore the artists' music/social
              media. I also aimed to make resources (i.e. maps, emergency contacts) and
              real-time announcements more accessible.</p>}/>
          </Col>
        </Row>

        <Row className="detail-row">
          <Col className="mayfest-col-four-1" xs={3} style={styles.col}>
            <Caption side="caption-tight" header="Existing issues"
             text={<p>These screenshots from the old app show apparent UI problems, such as
             image distortion and redundant labels.<br/><br/>UX issues are apparent when using the app. For example, tapping directly on
             the artist name doesn't trigger the transition to the details page.</p>}/>
          </Col>
          <Col className="mayfest-col-four-1" xs={3} style={styles.col}>
           <img className="detail-image-tight" src={OldLineup}/>
          </Col>
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={OldArtist}/>
          </Col>
          <Col className="mayfest-col-four-3" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={OldResources}/>
          </Col>
        </Row>

        <Row className="detail-row">
          <Col xs={6} style={styles.col}>
           <img className="detail-image-left mayfest-sketch" src={DilloSketch2}/>
           <Caption side="caption-left" header="User interface goals"
            text={<p>To make the app more usable, I wanted to remove unnecessary features and transitions
            for more seamless navigation. Information should be accessible - artist music
            links should be highly visible, and emergency contact resources should be clear but separate so they
            wouldn't be clicked on accident.</p>}/>
          </Col>
          <Col xs={6} style={styles.col}>
            <Caption side="caption-right" header="User experience goals"
             text={<p>My overall goals for the app UI were to improve the professionalism by fixing
             visual details and creating consistent themes with color schemes and layouts.</p>}/>
            <img className="detail-image-right mayfest-sketch" src={DilloSketch1}/>
          </Col>
        </Row>

        <Row className="detail-row">
          <Col className="mayfest-col-four-1" xs={3} style={styles.col}>
           <img className="detail-image-tight" src={WireLineup}/>
          </Col>
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={WireArtist1}/>
          </Col>
          <Col className="mayfest-col-four-3" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={WireResources}/>
          </Col>
          <Col className="mayfest-col-four-4" xs={3} style={styles.col}>
            <Caption side="caption-tight" header="A new look"
             text={<p>I created the wireframes to the left in Sketch, creating a minimal but
             functional layout.</p>}/>
          </Col>
        </Row>

        <Row className="detail-row">
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
           <img className="detail-image-tight" src={NewLineup}/>
           <Caption side="caption-tight" header="The final product"
             text={<p>Screenshots from the final app used at Dillo Day 2019.</p>}/>
          </Col>
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={NewArtist}/>
          </Col>
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={NewResources}/>
          </Col>
          <Col className="mayfest-col-four-2" xs={3} style={styles.col}>
            <img className="detail-image-tight" src={NewAnnouncements}/>
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
    )
  }
}

export default CollabLab;
