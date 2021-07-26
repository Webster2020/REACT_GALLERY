import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardInAlbum.scss';

class CardInAlbum extends React.Component {
   
  static propTypes = {
    content: PropTypes.object,
    allCards: PropTypes.array,
    action: PropTypes.func,
  }
  
  render() {
    console.log('===============================');
    console.log('>> RENDER CARD ... ');
    console.log('All /Card/ props: ');
    console.log(this.props);
    console.log('/Card/ state: ');
    console.log(this.state);
    return (
      <button className={styles.cardListElement}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src={this.props.content.elemUrl} alt={this.props.content.elemTitle}></img>
          </div>
          <h4 className={styles.cardText}>{new Date().toLocaleDateString()}</h4>        
        </div>
      </button>
    );
  }
}

export default CardInAlbum;