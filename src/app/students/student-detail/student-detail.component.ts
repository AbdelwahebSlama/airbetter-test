import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../students.service";
import {ActivatedRoute} from "@angular/router";
import {IStudents} from "../students.model";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id: string;
  student: IStudents;
  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudentById(this.id).subscribe(
      res => {
        this.student = res;
      }
    )

  }

}
