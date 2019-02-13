import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  getUserDetails(username, password) {
    return this.http.post('/api/login', {
      username: username,
      password: password
    });
  }

  setLoggedInStatus(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  logout() {
    console.log('inside logout');
    this.http.post('/api/logout', {})
      .subscribe(data => {
        this.loggedInStatus = false;
        this.router.navigateByUrl('login');
      });
  }


}
