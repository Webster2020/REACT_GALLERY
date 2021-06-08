import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.scss';

class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{this.props.title}</h1>
        <h4 className={styles.subtitleText}>{this.props.subtitle}</h4>
      </div>
    );
  }
}

export default Title;