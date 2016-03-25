import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

actions = {

  startPlay : () => {
    
    AppDispatcher.dispatch({

      actionType: constants.START_PLAY

    });

  },

  backToSplash : () => {

    AppDispatcher.dispatch({

      actionType: constants.BACK_TO_SPLASH

    });

  }

};

export default actions;