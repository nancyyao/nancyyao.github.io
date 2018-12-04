import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar'
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import IGLogo from './images/ig_logo.png';
import IGProfile from './images/ig_profile.png';
import IGExplore from'./images/ig_explore.png';

import './Instagram.css';

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

class Instagram extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
      <StickyContainer>
       <Grid fluid styles={styles.grid}>
         <Row className="detail-row">
           <DetailHeader name="Instagram" role="Software Engineering Intern, IG Metrics Infrastructure,
           IG Video Infrastructure" date="June - Sep 2018, June - Sep 2017"
           skills="iOS development, Objective-C"
           tagline="Interning as a software engineer for a social media giant in Menlo Park and New York City."/>
         </Row>

         <Row className="detail-row">
           <Col xs={6} style={styles.col}>
              <Caption side="caption-left" header="Working in tech"
               text=<p>Interning at Instagram for two summers taught me valuable skills about how to work in
               an industry setting, from functioning in a team to quickly adjusting to and working with an
               expansive code base in a huge, established company. I experienced the Silicon Valley tech
               campus as well as the smaller, metropolitan satellite NYC office.</p>/>
           </Col>
           <Col xs={6} style={styles.col}>
            <img className="detail-image-right" src={IGLogo}/>
           </Col>
         </Row>

         <Row className="detail-row">
          <Col xs={6} style={styles.col}>
            <img className="detail-image-left" src={IGProfile}/>
          </Col>
          <Col xs={6} style={styles.col}>
            <Caption side="caption-right" header="Video Infra"
             text=<p>I worked on the iOS side of the IG Video Infra team in Menlo Park in 2017. For my
             main project, I developed a solution to optimize video uploading on the iOS app. For my
             secondary project, I communicated with IG Direct engineers to help unify media uploads
             from different points in the app.</p>/>
          </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={6} style={styles.col}>
              <Caption side="caption-left" header="Metrics Infra"
               text=<p>In 2018, I interned on IG Metrics Infra, a sub-team of IG Client Stability, a core
               client team based in NYC that keeps Instagram running smoothly. <br/><br/>I designed and developed an
               internal data visualization tool to allow employees on various teams across the company to
               better utilize and understand IG's logging framework on the iOS side.<br/><br/>This involved
               presenting design ideas, meeting with different IG employees, and an iterative process of
               improving my tool.</p>/>
           </Col>

           <Col xs={6} style={styles.col}>
            <img className="detail-image-right" src={IGExplore}/>
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

export default Instagram;
