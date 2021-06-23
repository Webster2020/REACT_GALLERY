import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Input/Input.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

class Creator extends React.Component {
  
  static propTypes = {
    action: PropTypes.func,
    albumsList: PropTypes.array,
  }

  state = {
    elemTitle: '',
    elemUrl: '',
  }
  
  //METHOD: set state.elemTitle as 'event.target.value' (in this case it is value typed to input area)
  handleChangeTitle = event => {
    console.log('>> Run /handleChangeTitle/ from /Creator/');
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    this.setState({
      elemTitle: event.target.value,
    });
  }
  
  //METHOD: set state.elemTitle as 'event.target.value' (in this case it is value typed to input area)
  handleChangeUrl = event => {
    console.log('>> Run /handleChangeUrl/ from /Creator/');
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    this.setState({
      elemUrl: event.target.value,
    });
  }
  
  //METHOD: pass on state.value (setted by 'handleChange') as argument of 'action' (structure of 'action' in <Gallery> in addTemp()); then set state.value as empty string
  handleOK = () => {
    console.log('>> CLICK!');
    console.log('>> Run /handleOK/ from /Creator/');
    console.log('this.state.elemTitle: ' + this.state.elemTitle);
    console.log('this.state.elemUrl: ' + this.state.elemUrl);
    if(this.state.elemTitle != ''){
      this.props.action({elemTitle: this.state.elemTitle, elemUrl: this.state.elemUrl});
      this.setState({
        elemTitle: '',
        elemUrl: '',
      });
    }
  }
  
  render() {
    console.log('===============================');
    console.log('>> RENDER CREATOR ... ');
    console.log('All /Creator/ props: ');
    console.log(this.props);
    console.log('1) props.action: ');
    console.log(this.props.action);
    console.log('2) props.albumsList: ');
    console.log(this.props.albumsList);
    console.log('/Creator/ state: ');
    console.log(this.state);
    console.log('1) state.elemTitle: ');
    console.log(this.state.elemTitle);
    console.log('2) state.elemUrl: ');
    console.log(this.state.elemUrl);
    return (
      <div>
        {/* TITLE INPUT */}
        <div className={styles.inputContainer}>
          <form>
            <input 
              className={styles.inputTypeText} 
              type='name'
              value={this.state.elemTitle}
              onChange={this.handleChangeTitle}
              placeholder='title'
            >
            </input>
          </form>
        </div>
        
        {/*REFEACTORED ELEMENT 22.06.2021*/}
        {/* URL INPUT */}
        {!this.props.albumsList ? 
          (<div className='inputContainer'>
            <form>
              <input 
                className='inputTypeText' 
                type='name'
                value={this.state.elemUrl}
                onChange={this.handleChangeUrl}
                placeholder='image url'
              >
              </input>
            </form>
          </div>)
          : ''
        }

        {/*NEW ELEMENT 22.06.2021*/}
        {/* DROPDOWN INPUT */}
        {/* TODO: REFACTOR STYLE OF SELECT - PREPARE CUSTOM DROPDOWN */}
        {this.props.albumsList ? 
          (<div className='inputContainer'>
            <form>
              <select>
                {
                  this.props.albumsList == [] || this.props.albumsList == undefined ? (
                    <option>DUPA</option>
                  )
                    : this.props.albumsList.map((el, index) => <option key={index}>OK1{el.albumTitle.elemTitle}</option>)
                }
              </select>
            </form>
          </div>)
          : ''
        }

        <ButtonAdd action={this.handleOK}/>
        
      </div>
    );
  }
}

export default Creator;

/*
== INFO: ==
- <Creator> is 'class component' so every props which it gets from 'parent' are 'this.props.(...)';
- <Creator> gets prop 'action' (which is method) from <Gallery>; 
- <Creator> has own "state.value: '' "; 
- <Creator> has methods: 'handleChange(event)', 'handleOK()'; 
- <Creator> pass on its state 'value' to [<input> as prop 'value'];
- <Creator> pass on its method 'handleChange' to [<input> as prop 'onChange'];
- <Creator> pass on its method 'handleOK' to [<ButtonAdd> as prop 'action'];

== TODO: ==
- ?
*/