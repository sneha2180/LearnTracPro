import { Component,OnInit } from '@angular/core';
import Blog from '../../model/Blog';
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-student-blogs',
  standalone: true,
  imports: [BlogListComponent],
  templateUrl: './student-blogs.component.html',
  styleUrl: './student-blogs.component.css'
})
export class StudentBlogsComponent{

}
