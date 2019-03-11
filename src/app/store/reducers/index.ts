import {logStatusReducer, LoggedState} from './appReducers';
import {userStatusReducer, UserState} from './userReducer';
import {ActionReducerMap} from '@ngrx/store';

interface AppState {
  appReducer: LoggedState;
  userReducer: UserState;
};

export const reducers: ActionReducerMap<AppState> = {
  appReducer: logStatusReducer,
  userReducer: userStatusReducer
};
