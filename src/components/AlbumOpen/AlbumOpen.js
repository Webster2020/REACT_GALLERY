import React from 'react';
//import PropTypes from 'prop-types';
import styles from './AlbumOpen.scss';
import MainLayout from '../MainLayout/MainLayout';

class AlbumOpen extends React.Component {
  // static propTypes = {
  //   background: PropTypes.string,
  //   title: PropTypes.string,
  //   subtitle: PropTypes.string,
  // }

  render() {
    console.log('===============================');
    console.log('>> RENDER ALBUMOPEN ... ');
    console.log('All /AlbumOpen/ props: ');
    console.log(this.props);
    return (
      <MainLayout>
        <article className={styles.albumOpenContainer}>
          <h2>ALBUM OPEN</h2>
        </article>
      </MainLayout>
    );  
  }
}

export default AlbumOpen;