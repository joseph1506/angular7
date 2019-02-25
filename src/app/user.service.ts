import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


interface isLoggedIn {
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  getLoggedInUser(): Observable<boolean> {
    return this.http.get<boolean>('/api/username');
  }

  logout() {
    return this.http.get('/api/logout');
  }

}
