import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import SBHero from './images/sb_mockup.png';
import SBHome from './images/sb_home.png';
import SBClass from './images/sb_class.PNG';

import './StruggleBus.css';

const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    col: {
        paddingLeft: 1,
        paddingRight: 1,
    },
    sb_image: {
      paddingTop: 60
    }
};

class StruggleBus extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
        <StickyContainer>
          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="StruggleBus" role="Developer" date="Apr - Jun 2018" skills="Ionic/Angular, JavaScript, Agile software development, User testing"
               tagline="Developing an app that makes the class registration process easier by helping college students
               find friends to take classes with."/>
            </Row>

            <Row className="detail-row">
              <Col xs={6} style={styles.col}>
                <Caption side="caption-left" header="Student support system"
                 text=<p>Students are often wary of taking classes alone, and have no way of knowing what their friends
                 or acquaintances who they don't talk to regularly will take.<br/><br/>StruggleBus is a cross-platform
                 app built in Ionic that aides class registration for the Northwestern community. It allows students to
                 browse available courses and find Facebook friends interested in the same ones, encouraging them to form
                 a support system before a class even starts.</p>/>
              </Col>
               <Col xs={6} style={styles.col}>
                 <img className="detail-image-right" src={SBHero}/>
               </Col>
            </Row>

            <Row className="detail-row">
               <Col xs={6}>
                 <img className="detail-image-left sb-image" src={SBHome}/>
                 <Caption side="caption-left" header="Viewing courses"
                  text=<p>Course data is pulled from CAESAR. Students can browse and add classes they're interested
                  in, as well as see which Facebook friends and other users are also interested.</p>/>
               </Col>
               <Col xs={6}>
                 <Caption side="caption-right" header="Facebook integration"
                  text=<p>The Facebook SDK allows students to log in with their Facebook accounts and see Facebook
                  friends who also use the app.</p>/>
                  <img className="detail-image-right" style={styles.sb_image} src={SBClass}/>
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

export default StruggleBus;
