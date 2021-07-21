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

/*
== INFO: ==
- <AppHeader> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- props 'src', 'title', 'subtitle' get values from [<App> props 'background', 'title', 'subtitle']; 
- <AppHeader> pass on (/przekazac dalej/) its props 'title', 'subtitle'to <Title>;

== TODO: ==
- <AppHeader> is 'class component' but has very simple structure so it would be changed to 'function component' at this moment;
*/