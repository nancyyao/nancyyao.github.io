import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mail from '../../files/social/logo_gmail_32px.png';
import linkedin from '../../files/social/In-2C-34px-TM.png';
import profile from '../../files/grad.png';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id={this.props.id} className="Landing main-section">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <Image src={profile} alt="profile" rounded fluid />
            </Col>

            <Col xs={12} md={7} className="landing-description">
              <h1 className="landing-header">Hi, I'm Nancy.</h1>
              <p>My name is Nancy Yao. I like to work at the intersection of tech and product design
              and development, and am always looking for opportunities to bring ideas to life.</p>

              <p>I graduated from Northwestern University in Dec 2018 with a
              Bachelor's in Computer Science and certificate in Design.
              Since then, I've been exploring the tech product space as a mobile engineer
              on Live Videos at Facebook.
              </p>

               <p>I'm always excited to connect with new people.
              Reach out if you'd like to talk!</p>
              <div className="social-section">
                <a href="mailto:nancy.yao2@gmail.com">
                  <img className="social" alt="Email" src={mail}/>
                </a>
                <a className="social" href="https://www.linkedin.com/in/nancyyao2019/">
                  <img src={linkedin} alt="LinkedIn"/>
                </a>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

    );
  }
}

export default Landing;
