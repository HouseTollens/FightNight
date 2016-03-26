import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

module.exports = {

  lockInSelection : (character, socket) => {
    socket.emit('selection', character);
    console.log('lock action');
  }

};
