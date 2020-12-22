import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngIf= "displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <h2>ProgrameCode</h2>
  </ng-template>
  
  <ng-template #elseBlock>
  <h2>hidden</h2>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'" style="color:red;">you picked red color</div>
    <div *ngSwitchCase="'green'" style="color:green;">you picked green color</div>
    <div *ngSwitchCase="'blue'" style="color:blue;">you picked blue color</div>
    <div *ngSwitchDefault>pick again</div>
  </div>
  <br>
  <div *ngFor="let color of colors; index as i;first as f;last as l;odd as o;even as e">
  <h2>{{i}}  {{color}}|{{f}}  | {{l}}    | {{o}}  |  {{e}} </h2>
  </div>
  


  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  displayName = true;
  @Input() public parentData;
  public color = "green";
  public colors = ["red","green","blue","yellow",];
  constructor() { }

  ngOnInit(): void {
  }

}
