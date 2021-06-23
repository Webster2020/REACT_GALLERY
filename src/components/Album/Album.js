import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.scss';
import Destructor from '../Destructor/Destructor';

class Album extends React.Component {
  
  static propTypes = {
    content: PropTypes.any,
    allAlbums: PropTypes.array,
    action: PropTypes.func,
  }

  handleRemove() {
    console.log('>> Run /handleRemove/ from /CAlbum/');
    console.log('this.props.content: ' + this.props.content);
    console.log('...removing...');
    this.props.action(this.props.content);
  }
  
  render() {
    return (
      <li className={styles.cardListElement}>
        <div className={styles.cardContainer}>
          <h3>{this.props.content.albumTitle.elemTitle}</h3>
          <div className={styles.cardImgWrapper}>
            <img className={styles.cardImg} src='https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='WRONG URL'></img>
          </div>
          <h4>{new Date().toLocaleDateString()}</h4>
          
          {/*BUTTON RENDERED INSIDE OF DESTRUCTOR*/}
          <Destructor 
            action={() => this.handleRemove()}
          />
          
        </div>
      </li>
    );
  }
}

export default Album;

// super carousel to react!!
// https://www.npmjs.com/package/react-multi-carousel