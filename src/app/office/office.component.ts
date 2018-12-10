import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  private employees: {};

  constructor(private myService: RecordsService) { }

  ngOnInit() {
    this.myService.getEmployeeData()
      .subscribe(data => {
        this.employees = data;
      });
  }

}
