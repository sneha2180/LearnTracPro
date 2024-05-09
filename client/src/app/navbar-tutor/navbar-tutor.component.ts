import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet ,NavigationEnd,Router} from '@angular/router';

@Component({
  selector: 'app-navbar-tutor',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './navbar-tutor.component.html',
  styleUrl: './navbar-tutor.component.css'
})
export class NavbarTutorComponent {
  tutorhome:any;
  tutorabout:any;
  tutorblogs:any;
  tutorcourses:any;
  tutordiscussions:any;
  tutoraccount:any;
  path:any;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.path = String(event.url);
        if(this.path == '/tutor/home'){
          this.tutorhome = true;
        }else if(this.path=='/tutor/about'){
          this.tutorabout = true;
        }else if(this.path=='/tutor/blogs'){
          this.tutorblogs = true;
        }else if(this.path=='/tutor/courses'){
          this.tutorcourses = true;
        }else if(this.path=='/tutor/discussions'){
          this.tutordiscussions = true;
        }
        else if(this.path=='tutor/account'){
          this.tutoraccount= true;
        }
      }
    });
  }
  isPathActive(path: string): boolean {
    return this.path === path;
  }
}
