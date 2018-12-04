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
               date="Jan 2018 - Present" skills="Leadership, Marketing/comms, Event planning, Team management, 3D printing"
               tagline="Starting a chapter of a non-profit that has educated over 3,000 girls in STEM through
               3D printing and other technologies."/>
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
                  text=<p>Founded in 2014 at University of Illinois Urbana Champaign, <a href="https://makergirl.us/">MakerGirl</a> is a non-profit
                  startup that aims to educated girls ages 7-10 in STEM and foster passion and enthusiasm for
                  innovation and design.<br/><br/>At each themed session, girls learn about 3D printing and then
                  design and create their own 3D object to take home.</p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={6} style={styles.col}>
                <Caption side="caption-left" header="Starting a chapter"
                 text=<p>In January 2018, I connected with Elizabeth Engele, co-founder of MakerGirl, to discuss
                 expanding their reach to the Evanston/Chicago area.<br/><br/>With the help of my co-founders,
                 <a href="http://www.rika-ko.com/"> Rika Ko</a> and Amanda Mirande, we began meeting with the UIUC team and organizing our own <b>Northwestern
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
                 <Caption side="caption-right" header="Accomplishments"
                  text=<p>&bull; Built a network from scratch of Evanston and surrounding
                  Chicago area elementary schools, public libraries, and parent associations<br/><br/>
                  &bull; Organized four successful sessions in 2018<br/><br/>
                  &bull; Laid the foundation of the Northwestern Academy, establishing session
                  logistics and building a team of 12 female university students<br/><br/>
                  &bull; Partnered with established organizations, such as the Girl Scouts of Greater
                  Chicago and Northwest Indiana and Codeverse, and businesses such as Fast Radius
                  </p>/>
               </Col>
            </Row>

            <Row className="detail-row">
              <Col xs={5} style={styles.col}>
                <Caption side="caption-left" header="Teaching the next generation"
                 text=<p>Each bimonthly session brings in up to 12 girls. We teach design thinking
                 by allowing the girls to brainstorm their own designs for 3D prints.
                 Mentors assist the girls with implementing these designs in TinkerCAD, a kid-friendly
                 solid modeling app. The girls get to watch their ideas come to life in the 3D printers
                 and take them home.<br/><br/>
                 MakerGirl and the NU academy are growing faster than ever, and I am so proud
                 to be a part in this organization. As we increase the numbers of
                 our team and our connections with the local community, I see only great things in our future.</p>/>
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
