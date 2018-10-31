import React, { Component } from 'react';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';
import profile from '../../files/profile.png';
import mail from './social/logo_gmail_32px.png';
import github from './social/GitHub-Mark-32px.png';
import linkedin from './social/In-2C-34px-TM.png';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id={this.props.id} className="Contact main-section">
        <div className="Contact-body main-section">
          <Grid>
            <Row>
              <Col xs={4}>
                <Image className="about-me-image" src={profile} alt="profile" responsive/>
              </Col>

              <Col xs={8}>
                <h1 className="about-me-header">about me</h1>
                <p className="about-me-body">I'm Nancy, a senior at Northwestern University
                pursuing my Bachelor's in Computer Science with a certificate in
                Design.</p>
                <p className="about-me-body">Recently I've been coding cool things at
                Instagram, doing HCI research at CollabLab, and co-founding the
                Northwestern Academy of MakerGirl, which gives me an excuse to use 3D
                printers while teaching girls about STEM!</p>
                <a href="mailto:nancyyao2019@u.northwestern.edu">
                  <img className="social" src={mail}/>
                </a>
                <a className="social" href="https://github.com/nancyyao">
                  <img src={github}/>
                </a>
                <a className="social" href="https://www.linkedin.com/in/nancyyao2019/">
                  <img src={linkedin}/>
                </a>
              </Col>
            </Row>
          </Grid>

        </div>

        <div class="copyright-section">
          <p className="copyright">&copy; 2018 Nancy Yao</p>
        </div>
      </div>
    );
  }
}

export default Contact;
