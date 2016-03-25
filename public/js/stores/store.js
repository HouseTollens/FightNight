import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';
import {EventEmitter} from 'events';

let _stuff = {
  page : ''
};

class FightNightStore extends EventEmitter {

  addChangeListener(cb) {
    this.on(constants.CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(constants.CHANGE, cb);
  }

  static getStuff() {
    return _stuff;
  }

}

const fightnightstore = new FightNightStore();

AppDispatcher.register((payload) => {

  switch(payload.actionType) {

    case constants.START_PLAY :
      _stuff.page = 'game';
      fightnightstore.emit(constants.CHANGE);
      break;

    case constants.BACK_TO_SPLASH :
      _stuff.page = 'splash';
      fightnightstore.emit(constants.CHANGE);
      break;

    case constants.CHARACTER_SELECT :
      _stuff.page = 'characters';
      fightnightstore.emit(constants.CHANGE);
      break;
  }

});

export default fightnightstore;


