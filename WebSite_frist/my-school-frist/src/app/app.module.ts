import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';

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
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
