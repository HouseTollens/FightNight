import React from 'react';

export default class Game extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="container container-main">
        <div className="container-canvas">
          <canvas id="game" tabIndex = "1" width="800" height="480">
            game
          </canvas>
        </div>
      </div>
    );
  }
}