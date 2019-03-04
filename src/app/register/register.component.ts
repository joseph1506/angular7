import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  cpassword = '';

  constructor(private user: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    console.log(this.username);
    console.log(this.password);
    console.log(this.cpassword);

    if (this.password !== this.cpassword) {
      errors.push('Passwords not matching');
    }

    if (errors.length === 0) {
      this.user.registerUser(this.username, this.password).subscribe(response => {
        console.log(response);
        if (response.status) {
          this.router.navigateByUrl('dashboard');
        }
      });
    }

  }

}
