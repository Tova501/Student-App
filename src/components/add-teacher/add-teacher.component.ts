import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {

  @Input() classes: number[]
  teacherService: TeachersService=new TeachersService();
  teacher: Teacher = new Teacher('', [])
  SaveStudentDetails = (name: string) => {
    this.teacher.name = name;
    this.teacherService.addTeacher(this.teacher);
  }

  handleChange = (className: string, status: boolean) => {
    console.log(className);

    if (status)
      this.teacher.classes.push(Number(className));
    else
      this.teacher.classes = this.teacher.classes.filter(c => c != Number(className))
  }

}
