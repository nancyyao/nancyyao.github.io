import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import { StickyContainer, Sticky } from 'react-sticky';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import BHLogo from './images/bh_logo.jpg';
import BHOpportunity from './images/bh_opportunity.jpeg';
import BHApp1 from'./images/app1.png';
import BHApp2 from'./images/app2.png';
import BHApp3 from'./images/app3.png';
import BHWeb1 from'./images/web1.png';
import BHWeb2 from'./images/web2.png';
import BHWeb3 from'./images/web3.png';
import BHWorking1 from './images/bh_working1.jpeg';
import BHWorking2 from './images/bh_working2.jpeg';

import './BuildHer.css';

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

class BuildHer extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
      <StickyContainer>

       <Grid fluid style={styles.grid}>
         <Row className="detail-row">
           <DetailHeader name="BuildHer" role="Organizer, Tech Team Developer"
           date="Sep 2016 - April 2018"
           skills="Web (HTML/CSS/JS), iOS (Swift), Event planning"
           tagline="Organizing Chicago's first student-run women's hackathon."/>
         </Row>

         <Row className="detail-row">
          <Col xs={12}>
            <img className="bh-logo" src={BHLogo}/>
          </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={6} s={5} style={styles.col}>
              <Caption side="caption-left" header="Building a hackathon"
               text=<p>In Fall 2017, I heard that two Northwestern students wanted to organize
               a hackathon where female, non-binary, and transgender individuals could gather for
               24 hours to build great things, regardless of their experience in computer programming.
               I was honored to join the team for the first two years of BuildHer Hackathon.</p>/>
           </Col>
           <Col xs={6} s={7} style={styles.col}>
            <img className="detail-image-right" src={BHOpportunity}/>
           </Col>
         </Row>

         <Row className="detail-row">
           <Col className="bh-app-col-1" xs={3} style={styles.col}>
              <img className="detail-image-tight" src={BHApp1}/>
           </Col>
           <Col className="bh-app-col-2" xs={3} style={styles.col}>
              <img className="detail-image-tight" src={BHApp2}/>
           </Col>
           <Col className="bh-app-col-3" xs={3} style={styles.col}>
              <img className="detail-image-tight" src={BHApp3}/>
           </Col>
           <Col className="bh-app-col-4" xs={3}>
             <Caption side="caption-tight" header="iOS App"
              text=<p>For the 2017 hackathon, I built a native iOS app in Swift for attendees to stay
              updated during the event.</p>/>
           </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={5}>
             <Caption side="caption-left" header="On the web"
              text=<p>In 2017 and 2018, I worked on building our website. This and the mobile app
              reflect not only the same content, but the BuildHer brand, including its jewel toned
              colors and clean interface</p>/>
           </Col>
           <Col xs={7} style={styles.col}>
              <img className="detail-image-right" src={BHWeb1}/>
           </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={6} style={styles.col}>
              <img className="detail-image-tight" src={BHWeb2}/>
           </Col>
           <Col xs={6} style={styles.col}>
              <img className="detail-image-tight" src={BHWeb3}/>
           </Col>
          </Row>

         <Row className="detail-row">
           <Col xs={6} style={styles.col}>
            <img className="detail-image-left" src={BHWorking1}/>
           </Col>
           <Col xs={6} style={styles.col}>
              <Caption side="caption-right" header="Creating great things"
               text=<p>Just as rewarding as the tech aspect of BuildHer was being involved in the
               event, seeing a diverse set of women connect and create impressive projects, from mobile apps
               that increase sexual health awareness in teens to voice-activated Alexa apps.<br/><br/>
               BuildHer is unique because it's beginner-focused. At the event, I taught a web dev workshop and
               helped mentor groups. Meeting women who had never coded before and seeing them later present
               the progress they made in 24 hours was extraordinary.</p>/>
           </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={6} style={styles.col}>
              <Caption side="caption-left" header="#BuildHerUp"
               text=<p>Tech continues to be a highly male-dominated field. From my own experience, working in
               an industry where I've been the only woman in a team and facing the preconceptions that come with
               the label of "woman in tech" can feel isolating.<br/><br/>Events like BuildHer are important because
               they create an environment where we can encourage confidence and growth, and support each
               other. People in minorities in any field shouldn't feel compelled to compete with each other to
               succeed; instead, find the opportunity to #BuildHerUp.</p>/>
           </Col>
           <Col xs={6} style={styles.col}>
            <img className="detail-image-right" src={BHWorking2}/>
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

export default BuildHer;
