import React from 'react';
//import styles from './Home.scss';
import {dataStore} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';
//import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery.js';
import MainLayout from '../MainLayout/MainLayout';

class Home extends React.Component {
  render() {
    return (
      <MainLayout>

        <Hero 
          title={dataStore.title.titleText}
          subtitle={dataStore.title.subtitleText}
          background={dataStore.appHeader.bcgImageAlt4}
        />
        <Gallery />
      </MainLayout>
    );  
  }
}

export default Home;