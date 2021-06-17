import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.scss';

class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER TITLE ... ');
    console.log('All /Title/ props: ');
    console.log({...this.props, dupa: 'dupa'});
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{this.props.title}</h1>
        <h4 className={styles.subtitleText}>{this.props.subtitle}</h4>
      </div>
    );
  }
}

export default Title;

/*
== INFO: ==
- <Title> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- contents of <h1>, <h4> are setted from [<AppHeader> props 'title', 'subtitle']; 
- <Title> pass on any props, it only renders content;

== TODO: ==
- <Title> is 'class component' but has very simple structure so it would be changed to 'function  component' at this moment;
*/