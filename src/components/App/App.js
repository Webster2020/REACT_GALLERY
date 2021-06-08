import React from 'react';
import styles from './App.scss';
import {exampleData} from '../../data/dataStore.js';

class App extends React.Component {
  render() {
    return (
      <div className = {styles.title}>
        <h1>My first React app</h1>
        <h3>{exampleData.title}</h3>
        <h4>{exampleData.currentYear}</h4>
      </div>
    );
  }
}

export default App;