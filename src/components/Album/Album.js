import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.scss';
import Destructor from '../Destructor/Destructor';
import CardInAlbum from '../CardInAlbum/CardInAlbum';

class Album extends React.Component {
  
  static propTypes = {
    content: PropTypes.any,
    allAlbums: PropTypes.array,
    cards: PropTypes.object,
    action: PropTypes.func,
  }

  state = {
    imgPosition: 5,
  }

  handleRemove() {
    console.log('>> Run /handleRemove/ from /Album/');
    console.log('this.props.content: ' + this.props.content);
    console.log('...removing...');
    this.props.action(this.props.content);
  }
  
  handleRollerUp() {
    this.setState(prevState => ({imgPosition: prevState.imgPosition + 110}));
  }

  handleRollerDown() {
    this.setState(prevState => ({imgPosition: prevState.imgPosition - 110}));
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER ALBUM ... ');
    console.log('All /Album/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('/Album/ state: ');
    console.log(this.state);
    return (
      <div className={styles.albumListElement}>
        <div className={styles.albumContainer}>
          <div className={styles.albumHeader}>
            <button 
              className={styles.albumButton} 
              onClick={() => this.handleRollerUp()}>
              ...PREV
            </button>
            <h3 className={styles.albumTitle}>{this.props.content.albumData.elemTitle}</h3>
            <button 
              className={styles.albumButton} 
              onClick={() => this.handleRollerDown()}>
              NEXT...
            </button>
          </div>
          <div className={styles.albumImgWrapper}>
            <div className={styles.albumImg} style={{top: `${this.state.imgPosition}px`}}>
              {/*album in Card is the same elemTitle in Album*/}
              {this.props.cards[this.props.content.albumData.elemTitle].map((el, index) => 
                el.album == this.props.content.albumData.elemTitle ?
                  (
                    <CardInAlbum
                      key={`postcardInAlbum-${index}`} 
                      content={el} 
                    />
                  ) 
                  : ''             
              )} 
            </div> 
          </div>
          
          {/*BUTTON RENDERED INSIDE OF DESTRUCTOR*/}
          <Destructor action={() => this.handleRemove()}/>
          
        </div>
      </div>
    );
  }
}

export default Album;

// super carousel to react!!
// https://www.npmjs.com/package/react-multi-carousel