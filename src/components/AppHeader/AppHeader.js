import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppHeader.scss';
import Title from '../Title/Title.js';

class AppHeader extends React.Component {
  static propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.appHeaderContainer}>
        <img className={styles.appHeaderImg} src={this.props.background} />
        <Title title={this.props.title} subtitle={this.props.subtitle} />
      </div>
    );  
  }
}

export default AppHeader;