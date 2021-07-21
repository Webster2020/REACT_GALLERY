import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ButtonAdd/ButtonAdd.scss';

class Destructor extends React.Component {
    
  static propTypes = {
    action: PropTypes.func,
    currentCard: PropTypes.string,
    buttonName: PropTypes.string,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER DESTRUCTOR ... ');
    console.log('All /Destructor/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('/Destructor/ state: ');
    console.log(this.state);
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.buttonApply} onClick={() => this.props.action()}>{this.props.buttonName}</button>
      </div> 
    );
  }
}

export default Destructor;