import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import Blog from '../../model/Blog';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [BlogListComponent,CourseListComponent],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent{
    
}
