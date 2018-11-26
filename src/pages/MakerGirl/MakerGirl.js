import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import MGHero from './images/mg_hero.jpg';
import MGBonding from './images/mg_bonding.jpg';
import MGLogo from './images/mg_logo.png';
import MGSession1 from './images/mg_session1.JPG';
import MGSession2 from './images/mg_session2.png';

import './MakerGirl.css';

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

class MakerGirl extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
        <StickyContainer>

          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="MakerGirl" role="Co-Founder and Co-Director, Northwestern Academy"
               date="Jan 2018 - Present"
               tagline="A non-profit that has educated over 3,000 girls in STEM through 3D printing and
               other technologies."/>
            </Row>

            <Row className="detail-row">
             <Col xs={12}>
               <img className="detail-hero-image" src={MGHero}/>
             </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-left" src={MGLogo}/>
               </Col>
               <Col xs={5} style={styles.col}>
                 <Caption side="caption-right" header="MakerGirl"
                  text=<p>Founded in 2014 at University of Illinois Urbana Champaign, MakerGirl is a non-profit
                  startup that aims to educated girls age 7-10 in STEM and foster passion and enthusiasm for
                  innovation and design.<br/><br/>At each themed session, girls learn about 3D printing and then
                  design and create their own 3D object to take home.</p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={6} style={styles.col}>
                <Caption side="caption-left" header="Starting a chapter"
                 text=<p>In January 2018, I connected with Elizabeth Engele, co-founder of MakerGirl, to discuss
                 expanding their reach to the Evanston/Chicago area.<br/><br/>With the help of my co-founders,
                 Rika Ko and Amanda Mirande, we began meeting with the UIUC team and organizing our own <b>Northwestern
                 Academy</b>.<br/><br/>The picture to the right is from a night in Chicago spent with the UIUC team
                 members.</p>/>
              </Col>
               <Col xs={6} style={styles.col}>
                 <img className="detail-image-right" src={MGBonding}/>
               </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-left" src={MGSession1}/>
               </Col>
               <Col xs={5} style={styles.col}>
                 <Caption side="caption-right" header="First sessions"
                  text=<p>We held our first two sessions in Spring 2018, reaching local girls and providing a fun
                  environment for them to learn about 3D printing and technology.</p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={5} style={styles.col}>
                <Caption side="caption-left" header="Moving forward..."
                 text=<p>MakerGirl and the NU academy in particular continue to grow as we partner with different
                 groups such as CodeVerse and Girl Scouts, and enlist new team members. We now have a team of 16
                 at NU, and hold bimonthly sessions of up to 10 girls each.</p>/>
              </Col>
               <Col xs={7} style={styles.col}>
                 <img className="detail-image-right" src={MGSession2}/>
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

export default MakerGirl;
