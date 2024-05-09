import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Blog from '../../model/Blog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit{
  constructor(private router: Router, private sanitizer: DomSanitizer) {}
  blogs:any;
  ngOnInit(): void {
    this.getAllBlogs();
  }
  async getAllBlogs(){
    this.blogs = await Blog.getAllBlogs();
    this.blogs = this.blogs.filter((course: any) => {
      return course.hasOwnProperty('title');
    });
    this.blogs.forEach((blog: any) => {
      if(blog.image){
        blog.safeImageUrl = this.sanitizeImageUrl(blog.image);
      }
    });
  }
  handleBlogClick(id:string){
    this.router.navigate([`/student/course/${id}`]);
  }
  handleBlogCreate(){
    this.router.navigate(['/student/blog/create']);
  }
  sanitizeImageUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
