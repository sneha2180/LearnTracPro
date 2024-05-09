import { Component,OnInit } from '@angular/core';
import Discussion from '../../model/Discussion';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-show-discussion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './show-discussion.component.html',
  styleUrl: './show-discussion.component.css'
})
export class ShowDiscussionComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  discussionId: any;
  discussion:any = new Discussion();
  newDiscussion:any;
  chapters:any;
  obj:any;
  commentForm = new FormGroup({
    content:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.discussionId = params['id'];
    });
    this.getDiscussion(this.discussionId);
  }
  async getDiscussion(id:string){
    this.newDiscussion = await this.discussion.getDiscussion(id);
    this.chapters = this.newDiscussion.chapters;
  }
  async handleComment(){
    try{
      this.obj = {
        content:this.commentForm.value.content,
        userId:this.getUserId()
      }
      const data = await this.discussion.createComment(this.obj,this.discussionId);
    }catch(e){
      console.log(e);
    }
  }
  onSubmit() {
    this.handleComment();
  }
  getUserId(){
    const user:any = localStorage.getItem('user');
    return JSON.parse(user)._id;
  }
}
