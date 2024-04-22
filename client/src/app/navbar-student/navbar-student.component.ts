import { Component,OnInit } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet ,NavigationEnd,Router} from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar-student',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,SignupComponent],
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.css'
})
export class NavbarStudentComponent {
  signup:any;
  signin:any;
  studenthome:any;
  studentabout:any;
  studentblogs:any;
  studentcourses:any;
  studentdiscussions:any;
  studentaccount:any;
  tutorhome:any;
  path:any;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.path = String(event.url);
        if(this.path=='/signup'){
          this.signup = true;
        }else if(this.path == '/signin'){
          this.signin = true;
        }else if(this.path == '/student/home'){
          this.studenthome = true;
        }else if(this.path=='/student/about'){
          this.studentabout = true;
        }else if(this.path=='/student/blogs'){
          this.studentblogs = true;
        }else if(this.path=='/student/courses'){
          this.studentcourses = true;
        }else if(this.path=='/student/discussions'){
          this.studentdiscussions = true;
        }
        else if(this.path=='student/account'){
          this.studentaccount= true;
        }
      }
    });
  }
  isPathActive(path: string): boolean {
    return this.path === path;
  }
}
