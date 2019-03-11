import {ACTION_LOGGED_IN, ACTION_LOGOUT} from '../actions/appActions';

export interface LoggedState {
  loggedInStatus: boolean;
}

const initialState: LoggedState = {
  loggedInStatus: false
};


export function logStatusReducer(state = initialState, action): LoggedState {
  console.log('action-->', action);
  switch (action.type) {
    case ACTION_LOGOUT:
      return {
        ...state,
        loggedInStatus: false
      };

    case ACTION_LOGGED_IN:
      return {
        ...state,
        loggedInStatus: true
      };
  }
  return state;
}

