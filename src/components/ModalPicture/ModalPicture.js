import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ModalPicture/ModalPicture.scss';

class ModalPicture extends React.Component {
    
  static propTypes = {
    picture: PropTypes.string,
    action: PropTypes.func,
    modalVisible: PropTypes.bool,
    title: PropTypes.string,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER MODAL PICTURE ... ');
    console.log('All /Modal Picture/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('/Modal Picture/ state: ');
    console.log(this.state);
    return (
      <section>
        <div className={`${styles.overlay} ${this.props.modalVisible ? styles.show : ''}`} onClick={() => this.props.action()}>
          <div className={`${styles.modal} ${this.props.modalVisible ? styles.show : ''}`} id='registration-confirm'>
            
            <div>
              <button className={`${styles.modalButtonX} ${styles.closeModal}`} onClick={() => this.props.action()}>x</button>
            </div>
            
            <div className={styles.modalWrapper}>
              <div className={styles.modalTitle}>
                <h2 className={styles.modalTitleText}>{this.props.title}</h2>
              </div>
              <div className={styles.modalPictureWrapper}>              
                <img className={styles.modalPicture} src={this.props.picture} alt='YOUR IMAGE'></img>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default ModalPicture;