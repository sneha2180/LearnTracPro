import { Component,OnInit } from '@angular/core';
import Course from '../../model/Course';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent implements OnInit{
  courses:any;
  ngOnInit(): void {
      this.getAllCourses();
  }
  async getAllCourses(){
    this.courses = await Course.getAllCourses();
    console.log(this.courses);
  }
  handleClick(id:string){
    console.log(id);
  }
}
