import {ACTION_LOGGED_IN, ACTION_LOGOUT} from '../actions/appActions';

export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: null
};


export function userStatusReducer(state = initialState, action): UserState {
  console.log('action-->', action);
  switch (action.type) {
    case ACTION_LOGOUT:
      return {
        ...state,
        user: null
      };

    case ACTION_LOGGED_IN:
      return {
        ...state,
        user: action.user
      };
  }
  return state;
}
