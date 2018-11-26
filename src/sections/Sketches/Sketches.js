import React, { Component } from 'react';
import { Bootstrap, Grid, Row, Col, Image } from 'react-bootstrap';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import iconShoe from './images/icon-shoe.png';
import iconFurniture from './images/icon-furniture.png';
import iconPet from './images/icon-pet.png';
import iconWearable from './images/icon-wearable.png';
import iconTent from './images/icon-tent.png';
import iconMod from './images/icon-mod.png';
import shoe from './images/Shoe1.png';
import furniture from './images/Furniture1.png';
import pet from './images/Pet1.png';
import wearable from './images/Wearable.png';
import tent from './images/Tent1.png';
import mod from './images/Mod1.png';

import './Sketches.css';

const customStyles = {
  content : {
    position: 'fixed',
    // overflow: 'hidden'
    // height: '90vh',
    // maxWidth: '100%'
    height: '200px',

    // top                   : '50%',
    // left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-50%',
    // transform             : 'translate(-50%, -50%)'
  }
};

const captionShoe = "footwear for the future \
This set of concept art explores futuristic designs drawing from monochrome minimalism, \
geometric architectural structure, and the potential of negative space."
// Modal.setAppElement('#root')
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

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

  openModal(image,caption) {
    this.setState({modalIsOpen: true});
    this.modalImage = image;
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
          onRequestClose={this.closeModal}
          contentLabel="Example Modal">
          <div className="modal-container">
            <Carousel className="modal-carousel">
              <div>
                  <img src={shoe} className="modal-image"/>
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src={shoe} />
              </div>
              <div>
                  <img src={shoe} />
              </div>
            </Carousel>
          </div>
        </Modal>

        <header className="section-header">
          <p>...and a designer.</p>
        </header>
        <div className="Sketches-body">
          <div>
            <a onClick={() => this.openModal(shoe, captionShoe)}>
              <img src={iconShoe} className="Sketch-image" alt="shoe" />
            </a>
            <a onClick={() => this.openModal(furniture)}>
              <img src={iconFurniture} className="Sketch-image" alt="furniture" />
            </a>
            <a onClick={() => this.openModal(pet)}>
              <img src={iconPet} className="Sketch-image" alt="pet" />
            </a>
          </div>
          <div>
            <a onClick={() => this.openModal(wearable)}>
              <img src={iconWearable} className="Sketch-image" alt="wearable" />
            </a>
            <a onClick={() => this.openModal(tent)}>
              <img src={iconTent} className="Sketch-image" alt="tent" />
            </a>
            <a onClick={() => this.openModal(mod)}>
              <img src={iconMod} className="Sketch-image" alt="mod" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketches;
