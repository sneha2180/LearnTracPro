import { Component } from '@angular/core';
import { DiscussionListComponent } from '../discussion-list/discussion-list.component';

@Component({
  selector: 'app-tutor-discussions',
  standalone: true,
  imports: [DiscussionListComponent],
  templateUrl: './tutor-discussions.component.html',
  styleUrl: './tutor-discussions.component.css'
})
export class TutorDiscussionsComponent {

}
