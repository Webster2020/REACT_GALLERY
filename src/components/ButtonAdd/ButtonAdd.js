import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Creator.scss';
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

/*
== INFO: ==
- <ButtonAdd> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- <ButtonAdd> gets prop 'action' (which is method) from <Creator> (where is nested method from <Gallery>); 
- <ButtonAdd> pass on its prop 'action' to [<button> as prop 'onClick'];

== TODO: ==
- <ButtonAdd> is 'class component' but has very simple structure so it would be changed to 'function  component' at this moment;
*/