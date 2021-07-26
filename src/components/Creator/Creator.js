import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Input/Input.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

class Creator extends React.Component {
  
  static propTypes = {
    type: PropTypes.string,
    action: PropTypes.func,
    albumsList: PropTypes.array,
  }

  state = {
    elemTitle: '',
    elemUrl: '',
    album: 'other',
  }
  
  handleChangeTitle = event => {
    console.log('>> Run /handleChangeTitle/ from /Creator/');
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    this.setState({
      elemTitle: event.target.value,
    });
  }
  
  handleChangeUrl = event => {
    console.log('>> Run /handleChangeUrl/ from /Creator/');
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    this.setState({
      elemUrl: event.target.value,
    });
  }
  
  handleChangeAlbum = event => {
    console.log('>> Run /handleChangeAlbumId/ from /Creator/');
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    this.setState({
      album: event.target.value,
    });
  }

  handleAddCard = () => {
    console.log('>> CLICK!');
    console.log('>> Run /handleOK/ from /Creator/');
    console.log('this.state.elemTitle: ' + this.state.elemTitle);
    console.log('this.state.elemUrl: ' + this.state.elemUrl);
    console.log('this.state.elemId: ' + this.state.elemId);
    if(this.state.elemTitle != ''){
      this.props.action({
        elemTitle: this.state.elemTitle, 
        elemUrl: this.state.elemUrl,   
        album: this.state.album,
      });
      this.setState({
        elemTitle: '',
        elemUrl: '',
      });
    }
  }

  handleAddAlbum = () => {
    console.log('>> CLICK!');
    console.log('>> Run /handleOK/ from /Creator/');
    console.log('this.state.elemTitle: ' + this.state.elemTitle);
    console.log('this.state.elemUrl: ' + this.state.elemUrl);
    console.log('this.state.elemId: ' + this.state.elemId);
    if(this.state.elemTitle != ''){
      this.props.action({
        elemTitle: this.state.elemTitle, 
        elemUrl: this.state.elemUrl,     
      });
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
    console.log('3) state.elemId: ');
    console.log(this.state.elemId);
    console.log('4) state.album: ');
    console.log(this.state.album);
    return (
      <div>

        <div className={styles.inputContainer}>
          <form>
            <input 
              className={styles.inputTypeText} 
              type='name'
              value={this.state.elemTitle}
              onChange={this.handleChangeTitle}
              placeholder='title'
              maxLength="13"
            >
            </input>
          </form>
        </div>
        
        {this.props.type == 'card' ?
          (<div className={styles.inputContainer}>
            <form>
              <input 
                className={styles.inputTypeText} 
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

        {/* TODO: REFACTOR STYLE OF SELECT - PREPARE CUSTOM DROPDOWN */}
        {this.props.type == 'card' ? 
          (<div className={styles.inputContainer}>
            <form>
              <select value={this.state.elemId} onChange={this.handleChangeAlbum}>
                <option>other</option>
                {
                  this.props.albumsList == [] || this.props.albumsList == undefined ? (
                    <option>NO ALBUM</option>
                  )
                    : this.props.albumsList.map((el, index) => <option key={`opt-${index}`}>{el.albumData.elemTitle}</option>)
                }
              </select>
            </form>
          </div>)
          : ''
        }

        {this.props.type == 'card' ?
          <ButtonAdd action={this.handleAddCard}/>
          : 
          <ButtonAdd action={this.handleAddAlbum}/>
        }
        
        
      </div>
    );
  }
}

export default Creator;