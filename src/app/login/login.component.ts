import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  username = '';
  password = '';

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    console.log('username-->', this.username);
    console.log('password-->', this.password);
    this.authService.getUserDetails(this.username, this.password).subscribe((data: any) => {
      console.log('data--->', data);
      if (data.success) {
        this.router.navigate(['admin']);
        this.authService.setLoggedInStatus(true);
      } else {
        window.alert(data.message);
      }
    });
  }
}
