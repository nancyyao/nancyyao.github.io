import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import portfolio from '../../files/portfolio.pdf';
import portfolio_1 from '../../files/portfolio/portfolio_1.png';
import portfolio_2 from '../../files/portfolio/portfolio_2.png';
import portfolio_3 from '../../files/portfolio/portfolio_3.png';
import portfolio_4 from '../../files/portfolio/portfolio_4.png';
import portfolio_5 from '../../files/portfolio/portfolio_5.png';
import portfolio_6 from '../../files/portfolio/portfolio_6.png';
import portfolio_7 from '../../files/portfolio/portfolio_7.png';
import portfolio_8 from '../../files/portfolio/portfolio_8.png';
import portfolio_9 from '../../files/portfolio/portfolio_9.png';
import portfolio_10 from '../../files/portfolio/portfolio_10.png';
import portfolio_11 from '../../files/portfolio/portfolio_11.png';
import portfolio_12 from '../../files/portfolio/portfolio_12.png';
import portfolio_13 from '../../files/portfolio/portfolio_13.png';
import portfolio_14 from '../../files/portfolio/portfolio_14.png';
import portfolio_15 from '../../files/portfolio/portfolio_15.png';

import './Design.css';

class Design extends Component {
  render() {
    return (
      <div id={this.props.id} className="Design main-section">
      <p>I love finding opportunities to apply design thinking to products.
      Here's a sample of some fun projects I've worked on! (PDF download <a href={portfolio}> here</a>.)
      </p>
        <Carousel className='portfolio-carousel' dataInterval="false">
            <Carousel.Item><img src={portfolio_1} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_2} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_3} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_4} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_5} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_6} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_7} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_8} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_9} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_10} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_11} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_12} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_13} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_14} className='portfolio-carousel-item'/></Carousel.Item>
            <Carousel.Item><img src={portfolio_15} className='portfolio-carousel-item'/></Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Design;
