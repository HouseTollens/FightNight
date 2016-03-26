import React from 'react';
import NavBar from './navbar.jsx';
import Game from './game.jsx';
import Splash from './splash.jsx';
import fightnightstore from '../stores/store';
import CharacterSelect from '../components/characterselect.jsx';

export default class FightNight extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this._onChange = this._onChange.bind(this);
    this.state = {
      page : 'splash'
    }
  }

  componentDidMount() {
    fightnightstore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    fightnightstore.removeChangeListener(this._onChange);
  }

  _onChange() {
    
    this.setState(fightnightstore.getStuff());

  }

  render() {
    return (
      <div>
        <NavBar />
        {(() => {
          switch (this.state.page) {

            case 'game' :
              return <Game />;
            case 'splash' :
              return <Splash />;
            case 'characters' :
              return <CharacterSelect sock={this.props.sock} playerNumber={this.props.playerNumber}/>;
            default:
              return <Splash />;

          }
        })()}
      </div>
    )
  }
}
