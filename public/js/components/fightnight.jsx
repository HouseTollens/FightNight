import React from 'react';
import NavBar from './navbar.jsx';

export default class FightNight extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  _onChange() {}

  render() {
    return (
      <div>
        <NavBar />
        <div className="container container-main">
          <div className="container-canvas">
            <canvas id="game" tabindex = "1" width="800" height="480">
              game
            </canvas>
          </div>
        </div>
      </div>
    )
  }
}
