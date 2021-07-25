import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
import Title from '../Title/Title.js';

class Hero extends React.Component {
  static propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER APP HERO ... ');
    console.log('All /Hero/ props: ');
    console.log(this.props);
    return (
      <div className={styles.heroContainer}>
        <img className={styles.heroImg} src={this.props.background} />
        <Title title={this.props.title} subtitle={this.props.subtitle} />
      </div>
    );  
  }
}

export default Hero;