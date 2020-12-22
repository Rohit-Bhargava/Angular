import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';

const routes: Routes = [
  {path:'list', component: ListEmployeesComponent},
  {path:'form', component: CreateEmployeeComponent},
  {path:'', redirectTo:'/list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
