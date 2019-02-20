import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private user: UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.loggedInStatus) {
      return true;
    } else {
      return this.user.getLoggedInUser().pipe(map(res => {
        console.log('res--->', res);
        if (res.status) {
          this.auth.loggedInStatus = true;
        } else {
          this.router.navigateByUrl('login');
        }
        return res.status;
      }));
    }
  }
}
