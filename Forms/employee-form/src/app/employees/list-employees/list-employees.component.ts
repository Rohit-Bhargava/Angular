import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.styl']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Marks',
      gender:'Male',
      email: 'marks@txt.com',
      phoneNumber: 2222333323,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1998'),
      department: 'IT',
      isActive: true,
      photoPath: 'D:/AngularCrud/src/assets/images/mark.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender:'Female',
      email: 'mary@txt.com',
      phoneNumber: 3333222232,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/2/1995'),
      department: 'IT',
      isActive: true,
      photoPath: 'D:/AngularCrud/src/assets/images/mary.jpg'
    },
    {
      id: 3,
      name: 'Johan',
      gender:'Male',
      email: 'johan@txt.com',
      phoneNumber: 3332223232,
      contactPreference: 'Email',
      dateOfBirth: new Date('1/25/1996'),
      department: 'IT',
      isActive: true,
      photoPath: 'D:/AngularCrud/src/assets/images/johan.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
