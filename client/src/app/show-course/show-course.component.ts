import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Student from '../../model/Student';
import Course from '../../model/Course';

@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css'
})
export class ShowCourseComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  courseId: any;
  course:any = new Course();
  newCourse:any;
  chapters:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      // You can use this.courseId to fetch data or perform other operations based on the ID
    });
    this.getCourse(this.courseId);
  }
  async getCourse(id:string){
    this.newCourse = await this.course.getCourse(id);
    this.chapters = this.newCourse.chapters;
  }
}
