import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
              private user: UserService) {
  }

  username = '';
  password = '';

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    this.authService.getUserDetails(this.username, this.password).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(['admin']);
        this.authService.setLoggedInStatus(true);
        this.user.setLoggedInUserState(this.username);
      } else {
        window.alert(data.message);
      }
    });
  }
}
