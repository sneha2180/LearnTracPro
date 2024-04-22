import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';
import { StudentAboutComponent } from './student-about/student-about.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentDiscussionsComponent } from './student-discussions/student-discussions.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StudentBlogsComponent } from './student-blogs/student-blogs.component';
import { ShowCourseComponent } from './show-course/show-course.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignupComponent,
    SigninComponent,
    StudentHomeComponent,
    TutorHomeComponent,
    StudentAboutComponent,
    StudentBlogsComponent,
    StudentCoursesComponent,
    StudentDiscussionsComponent,
    StudentAccountComponent,
    ShowCourseComponent,
    NavbarStudentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'dashboard-angular';
  user: any;
  path: string = '';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      if(this.user){
        this.user = JSON.parse(this.user);
        console.log(this.user.role);
      } 
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          const url = new URL(window.location.href);
          this.path = url.pathname;
          console.log(this.path)
        });
    }
    this.onLogin();
  }
  onLogin(){
    const userData = localStorage.getItem('user');
    if (userData !== null) {
      this.user = JSON.parse(userData);
      console.log(this.user);
    }
  }
}
