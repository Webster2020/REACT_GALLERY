import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import Destructor from '../Destructor/Destructor';
import ModalPicture from '../ModalPicture/ModalPicture';

class Card extends React.Component {
   
  static propTypes = {
    content: PropTypes.object,
    allCards: PropTypes.array,
    action: PropTypes.func,
  }
  
  state = {
    modalVisible: false,
  }

  handleRemove() {
    console.log('>> Run /handleRemove/ from /Card/');
    console.log('this.props.content: ' + this.props.content);
    console.log('...removing...');
    this.props.action(this.props.content);
  }

  handleShowModal() {
    console.log('>> Run /handleShowModal/ from /Card/');
    this.setState({
      modalVisible: true,
    });
  }

  handleCloseModal() {
    console.log('>> Run /handleCloseModal/ from /Card/');
    this.setState({
      modalVisible: false,
    });
  }
  
  render() {
    console.log('===============================');
    console.log('>> RENDER CARD ... ');
    console.log('All /Card/ props: ');
    console.log(this.props);
    console.log('/Card/ state: ');
    console.log(this.state);
    return (
      <div>
        <a className={styles.cardContainerButton} onClick={() => this.handleShowModal()}>
          <div className={styles.cardListElement}>
            <div className={styles.cardContainer}>
              <h3 className={styles.cardTitle}>{this.props.content.cardData.elemTitle}</h3>
              <h4 className={styles.cardText}>ALBUM: {this.props.content.cardData.album}</h4>
              <div className={styles.cardImgWrapper}>
                <img className={styles.cardImg} src={this.props.content.cardData.elemUrl} alt='YOUR IMAGE'></img>
              </div>
              <h4 className={styles.cardText}>{new Date().toLocaleDateString()}</h4>
              
              {/*BUTTON RENDERED INSIDE OF DESTRUCTOR*/}
              <Destructor action={() => this.handleRemove()}/>
              
            </div>
          </div>
        </a>
        <ModalPicture picture={this.props.content.cardData.elemUrl} modalVisible={this.state.modalVisible} action={() => this.handleCloseModal()}/>
      </div>

    );
  }
}

export default Card;