import { Component } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeachersService } from '../../services/teachers.service';
import { TeacherDetailsComponent } from "../teacher-details/teacher-details.component";
import { AddTeacherComponent } from "../add-teacher/add-teacher.component";
import { log } from 'console';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [TeacherDetailsComponent, AddTeacherComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers : Teacher[];
  add = false;
  constructor(public teacherService : TeachersService){
    this.teachers = this.teacherService.getTeachers();
    console.log("teachers", this.teachers);
    
  }

  addTeacherScope=()=>{
    this.add=true;
  }
}
