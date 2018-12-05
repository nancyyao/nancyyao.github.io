import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import NavBar from '../../components/Navbar/Navbar';

import CLSetup from './images/collablab_setup.jpeg';
import CLMulti from './images/collablab_multi_full.png';
import CLChi from'./images/collablab_chi.jpg';

import './CollabLab.css';

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
          <DetailHeader name="CollabLab" role="Research Assistant"
          date="Oct 2016 - Jun 2018" skills="C#, C++, Research, User testing"
          tagline="Using eye-tracking visualizations to design systems that augment remote collaboration and learning."/>
        </Row>

         <Row className="detail-row">
           <Col xs={6} s={5} style={styles.col}>
              <Caption side="caption-left" header="Eye-tracking and education"
               text=<p>As a research assistant at Northwestern's CollabLab, I designed systems exploring
               different gaze visualizations, from collaborative games to remote learning environments.<br/><br/>
               The image to the right shows a setup from one experiment we ran, involving four participants in a
               pseudo-remote environment with four locally networked machines and Tobii 4C eyetrackers.</p>/>
           </Col>
           <Col xs={6} s={7} style={styles.col}>
            <img className="detail-image-right" src={CLSetup}/>
           </Col>
         </Row>

         <Row className="detail-row">
           <Col xs={6} s={7} style={styles.col}>
              <img className="detail-image-left" src={CLMulti}/>
              <img className="detail-image-left" src={CLChi}/>
           </Col>
           <Col xs={6} s={5} style={styles.col}>
             <Caption side="caption-right" header="Remote instruction for multiple students"
              text=<p>While research has been conducted studying the use of gaze visualizations in remote pairs,
              little has been done regarding interactions involving more people.<br/><br/>One project I worked
              on involved investigating the use of eye-tracking visualizations (left) for a teacher to monitor
              students in a remote teaching situation, tested using a C++ coding lesson and activity.
              I presented this work in a poster at CHI 2018 in Montreal.</p>/>
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
