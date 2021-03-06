import React from 'react';
import actions from '../actions/actions';

export default class Splash extends React.Component {

  constructor(...args) {
    super(...args);
  }

  _handleClick() {
    actions.characterSelect();
  }

  render() {
    return (
      <div className="container container-main">
        <div id="splash" className="panel panel-default fixed-panel container-canvas text-center">
              <button type="button" className="btn middle-btn-primary btn-xlarge btn-primary" onClick={this._handleClick.bind(this)}>
                Play
              </button>
          </div>
      </div>
    );
  }
}
