import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ButtonAdd/ButtonAdd.scss';

class ButtonAdd extends React.Component {
  
  static propTypes = {
    action: PropTypes.func,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER BUTTON ADD... ');
    console.log('All /ButtonAdd/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('/ButtonAdd/ state: ');
    console.log(this.state);
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.buttonApply} onClick={this.props.action}>ADD +</button>
      </div>      
    );
  }
}

export default ButtonAdd;