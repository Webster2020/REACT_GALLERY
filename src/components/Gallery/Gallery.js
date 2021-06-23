import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Gallery.scss';
import {dataStore} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Album from '../Album/Album';

class Gallery extends React.Component {

  state = {
    cards: [],
    albums: [], 
    cardsInAlbum: {}, 
    unicKeys: [...dataStore.gallery.keyGenerator],    
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

  //NEW METHODS 21.06.2021
  //METHOD: add new 'albumTitle' to array 'albums' (changes state)
  addAlbum(albumTitle) {
    console.log('>> Run /addAlbum/ from /Gallery/');
    console.log('albumTitle: ' + albumTitle);
    this.setState(prevState => (
      {
        albums: [
          ...prevState.albums,
          {
            albumTitle, 
            albumId: prevState.unicKeys.pop(),
          },
        ],       
      }
    ));
  }
  
  //METHOD: remove 'albumTitle' from array 'albums' (changes state)
  remAlbum(albumTitle) {
    console.log('>> Run /remAlbum/ from /Gallery/');
    console.log('albumTitle: ' + albumTitle);
    this.setState(prevState => (
      prevState.albums.splice(prevState.albums.indexOf(albumTitle), 1)
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
    console.log('2) state.albums: ');
    console.log(this.state.albums);
    return (
      <div className={styles.galleryContainer}>

        <h2>GALLERY</h2>

        ADD CARD
        <Creator action={(cardContent, url) => this.addCard(cardContent, url)}/>
        
        ADD ALBUM
        <Creator action={(albumTitle) => this.addAlbum(albumTitle)} albumsList={this.state.albums}/>

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
        
        <div className={styles.tempContainer}>
          {this.state.albums.map((el, index) => {
            return (
              <Album 
                key={index}
                content={el} 
                allAlbums={this.state.albums}
                action={(albumTitle) => this.remAlbum(albumTitle)} 
              />
            );
          })}       
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

  -album musi miec id (uzyc np jakiego countera), card podczas tworzenia musi sprawdzac czy id cardAlbum i id album jest takie samo
  -dodac do creatora input dropdown (ale wyswietlany tylko dla creatora cart ale dra kreatora albumu juz nie !! - przemyslec jak to zrobic) do wybierania albumu podczas dodawania karty, carta musi dostawac albumId takie samo jak ma album (powiazanie jednego z drugim)
  -input ten musi aktualizowac sie przy kazdym dodaniu nowego albumu
  -carta bedzie renderowala sie w sekcji 'ostatnio dodane' oraz wewnatrz danego albumu, do ktorego zostala dodana
  -po wcisnieciu na dany album musi otwierac sie nowa strona (uzyc react-router) z cartami nalezacymi do tego albumu
  -bedzie trzeba dodac jakis header z linkiem do strony glownej
  -uzyc caruseli z bootstrapa dla przewijania zdjec na podgladzie albumu
  -uzyc caruseli reacta (link gdzies w kodzie do npm'a) do przewijania albumów na stronie głownej oraz cart po wejsciu w dany album
  -pomyslec jak dodac mozliwosc dodawania plikow ze zdjeicem oprócz linku url

*/