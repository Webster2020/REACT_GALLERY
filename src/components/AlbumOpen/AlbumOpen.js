import React from 'react';
import styles from './AlbumOpen.scss';
import MainLayout from '../MainLayout/MainLayout';

class AlbumOpen extends React.Component {

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