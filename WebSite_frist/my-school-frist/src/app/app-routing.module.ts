import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { SubjectComponent } from './subjects/subject.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path: 'subject', component: SubjectComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'student', component: StudentsComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
