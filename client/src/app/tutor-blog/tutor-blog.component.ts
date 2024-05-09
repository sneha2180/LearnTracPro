import { Component } from '@angular/core';
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-tutor-blog',
  standalone: true,
  imports: [BlogListComponent],
  templateUrl: './tutor-blog.component.html',
  styleUrl: './tutor-blog.component.css'
})
export class TutorBlogComponent {

}
