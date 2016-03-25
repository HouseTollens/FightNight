import React from 'react';
import actions from '../actions/actions';

export default class Game extends React.Component {

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    // Load game assets etc..
  }

  static _handleClick() {
    actions.backToSplash();
  }

  render() {
    return (
      <div className="container container-main">
        <div className="container-canvas">
          <canvas id="game" tabIndex = "1" width="800" height="480" onClick={Game._handleClick.bind(this)}>
            game
          </canvas>
        </div>
      </div>
    );
  }
}