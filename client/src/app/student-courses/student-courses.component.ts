import { Component,OnInit } from '@angular/core';
import Course from '../../model/Course';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent{
  
}
