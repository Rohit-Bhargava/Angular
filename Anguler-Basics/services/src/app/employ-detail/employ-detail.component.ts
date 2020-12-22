import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service'
@Component({
  selector: 'app-employ-detail',
  template: `
  <h2>Employee Detaile</h2>
  <ul *ngFor="let employee of employees">
  <li> {{employee.id}} {{employee.name}} - {{employee.age}} </li>
  </ul>
  `,
  styleUrls: []
})
export class EmployDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
