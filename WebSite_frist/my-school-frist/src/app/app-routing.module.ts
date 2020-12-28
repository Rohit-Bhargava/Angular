import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SubjectComponent } from './subjects/subject.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentsComponent } from './students/students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path: 'subject', component: SubjectComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
