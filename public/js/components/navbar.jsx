import React from 'react';

export default class NavBar extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand" href="#">Fight Night 2.0</a>
          </div>
        </div>
    </nav>
  );
  }
}
