import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.scss';
import Destructor from '../Destructor/Destructor';
import CardInAlbum from '../CardInAlbum/CardInAlbum';
import {Link} from 'react-router-dom';

// {/* <Link to={`/albumopen/${id}`} className={styles.link}></Link> */}

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

  showAlert() {
    alert('CLICK');
  }

  handleShowAlbum() {
    alert('SHOW ALBUM');
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
      <Link to={`/album/${this.props.content.albumData.elemTitle}`} className={styles.link}>
        <div className={styles.albumListElement}>
          <div className={styles.albumContainer}>
            <div className={styles.albumHeader}>
              <button 
                className={`${styles.albumButton} ${styles.albumButtonUp}`} 
                onClick={() => this.handleRollerUp()}>             
              </button>
              <h3 className={styles.albumTitle}>{this.props.content.albumData.elemTitle}</h3>
              <button 
                className={`${styles.albumButton} ${styles.albumButtonDown}`} 
                onClick={() => this.handleRollerDown()}>
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
                        action={() => this.showAlert()}
                      />
                    ) 
                    : ''             
                )} 
              </div> 
            </div>
            
            <div className={styles.ablumButtonWrapper}>
              <Destructor buttonName='OPEN ALBUM' action={() => this.handleShowAlbum()}/>          
              <Destructor buttonName='REMOVE' action={() => this.handleRemove()}/>
            </div>
            
          </div>
        </div>
      </Link>
    );
  }
}

export default Album;

// super carousel to react!!
// https://www.npmjs.com/package/react-multi-carousel