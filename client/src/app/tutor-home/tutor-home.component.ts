import { Component } from '@angular/core';
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-tutor-home',
  standalone: true,
  imports: [BlogListComponent],
  templateUrl: './tutor-home.component.html',
  styleUrl: './tutor-home.component.css'
})
export class TutorHomeComponent {

}
