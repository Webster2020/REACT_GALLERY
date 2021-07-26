import React from 'react';
import styles from './Gallery.scss';
import {dataStore} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Album from '../Album/Album';

class Gallery extends React.Component {

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

  addCard(cardData) {
    console.log('>> Run /addCard/ from /Gallery/');
    console.log('cardData: ' + cardData);
    this.setState(prevState => (
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
            cardData,
          ],
        },
      }
    ));
  }

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
  
  remAlbum(albumData, cardsInAlbum) {
    console.log('>> Run /remAlbum/ from /Gallery/');
    console.log('albumData: ');
    console.log(albumData);
    console.log(albumData.albumData.elemTitle);
    console.log('cardsInAlbum: ');
    console.log(cardsInAlbum);
    cardsInAlbum[albumData.albumData.elemTitle].forEach(el => console.log(el.elemTitle));
    console.log('cards: ');
    console.log(this.state.cards);
    this.setState(prevState => (
      prevState.albums.splice(prevState.albums.indexOf(albumData), 1)
    ));
    this.setState(prevState => (
      prevState.cardsInAlbum[albumData.albumData.elemTitle] = []
    ));
    cardsInAlbum[albumData.albumData.elemTitle].forEach(elAlbum => {
      this.state.cards.forEach(elCard => {
        if (elAlbum.elemTitle === elCard.cardData.elemTitle) {
          this.setState(prevState => (
            prevState.cards.splice(prevState.cards.indexOf(elCard), 1)
          ));
        }
      });
    });
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

        <h2 className={styles.galleryTitle}>ADD POSTCARD</h2>
        <Creator type='card' action={(cardData) => this.addCard(cardData)} albumsList={this.state.albums}/>

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
                  albumsList={this.state.albums} 
                  action={(cardData) => this.remCard(cardData)}             
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
           
        <h2 className={styles.galleryTitle}>ADD ALBUM</h2>
        <Creator type='album' action={(albumData) => this.addAlbum(albumData)} albumsList={this.state.albums}/>

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
                    cardsInAlbum={this.state.cardsInAlbum}
                    action={(albumData, cardsInAlbum) => this.remAlbum(albumData, cardsInAlbum)} 
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