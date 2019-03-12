import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StatesService} from './states.service';


interface isLoggedIn {
  status: boolean;
}

interface Response {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private states: StatesService) {
  }


  getLoggedInUser(): Observable<boolean> {
    return this.http.get<boolean>('/api/username');
  }

  logout() {
    return this.http.get('/api/logout');
  }

  registerUser(username, password) {
    return this.http.post<Response>('/api/register',
      {username, password}
    );
  }

  getUserLogged() {
    return this.states.getUserLogged();
  }

  setLoggedInUserState(user) {
    this.states.setLoggedInUserState(user);
  }

}
