import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subjects/subject.component';
import { StudentsComponent } from './students/students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentService } from './shared/student.service';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SetStudyMaterialsComponent } from './set-study-materials/set-study-materials.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadListComponent } from './upload-list/upload-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    SubjectComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    SetStudyMaterialsComponent,
    UploadFormComponent,
    UploadDetailsComponent,
    UploadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
