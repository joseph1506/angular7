import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  username = '';
  password = '';

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    console.log('username-->', this.username);
    console.log('password-->', this.password);
    this.authService.getUserDetails(this.username, this.password).subscribe(data => {
      console.log('data--->', data);
      if (data.success) {

      } else {
        window.alert(data.message);
      }
    });
  }
}
