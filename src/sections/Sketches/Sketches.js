import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Modal from 'react-modal';

import iconShoe from './images/icon-shoe.png';
import iconFurniture from './images/icon-furniture.png';
import iconPet from './images/icon-pet.png';
import iconWearable from './images/icon-wearable.png';
import iconTent from './images/icon-tent.png';
import iconMod from './images/icon-mod.png';
import shoe1 from './images/Shoe1.png';
import shoe2 from './images/Shoe2.png';
import shoe3 from './images/Shoe3.png';
import shoe4 from './images/Shoe4.png';
import furniture1 from './images/Furniture1.png';
import furniture2 from './images/Furniture2.png';
import furniture3 from './images/Furniture3.png';
import furniture4 from './images/Furniture4.png';
import pet1 from './images/Pet1.png';
import pet2 from './images/Pet2.png';
import pet6 from './images/Pet6.png';
import wearable from './images/Wearable.png';
import tent from './images/Tent1.png';
import mod1 from './images/Mod1.png';
import mod2 from './images/Mod2.png';
import mod3 from './images/Mod3.png';

import './Sketches.css';

const customStyles = {
  content : {
    position: 'fixed',
    maxWidth: '105vh',
    maxHeight: '95vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  }
};

const captionShoe = <div>
<h3 className="modal-caption-title">footwear <span className="modal-caption-subtitle">for the future</span></h3>
<p className="modal-caption-body">This set of concept art explores futuristic designs drawing from monochrome minimalism,
geometric architectural structure, and the potential of negative space.</p></div>
const carouselShoe = <Carousel>
    <Carousel.Item><img src={shoe1} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={shoe2} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={shoe3} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={shoe4} className='modal-image'/></Carousel.Item></Carousel>

const captionPet = <div>
<h3 className="modal-caption-title">pet products <span className="modal-caption-subtitle">that belong</span></h3>
<p className="modal-caption-body">As a pet owner, I've found that the products you typically find often don't fit
too well with human furniture. I have a vision for the design of my home, so I created pet products that could mesh with
it. Human-centered meets pet-centered design.</p></div>
const carouselPet = <Carousel>
    <Carousel.Item><img src={pet1} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={pet2} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={pet6} className='modal-image'/></Carousel.Item></Carousel>

const captionFurniture = <div>
<h3 className="modal-caption-title">furniture <span className="modal-caption-subtitle">inspired by life</span></h3>
<p className="modal-caption-body">For furniture, I wanted to bring an organic feel inspired by sunlight and living things to
what I designed, and place it in direct contrast with harsher metals and synthetic household items.</p></div>
const carouselFurniture = <Carousel>
    <Carousel.Item><img src={furniture1} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={furniture2} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={furniture3} className='modal-image'/></Carousel.Item></Carousel>

const captionWearable = <div>
<h3 className="modal-caption-title">wearables <span className="modal-caption-subtitle">for the fashion-forward</span></h3>
<p className="modal-caption-body">Wearable technology is the next generation of tech hardware. This concept sketch explores
a futuristic jewelry-inspired wearable that can be worn as an accessory.</p></div>
const carouselWearable = <img src={wearable} className='modal-image'/>

const captionTent = <div>
<h3 className="modal-caption-title">camping <span className="modal-caption-subtitle">for non-campers</span></h3>
<p className="modal-caption-body">As someone who doesn't go camping, designing a camping experience was a challenge to come up
with a product that would convince me to go out and use it. Biosphere allows campers to enjoy being in nature while still being
separate from the outside. The sheer domed roof allows you to sleep under the stars, and the tent frame itself is easy to expand
to set up, or contract to store.</p></div>
const carouselTent = <img src={tent} className='modal-image'/>

const captionMod = <div>
<h3 className="modal-caption-title">mod <span className="modal-caption-subtitle">a new dance concept</span></h3>
<p className="modal-caption-body">This modular dance apparatus was designed for a client starting an innovative new dance company.
It combines removable components, which allow for an endless variety of acrobatic routines, with a pegboard base covered
in marley flooring.</p></div>
const carouselMod = <Carousel>
    <Carousel.Item><img src={mod1} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={mod2} className='modal-image'/></Carousel.Item>
    <Carousel.Item><img src={mod3} className='modal-image'/></Carousel.Item></Carousel>

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root')
Modal.setAppElement('body');
class Sketches extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      modalImage: 0,
      modalCaption: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(carousel, caption) {
    this.setState({modalIsOpen: true});
    this.modalCarousel = carousel
    this.modalCaption = caption;
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id={this.props.id} className="Sketches main-section">
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <div className="modal-container">
            {this.modalCarousel}
            {this.modalCaption}
          </div>
        </Modal>

        <header className="section-header">
          <p>...and a creative thinker.</p>
        </header>
        <div className="Sketches-body">
          <div>
            <a onClick={() => this.openModal(carouselShoe, captionShoe)}>
              <img src={iconShoe} className="Sketch-image" alt="shoe" />
            </a>
            <a onClick={() => this.openModal(carouselFurniture, captionFurniture)}>
              <img src={iconFurniture} className="Sketch-image" alt="furniture" />
            </a>
            <a onClick={() => this.openModal(carouselPet, captionPet)}>
              <img src={iconPet} className="Sketch-image" alt="pet" />
            </a>
          </div>
          <div>
            <a onClick={() => this.openModal(carouselWearable, captionWearable)}>
              <img src={iconWearable} className="Sketch-image" alt="wearable" />
            </a>
            <a onClick={() => this.openModal(carouselTent, captionTent)}>
              <img src={iconTent} className="Sketch-image" alt="tent" />
            </a>
            <a onClick={() => this.openModal(carouselMod, captionMod)}>
              <img src={iconMod} className="Sketch-image" alt="mod" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketches;
