import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import Discussion from '../../model/Discussion';

@Component({
  selector: 'app-discussion-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './discussion-form.component.html',
  styleUrl: './discussion-form.component.css'
})
export class DiscussionFormComponent {
  constructor(private route: ActivatedRoute,private router: Router) { }
  obj:any;
  discussion:any = new Discussion();
  discussionForm = new FormGroup({
    title: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
  })
  async handleDiscussion(){
    try{
      this.obj = {
        title:this.discussionForm.value.title,
        content:this.discussionForm.value.content,
        userId:this.getUserId()
      }
      const data = await this.discussion.createDiscussion(this.obj);
      
      if(data){
        this.router.navigate(['/student/discussions']);
      }
    }catch(e){
      console.log(e);
    }
  }
  onSubmit() {
    this.handleDiscussion();
  }
  getUserId(){
    const user:any = localStorage.getItem('user');
    return JSON.parse(user)._id;
  }
}
