import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Gallery.scss';
import {dataStore} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Album from '../Album/Album';

class Gallery extends React.Component {

  // NO PROPS FROM APP

  state = {
    cards: [],
    albums: [], 
    cardsInAlbum: {
      other: [],
    }, 
    unicKeys: [...dataStore.gallery.keyGenerator],
    cardPosition: 0, 
    albumPosition: 0,   
  }

  //METHOD: add new 'cardData' to array 'cards' (changes state)
  addCard(cardData) {
    console.log('>> Run /addCard/ from /Gallery/');
    console.log('cardData: ' + cardData);
    this.setState(prevState => (
      //prevState.temps.push(tempData)
      {
        cards: [
          ...prevState.cards,
          {
            cardData,
            cardId: prevState.unicKeys.pop(),
          }, 
        ],
        cardsInAlbum: {
          ...prevState.cardsInAlbum,
          [cardData.album]: [
            ...prevState.cardsInAlbum[cardData.album],
            cardData, //think how to add here cardId 03.07.2021
          ],
        },
      }
    ));
  }

  //METHOD: remove 'cardData' from array 'cards' (changes state)
  remCard(cardData) {
    console.log('>> Run /remCard/ from /Gallery/');
    console.log('cardData: ');
    console.log(cardData.cardData);
    console.log(cardData.cardData.album);
    this.setState(prevState => (
      prevState.cards.splice(prevState.cards.indexOf(cardData), 1)
    ));
    this.setState(prevState => (
      prevState.cardsInAlbum[cardData.cardData.album].splice(prevState.cardsInAlbum[cardData.cardData.album].indexOf(cardData.cardData), 1)
    ));
  }

  //NEW METHODS 21.06.2021
  //METHOD: add new 'albumData' to array 'albums' (changes state)
  addAlbum(albumData) {
    console.log('>> Run /addAlbum/ from /Gallery/');
    console.log('albumData: ' + albumData);
    this.setState(prevState => (
      {
        albums: [
          ...prevState.albums,
          {
            albumData, 
            albumId: prevState.unicKeys.pop(),
          },
        ], 
        cardsInAlbum: {
          ...prevState.cardsInAlbum,
          [albumData.elemTitle]: [],
        },      
      }
    ));
  }
  
  //METHOD: remove 'albumData' from array 'albums' (changes state)
  remAlbum(albumData) {
    console.log('>> Run /remAlbum/ from /Gallery/');
    console.log('albumData: ' + albumData);
    this.setState(prevState => (
      prevState.albums.splice(prevState.albums.indexOf(albumData), 1)
    ));
  }

  handleRollerCardLeft() {
    this.setState(prevState => ({cardPosition: prevState.cardPosition + 200}));
  }

  handleRollerCardRight() {
    this.setState(prevState => ({cardPosition: prevState.cardPosition - 200}));
  }

  handleRollerAlbumLeft() {
    this.setState(prevState => ({albumPosition: prevState.albumPosition + 200}));
  }

  handleRollerAlbumRight() {
    this.setState(prevState => ({albumPosition: prevState.albumPosition - 200}));
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER GALLERY ... ');
    console.log('All /Gallery/ props: ');
    console.log(this.props);
    console.log('/Gallery/ state: ');
    console.log(this.state);
    return (

      <div className={styles.galleryContainer}>

        <h2 className={styles.galleryTitle}>GALLERY</h2>

        ADD POSTCARD
        <Creator type='card' action={(cardData) => this.addCard(cardData)} albumsList={this.state.albums}/>
        
        ADD ALBUM
        <Creator type='album' action={(albumData) => this.addAlbum(albumData)} albumsList={this.state.albums}/>

        <div className={styles.galleryContainerInner}>

          <button 
            className={styles.lrButton} 
            onClick={() => this.handleRollerCardLeft()}>
            &lt;
          </button>

          <div className={styles.galleryWrapper}>

            <div 
              className={styles.galleryInnerCard} 
              style={{left: `${this.state.cardPosition}px`}}
            >

              {this.state.cards.map((el) => 
                <Card
                  key={`postcard-${el.cardId}`} 
                  content={el} 
                  allCards={this.state.cards} 
                  action={(cardData) => this.remCard(cardData) 
                  }
                />
              )}

            </div> 

          </div> 

          <button 
            className={styles.lrButton} 
            onClick={() => this.handleRollerCardRight()}>
            &gt;
          </button>
          
        </div> 
        
        <div className={styles.galleryContainerInner}>
          
          <button 
            className={styles.lrButton} 
            onClick={() => this.handleRollerAlbumLeft()}>
            &lt;
          </button>

          <div className={styles.galleryWrapper}>

            <div 
              className={styles.galleryInnerAlbum}
              style={{left: `${this.state.albumPosition}px`}}
            >
                
              {this.state.albums.map((el) => {
                return (
                  <Album 
                    key={`album-${el.albumId}`} 
                    content={el} 
                    allAlbums={this.state.albums}
                    cards={this.state.cardsInAlbum}
                    action={(albumData) => this.remAlbum(albumData)} 
                  />
                );
              })}  

            </div>

          </div>     
        
          <button 
            className={styles.lrButton} 
            onClick={() => this.handleRollerAlbumRight()}>
            &gt;
          </button>

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