import React from 'react';
import actions from '../actions/actions';

export default class NavBar extends React.Component {

  constructor(...args) {
    super(...args);
  }

  static _handleClick() {

    actions.backToSplash();

  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand" href="#" onClick={NavBar._handleClick.bind(this)}>Fight Night 2.0</a>
          </div>
        </div>
    </nav>
  );
  }
}
