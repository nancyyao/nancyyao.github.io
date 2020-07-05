import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profile from '../../files/disruptthedistrict.JPG';

import './Developer.css';

class Developer extends Component {
  render() {
    return (
      <div id={this.props.id} className="Developer main-section">
        <Container>
          <Row>
            <Col xs={12} md={6} className="developer-description">
              <p>While deep diving into the Facebook Live product stack,
              I've become deeply familiar with every stage of the product development cycle.</p>

              <p>Shipping features to millions of users around the world has
              strengthened my passion for creating products for the people who need them.
              I hope to continue finding ways to address human problems through innovation
              and ideation of products that are prioritized, above all, by the impact they
              can have on real lives.</p>

              <p>Check out my <a> resume </a>
              for some more structured info about me, or my design portfolio below!</p>
            </Col>

            <Col xs={12} md={6}>
              <Image src={profile} alt="profile" rounded fluid/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Developer;
