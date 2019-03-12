import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserState} from './store/reducers/userReducer';
import {ACTION_LOGGED_IN} from './store/actions/appActions';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private store: Store<UserState>) {
  }


  getUserLogged() {
    return this.store.select('userReducer');
  }

  setLoggedInUserState(user) {
    this.store.dispatch({type: ACTION_LOGGED_IN, user: user});
  }
}
