import {Component} from '@angular/core';
import {AuthService} from './auth.service';

/*function log(target, name, descriptor) {
  // console.log(target, name, descriptor);
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log(args + ' were passed in this function');
    const result = original.apply(this, args);
    console.log('result of this function is ' + result);
    return result;
  };
  return descriptor;
}

function classDeco(className) {
  console.log(className);
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*@classDeco*/
export class AppComponent {
  title = 'AngularIntro';

  constructor(private authService: AuthService) {
  }

  /*@log
  simpleMethod(a) {
    return a * a;
  }*/

  logout() {
    this.authService.logout();
  }

}
