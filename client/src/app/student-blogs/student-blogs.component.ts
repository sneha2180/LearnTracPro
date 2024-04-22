import { Component,OnInit } from '@angular/core';
import Blog from '../../model/Blog';

@Component({
  selector: 'app-student-blogs',
  standalone: true,
  imports: [],
  templateUrl: './student-blogs.component.html',
  styleUrl: './student-blogs.component.css'
})
export class StudentBlogsComponent implements OnInit{
  blogs:any;
  ngOnInit(): void {
      this.getAllBlogs();
  }
  async getAllBlogs(){
    this.blogs = await Blog.getAllBlogs();
    console.log(this.blogs);
  }
  handleBlogClick(id:string){
    console.log(id);
  }
}
