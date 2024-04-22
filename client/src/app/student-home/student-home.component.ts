import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Blog from '../../model/Blog';
import Course from '../../model/Course';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent implements OnInit{
  constructor(private router: Router) {}
    blogs:any;
    courses:any;
    ngOnInit(): void {
       this.getAllBlogs();
       this.getAllCourses();
    }
    async getAllBlogs(){
      this.blogs = await Blog.getAllBlogs();
    }
    async getAllCourses(){
      this.courses = await Course.getAllCourses();
    }
    handleBlogClick(id:string){
      this.router.navigate([`/student/course/${id}`]);
    }
    handleCourseClick(id:string){
      console.log(id);
    }
}
