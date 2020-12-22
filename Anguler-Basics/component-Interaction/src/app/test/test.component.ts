import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h1>{{ "Hello " + name }}</h1>
  <button (click) = "fireEvent()"> Button </button>
  <h2> {{name}} </h2>
  <h2> {{name | uppercase}} </h2>
  <h2> {{name | lowercase}} </h2>
  <h2> {{massage | titlecase}} </h2>
  <h2> {{name | slice:5}} </h2>
  <h2> {{name | slice:3:5}} </h2>
  <h2> {{person | json}} </h2>
  
  
  <h2> {{5.678 | number:'1.2-3'}} </h2>
  <h2> {{5.678 | number:'3.4-5'}} </h2>
  <h2> {{5.678 | number:'3.1-2'}} </h2>
  <h2> {{0.25 | percent }} </h2>
  <h2> {{0.25 | currency }} </h2>
  <h2> {{0.25 | currency:'India':'code' }} </h2>
  <h2> {{ date }} </h2>
  <h2> {{ date | date:'short' }} </h2>
  <h2> {{ date | date:'shortDate' }} </h2>
  <h2> {{ date | date:'shortTime' }} </h2>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public massage = "show error message";
  public date = new Date();
  public person={
    "firstName" : "Rohit",
    "lastname" : "Bhargava",
  }

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
    fireEvent(){
    this.childEvent.emit('This programe is ready');
    }


}
