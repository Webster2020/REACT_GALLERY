import React from 'react';
import styles from './App.scss';
import {dataStore} from '../../data/dataStore.js';
import AppHeader from '../AppHeader/AppHeader.js';
import Gallery from '../Gallery/Gallery.js';

class App extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <AppHeader 
          title={dataStore.title.titleText}
          subtitle={dataStore.title.subtitleText}
          background={dataStore.appHeader.bcgImageAlt4}
        />
        <Gallery />
      </div>
    );  
  }
}

export default App;