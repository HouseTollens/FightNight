import React from 'react';
import ReactDOM from 'react-dom';
import FightNight from './js/components/fightnight.jsx';

var socket = io.connect('http://localhost:3000');

ReactDOM.render(
<FightNight id="FightNight" sock={socket}/>,
  document.getElementById('root')
);