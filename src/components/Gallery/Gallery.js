import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Gallery.scss';
import Card from '../Card/Card.js';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <ul className={styles.galleryList}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
  }
}

export default Gallery;