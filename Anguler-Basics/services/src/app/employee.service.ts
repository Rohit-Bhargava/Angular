import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return[
        {"id":1,"name":"Mohit","age":30},
        {"id":2,"name":"Prohit","age":28},
        {"id":3,"name":"sohan","age":32},
        {"id":4,"name":"shyam","age":32,},
      ];
  }
}
