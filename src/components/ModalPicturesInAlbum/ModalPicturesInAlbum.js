import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalPicturesInAlbum.scss';

class ModalPicturesInAlbum extends React.Component {
   
  static propTypes = {
    content: PropTypes.object,
    allCards: PropTypes.array,
    action: PropTypes.func,
  }
  
  render() {
    console.log('===============================');
    console.log('>> RENDER CARD ... ');
    console.log('All /Card/ props: ');
    console.log(this.props);
    console.log('/Card/ state: ');
    console.log(this.state);
    return (
      <button className={styles.pictureButton} onClick={() => this.props.action()}>
        <img className={styles.picture} src={this.props.content.elemUrl} alt={this.props.content.elemTitle}></img>
      </button>
    );
  }
}

export default ModalPicturesInAlbum;