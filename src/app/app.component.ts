import { Component } from '@angular/core';

function log(target, name, descriptor) {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularIntro';

  constructor() {
    console.log(this.simpleMethod(5));
  }

  @log
  simpleMethod(a) {
    return a * a;
  }


}
