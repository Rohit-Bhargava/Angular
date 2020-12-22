import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<div style="text-align:center; color:blue">
  <h3 class="cls1"><u>{{name}} Form</u></h3>
  <label>Name : </label>
  <input #myInput [id]="myId" value="Rohit">
  <input [disabled]="isDisabled" id="{{myId}}" value="Bhargava">
  <button (click)="logMessage(myInput.value)">log</button>
  <br><br>
  <h4 class="text-succes">E-mail</h4>
  <h4 [class]="succesClass">Phone Number</h4>
  <h4 class = "text-special" [class]="text-danger">Address</h4>
  <h4 [class.text-danger]="hashError">PIN Code</h4>
  <h4 [ngClass]="messageClasses">Programe</h4>
  <h2 [style.color]="'orange'">Style Binding 1</h2>
  <h2 [style.color]="hashError ?'red' : 'green' ">Style Binding 2</h2>
  <h2 [style.color]="highlightColor">Style Binding 3</h2>
  <h1 [ngStyle]="titleStyles">Style Binding 4</h1>
  <div style="background-color:gray;">
  <h1>{{massage}}</h1>
  </div>
  <div style="text-align:center; color:blue">
  <button (click)="onClick($event)">Massage</button>
  <button (click)="massage='Hello Rohit Bhargava'">Greeting</button>
  </div>
  <br>
  <div style="text-align:center;background-color:gray">
  {{text}}
  </div>
  <br>
  <input [(ngModel)]>
  </div>
  `,
  styles: [`
  .text-succes{color:green;}
  .text-danger{color:red;}
  .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {
  public name = "Aplliction";
  public myId = "testId";
  public isDisabled = false;
  public succesClass ="text-succes";
  public hashError = false;
  public isSpecial=true;
  public messageClasses={
    "text-succes" : !this.hashError,
    "text-danger" : this.hashError,
    "text-special": this.isSpecial
}
public highlightColor="darkorchid";
public titleStyles = {
  color: "purple",
  fontStyle: "italic",
}  
  public massage = "";
   constructor() { 

  }
  ngOnInit(): void {
  }
  logMessage(value){
    console.log(value);
  }
  onClick(event){
    console.log(event);
    this.massage='Welcome to this site';
  }
  

}
