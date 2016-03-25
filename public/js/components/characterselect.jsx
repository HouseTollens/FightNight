import React from 'react';
import actions from '../actions/actions';

export default class Character_Select extends React.Component {

  constructor(...args) {
    super(...args);
  }

  static _handleClick() {
    actions.startPlay();
  }

  render() {
    return (
      <div className="container container-main">
        <div id="characters" className="panel panel-default fixed-panel container-canvas text-center">
          <button type="button" className="btn btn-primary btn-xlarge" onClick={Character_Select._handleClick.bind(this)}>
          </button>
        </div>
      </div>
    );
  }
}
