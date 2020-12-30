import { Injectable } from '@angular/core';
import { Student } from '../shared/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public firestore: AngularFirestore) { }

  //student formData
  formData: any;

  // Fetch all students information.
  getAllStudents() {
    // valueChanges() function returns the observable containing the student details expect the id of the document.
    // snapshotChanges() function returns the observable containing the student details and the id of the document (i.e. the metadata).
    return this.firestore.collection('students').snapshotChanges();
 
    // We will use the id in order to perform the update or delete operation.
  }
}
