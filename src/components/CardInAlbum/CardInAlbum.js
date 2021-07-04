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
      <div className={styles.cardListElement}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src={this.props.content.elemUrl} alt='WRONG URL'></img>
            {/*'https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'*/}
          </div>
          <h4>{new Date().toLocaleDateString()}</h4>        
        </div>
      </div>
    );
  }
}

export default CardInAlbum;