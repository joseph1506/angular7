import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName = null;
  constructor(private user: UserService, private auth: AuthService) {
  }

  ngOnInit() {
    this.user.getUserLogged().subscribe(state => {
      console.log('user state-->', state);
    });
  }

}
