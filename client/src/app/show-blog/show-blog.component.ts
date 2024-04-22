import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Blog from '../../model/Blog';
import Student from '../../model/Student';

@Component({
  selector: 'app-show-blog',
  standalone: true,
  imports: [],
  templateUrl: './show-blog.component.html',
  styleUrl: './show-blog.component.css'
})
export class ShowBlogComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  blogId: any;
  blog:any = new Blog();
  newBlog:any;
  student:any = new Student();
  author:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params['id'];
      // You can use this.courseId to fetch data or perform other operations based on the ID
    });
    this.getBlog(this.blogId);
  }
  async getBlog(id:string){
    this.newBlog = await this.blog.getBlog(id);
    console.log(this.newBlog);
    if(this.newBlog){
      this.author = await this.student.getStudent(this.newBlog.userId);
      console.log(this.author);
    }
  }
}
