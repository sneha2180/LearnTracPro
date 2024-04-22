import { Component,OnInit } from '@angular/core';
import Discussion from '../../model/Discussion';

@Component({
  selector: 'app-student-discussions',
  standalone: true,
  imports: [],
  templateUrl: './student-discussions.component.html',
  styleUrl: './student-discussions.component.css'
})
export class StudentDiscussionsComponent implements OnInit{
  discussions:any;
  ngOnInit(): void {
    this.getAllDiscussions();

  }
  async getAllDiscussions(){
    this.discussions = await Discussion.getAllDiscussions();
  }
  handleDiscussionClick(id:string){
    console.log(id);
  }
}
