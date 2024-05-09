import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Blog from '../../model/Blog';
import Student from '../../model/Student';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-blog',
  standalone: true,
  imports: [],
  templateUrl: './show-blog.component.html',
  styleUrl: './show-blog.component.css'
})
export class ShowBlogComponent implements OnInit{
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  blogId: any;
  blog:any = new Blog();
  newBlog:any;
  student:any = new Student();
  author:any;
  content:any;
  paragraphs:any=[];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params['id'];
      // You can use this.courseId to fetch data or perform other operations based on the ID
    });
    this.getBlog(this.blogId);
  }
  async getBlog(id:string){
    this.newBlog = await this.blog.getBlog(id);
    this.newBlog.safeImageUrl = this.sanitizeImageUrl(this.newBlog.image);
    this.content = this.newBlog.content
    this.splitIntoParagraphs(this.content);
  }
  splitIntoParagraphs(input: string) {
    const sentences = input.split('.');
    for (let i = 0; i < sentences.length; i += 5) {
      const paragraph = sentences.slice(i, i + 5).join('. ');
      this.paragraphs.push(paragraph);
    }
  }
  sanitizeImageUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
