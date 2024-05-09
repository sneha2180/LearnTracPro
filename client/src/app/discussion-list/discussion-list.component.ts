import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Discussion from '../../model/Discussion';

@Component({
  selector: 'app-discussion-list',
  standalone: true,
  imports: [],
  templateUrl: './discussion-list.component.html',
  styleUrl: './discussion-list.component.css'
})
export class DiscussionListComponent implements OnInit{
  constructor(private router: Router) {}
  discussions:any;
  ngOnInit(): void {
      this.getAllDiscussions();
  }
  async getAllDiscussions(){
    this.discussions = await Discussion.getAllDiscussions();
  }
  handleDiscussionClick(id:string){
    this.router.navigate([`student/discussion/${id}`])
  }
  handleDiscussionCreate(){
    this.router.navigate(['/student/discussion/create']);
  }
}
