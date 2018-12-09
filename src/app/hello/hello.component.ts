import {Component, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  private employees: {};

  constructor(private myService: RecordsService) {
  }

  customMessage = 'Get out of here';
  i = 0;
  textVal = 'aewrr';


  /*employees = [
    {
      name : 'Joseph',
      id : '007'
    },
    {
      name: 'James',
      id: '0000'
    },
    {
      name: 'Donna',
      id: '2322'
    }
  ];*/

  exprMethod() {
    // console.log(`Called ${this.i++} times`);
  }

  callOp() {

  }

  ngOnInit() {
    this.myService.getEmployeeData()
      .subscribe(data => {
        this.employees = data;
      });
  }

}
