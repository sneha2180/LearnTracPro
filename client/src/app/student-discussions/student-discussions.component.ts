import { Component,OnInit } from '@angular/core';
import Discussion from '../../model/Discussion';
import { DiscussionListComponent } from '../discussion-list/discussion-list.component';

@Component({
  selector: 'app-student-discussions',
  standalone: true,
  imports: [DiscussionListComponent],
  templateUrl: './student-discussions.component.html',
  styleUrl: './student-discussions.component.css'
})
export class StudentDiscussionsComponent{
  
}
