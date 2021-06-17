import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Gallery.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';

class Gallery extends React.Component {

  state = {
    cards: [],
  }

  //METHOD: add new 'cardContent' to array 'cards' (changes state)
  addCard(cardContent) {
    console.log('>> Run /addCard/ from /Gallery/');
    console.log('cardContent: ' + cardContent);
    this.setState(prevState => (
      //prevState.temps.push(tempContent)
      {
        cards: [...prevState.cards, cardContent],
      }
    ));
  }

  //METHOD: remove 'cardContent' from array 'cards' (changes state)
  remCard(cardContent) {
    console.log('>> Run /remCard/ from /Gallery/');
    console.log('cardContent: ' + cardContent);
    this.setState(prevState => (
      prevState.cards.splice(prevState.cards.indexOf(cardContent), 1)
    ));
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER GALLERY ... ');
    console.log('All /Gallery/ props: ');
    console.log(this.props);
    console.log('/Gallery/ state: ');
    console.log(this.state);
    console.log('1) state.cards: ');
    console.log(this.state.cards);
    return (
      <div className={styles.galleryContainer}>

        <h2>GALLERY</h2>

        <Creator action={(cardContent, url) => this.addCard(cardContent, url)}/>
        
        <div className={styles.tempContainer}>
          {/*allTemps - props, which get state with array of all temp (every created temp is inside it)*/}
          {this.state.cards.map((el, index) => 
            <Card
              key={index} 
              content={el} 
              allCards={this.state.cards} 
              action={(cardContent) => this.remCard(cardContent) 
              }
            />
          )} 
        </div>  
        
      </div>
    );
  }
}

export default Gallery;

/*
== INFO: ==
- <Gallery> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- <Gallery> gets any props from 'parent'; 
- <Gallery> has own 'state.temps: []' and 'state.cards: []'; 
- <Gallery> has methods: 'addTemp(tempContent)', 'remTemp(tempContent)'; 
- <Gallery> pass on its method 'addTemp' to [<Creator> as props 'action'];
- <Gallery> pass on its state 'temps' to [<Temp> as props 'key', 'content', 'allTemps'];
- <Gallery> pass on its method 'remTemp' to [<Temp> as prop 'action'];

== TODO: ==
- ?
*/