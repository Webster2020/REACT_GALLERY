import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import Destructor from '../Destructor/Destructor';

class Card extends React.Component {
   
  static propTypes = {
    content: PropTypes.object,
    allCards: PropTypes.array,
    action: PropTypes.func,
  }
  
  handleRemove() {
    console.log('>> Run /handleRemove/ from /Card/');
    console.log('this.props.content: ' + this.props.content);
    console.log('...removing...');
    this.props.action(this.props.content);
  }
  
  render() {
    console.log('===============================');
    console.log('>> RENDER CARD ... ');
    console.log('All /Card/ props: ');
    console.log(this.props);
    console.log('/Card/ state: ');
    console.log(this.state);
    return (
      <div className={styles.cardListElement}>
        <div className={styles.cardContainer}>
          <h3>{this.props.content.cardData.elemTitle}</h3>
          <h4>ALBUM:{this.props.content.cardData.album}</h4>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src={this.props.content.cardData.elemUrl} alt='WRONG URL'></img>
            {/*'https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'*/}
          </div>
          <h4>{new Date().toLocaleDateString()}</h4>
          
          {/*BUTTON RENDERED INSIDE OF DESTRUCTOR*/}
          <Destructor action={() => this.handleRemove()}/>
          
        </div>
      </div>
    );
  }
}

export default Card;