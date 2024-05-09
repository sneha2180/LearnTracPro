import { CourseListComponent } from '../course-list/course-list.component';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Course from '../../model/Course';

@Component({
  selector: 'app-tutor-courses',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './tutor-courses.component.html',
  styleUrl: './tutor-courses.component.css'
})
export class TutorCoursesComponent {
  constructor(private router: Router) { }
  handleCourseCreate(){
    this.router.navigate(['/tutor/course/create']);
  }
}
