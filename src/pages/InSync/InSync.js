import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../components/Navbar/Navbar';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Caption from '../../components/Caption/Caption';
import BackButton from '../../components/BackButton/BackButton';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';

import ISHero from './images/insync_hero.png';
import IS1 from './images/insync1.png';
import IS2 from './images/insync2.png';
import IS3 from './images/insync3.png';

import './InSync.css';

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

class InSync extends Component {
  render() {
    return (
      <div id={this.props.id} className="detail-page">
      <StickyContainer>
          <Grid fluid styles={styles.grid}>
            <Row className="detail-row">
              <DetailHeader name="InSync" role="Developer" date="Jun - Aug 2016"
              tagline="Bringing collaboration and fun to your music streaming experience."/>
            </Row>

             <Row className="detail-row">
             <Col xs={6} style={styles.col}>
               <Caption side="caption-left caption-top" header="Social streaming"
                text=<p>Music is an integral part of any group activity. Why should one person have all
                the responsibility?<br/><br/>InSync is a collaborative playlist-building and music-streaming
                iOS app. It allows a group to crowdsource DJ-ing.<br/><br/>Users log in with Spotify to create
                or join a "party," a group of friends who build a queue together through votes and contribute
                their phones' speakers to play music simultaneously.</p>/>
             </Col>
             <Col xs={5} style={styles.col}>
               <img className="detail-image-right" src={ISHero}/>
             </Col>
            </Row>



            <Row className="detail-row">
              <Col className="is-col-1" xs={4} style={styles.col}>
                <img className="detail-image-left detail-image-tight" src={IS1}/>
              </Col>

              <Col className="is-col-2" xs={4} style={styles.col}>
                <Caption side="caption-tight" header="Collaborative queue"
                 text=<p>Spotify SDK integration allows users to add any song on Spotify to the queue.
                 Users can upvote or downvote to change the queue order in real-time.</p>/>
                <img className="detail-image-tight" src={IS2}/>
                <Caption side="caption-tight" header="Streaming together"
                 text=<p>Apple's Multipeer Connectivity framework links all phones in the party network,
                 allowing them to play music simulatenously, creating the effect of multiple speakers.</p>/>
              </Col>

              <Col className="is-col-3" xs={4} style={styles.col}>
                <Caption side="caption-tight" header="Stylish playback"
                 text=<p>The playback screen features a clean UI displaying the album cover with a subtle
                 progress indicator and control icons. The party name is customizable by the host, and
                 any users can broadcast announcements.</p>/>
                 <img className="detail-image-tight" src={IS3}/>
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

export default InSync;
