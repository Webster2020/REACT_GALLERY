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
    console.log('===============================');
    console.log('>> RENDER APP HEADER ... ');
    console.log('All /AppHeader/ props: ');
    console.log(this.props);
    return (
      <div className={styles.appHeaderContainer}>
        <img className={styles.appHeaderImg} src={this.props.background} />
        <Title title={this.props.title} subtitle={this.props.subtitle} />
      </div>
    );  
  }
}

export default AppHeader;

/*
== INFO: ==
- <AppHeader> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- props 'src', 'title', 'subtitle' get values from [<App> props 'background', 'title', 'subtitle']; 
- <AppHeader> pass on (/przekazac dalej/) its props 'title', 'subtitle'to <Title>;

== TODO: ==
- <AppHeader> is 'class component' but has very simple structure so it would be changed to 'function component' at this moment;
*/