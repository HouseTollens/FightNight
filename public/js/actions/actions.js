import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

module.exports = {

  startPlay : () => {
    
    AppDispatcher.dispatch({

      actionType: constants.START_PLAY

    });

  }

};