import React, {Component} from 'react';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')
   
class Map extends Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }
     
    render() {

        return(
        <div className="map">
        <a href="#" onClick={this.openModal}>Show Google Map</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <iframe id="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9617133792917!2d31.457535484484335!3d30.00925572718807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823e954560277%3A0x47b2b61b97a45f4c!2sAddicta!5e0!3m2!1sar!2seg!4v1562578041077!5m2!1sar!2seg" frameborder="0" title="map" allowfullscreen></iframe>
        </Modal>
      </div>
        ); 
    }
} 

export default Map;