import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ModalAlbum/ModalAlbum.scss';
import ModalPicturesInAlbum from '../ModalPicturesInAlbum/ModalPicturesInAlbum';

class ModalAlbum extends React.Component {

  static propTypes = {
    picture: PropTypes.string,
    action: PropTypes.func,
    modalVisible: PropTypes.bool,
    title: PropTypes.string,
    cards: PropTypes.object,
    albumTitle: PropTypes.string,
  }

  showAlert() {
    alert('CLICK');
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER MODAL ALBUM ... ');
    console.log('All /Modal Album/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('/Modal Album/ state: ');
    console.log(this.state);
    return (
      <section>
        <div className={`${styles.overlay} ${this.props.modalVisible ? styles.show : ''}`} onClick={() => this.props.action()}>
          <div className={`${styles.modal} ${this.props.modalVisible ? styles.show : ''}`} id='registration-confirm'>
            
            <div>
              <button className={`${styles.modalButtonX} ${styles.closeModal}`} onClick={() => this.props.action()}>x</button>
            </div>
            
            <div className={styles.modalWrapper}>
              <div className={styles.modalPictureWrapper}>              
                {this.props.cards[this.props.albumTitle] !== [] ?
                  (this.props.cards[this.props.albumTitle].map((el, index) => 
                    el.album == this.props.albumTitle ?
                      (
                        <ModalPicturesInAlbum
                          key={`postcardInAlbum-${index}`} 
                          content={el}
                          action={() => this.showAlert()}
                        />
                      ) : ''             
                  )) : ''
                } 
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default ModalAlbum;