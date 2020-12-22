import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employ-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li> {{employee.name}} </li>
  </ul>
  `,
  styleUrls: []
})
export class EmployListComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
