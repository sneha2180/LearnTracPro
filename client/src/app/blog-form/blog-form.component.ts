import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import Blog from '../../model/Blog';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  constructor(private route: ActivatedRoute,private router: Router) { }
  obj:any;
  blog:any = new Blog();
  blogForm = new FormGroup({
    title:new FormControl('',Validators.required),
    content:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)
  });
  async handleBlog(){
    try{
      this.obj = {
        title:this.blogForm.value.title,
        content:this.blogForm.value.content,
        image:this.blogForm.value.image,
        userId:this.getUserId()
      }
      const data = await this.blog.createBlog(this.obj);
      
      if(data){
        this.router.navigate(['/student/blogs']);
      }
    }catch(e){
      console.log(e);
    }
  }
  onSubmit() {
    this.handleBlog();
  }
  getUserId(){
    const user:any = localStorage.getItem('user');
    return JSON.parse(user)._id;
  }
}
