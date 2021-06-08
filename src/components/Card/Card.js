import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <li className={styles.cardListElement}>
        <div className={styles.cardContainer}>
          <h3>Single card</h3>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src='https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
          </div>
          <h4>Date</h4>
        </div>
      </li>
    );
  }
}

export default Card;