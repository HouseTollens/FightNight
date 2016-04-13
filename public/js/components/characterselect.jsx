import React from 'react';
import actions from '../actions/actions';
import socketActions from '../actions/socketActions';
import characters from '../res/characters.json';

export default class CharacterSelect extends React.Component {

  constructor(...args) {
    super(...args);
    this.props = args;
  }

  _handlePlay() {

    actions.startPlay();
    this.state = {
      selected : ''
    };
  }

  _handleLock() {
    socketActions.lockInSelection(
      { 
        selected: this.state.selected,
        playerNumber : this.props.playerNumber
      },
      this.props.sock
    );
  }

  _handleSelect(character, event) {

    event.preventDefault();

    this.setState(
      {
      selected : character
      }, () => {
        console.log(this.state);
      }
    );

  }

  //Testing a commit
  render() {
    return (
      <div className="container container-main">
        <div id="characters" className="panel panel-default selection-panel container-canvas">
          <div className="row">
            {
              characters.map((character, index) => {
                return <div key={index} className="col-md-4 text-center">
                  <img
                    width="190" height="240"
                    src={"../../res/img/"+character.name+".png"}
                    onClick={this._handleSelect.bind(this, character.name)}
                  />
                </div>;
              })
            }
          </div>
          <div className="text-center">
            <button type="button" className="btn select-btn-primary btn-warning" onClick={this._handleLock.bind(this)}>
              Lock
            </button>
            <button type="button" className="btn select-btn-primary btn-warning" onClick={this._handlePlay.bind(this)}>
              Play
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/*

 <div id="characters" className="panel panel-default fixed-panel container-canvas">
 <ul className="no-list-style-type">
 {
 characters.map((item, index) => {
 return <li key={index}>{item.name}</li>;
 })
 }
 </ul>
 </div>
 */