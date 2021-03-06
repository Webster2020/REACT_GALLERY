import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.scss';
import Destructor from '../Destructor/Destructor';
import CardInAlbum from '../CardInAlbum/CardInAlbum';
import ModalAlbum from '../ModalAlbum/ModalAlbum';

class Album extends React.Component {
  
  static propTypes = {
    content: PropTypes.any,
    allAlbums: PropTypes.array,
    cardsInAlbum: PropTypes.object,
    action: PropTypes.func,
  }

  state = {
    imgPosition: 5,
    modalVisible: false,
  }

  handleRemove() {
    console.log('>> Run /handleRemove/ from /Album/');
    console.log('this.props.content: ' + this.props.content);
    console.log(this.props.content);
    console.log('this.props.cardsInAlbum: ' + this.props.cardsInAlbum);
    console.log(this.props.cardsInAlbum);
    console.log('...removing...');
    this.props.action(this.props.content, this.props.cardsInAlbum);
  }
  
  handleRollerUp() {
    this.setState(prevState => ({imgPosition: prevState.imgPosition + 110}));
  }

  handleRollerDown() {
    this.setState(prevState => ({imgPosition: prevState.imgPosition - 110}));
  }

  handleShowModal() {
    console.log('>> Run /handleShowModal/ from /Album/');
    this.setState({
      modalVisible: true,
    });
  }

  handleCloseModal() {
    console.log('>> Run /handleCloseModal/ from /Album/');
    this.setState({
      modalVisible: false,
    });
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
      <div>
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
                {this.props.cardsInAlbum[this.props.content.albumData.elemTitle].map((el, index) => 
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
            
            <div className={styles.ablumButtonWrapper}>
              <Destructor buttonName='OPEN ALBUM' action={() => this.handleShowModal()}/>          
              <Destructor buttonName='REMOVE' action={() => this.handleRemove()}/>
            </div>
            
          </div>
        </div>

        <ModalAlbum 
          modalVisible={this.state.modalVisible}
          action={() => this.handleCloseModal()}
          cards={this.props.cardsInAlbum}
          albumTitle={this.props.content.albumData.elemTitle}
        />

      </div>
    );
  }
}

export default Album;