import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.styl']
})
export class StudentListComponent implements OnInit {

  editMessage: string;
  deleteMessage: string;
  studentList: Student[];
  constructor(private service: StudentService, private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.service.getAllStudents().subscribe(response => {
      this.studentList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as Student;
      })

      // Sorting the student-list in ascending order.
      this.studentList = this.studentList.sort((obj1: any, obj2: any) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }

  onEdit(student: Student) {
    this.service.formData = Object.assign({}, student);
  }

  onDelete(student: Student) {
    this.fireStore.doc('students/' + student.id).delete();
    this.deleteMessage = student.fullName + ' information is successfully deleted!';
  }
}