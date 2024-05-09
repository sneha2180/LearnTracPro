import { Component,OnInit } from '@angular/core';
import { ShowEnrolledCourseListComponent } from '../show-enrolled-course-list/show-enrolled-course-list.component';

@Component({
  selector: 'app-student-account',
  standalone: true,
  imports: [ShowEnrolledCourseListComponent],
  templateUrl: './student-account.component.html',
  styleUrl: './student-account.component.css'
})
export class StudentAccountComponent implements OnInit{
  name:any;
  email:any;
  role:any;
  user:any;
  ngOnInit(): void {
      this.getUserDetails();
  }
  getUserDetails(){
    this.user = localStorage.getItem('user');
    if(this.user){
      this.name = JSON.parse(this.user).name;
      this.email = JSON.parse(this.user).email;
      this.role = JSON.parse(this.user).role;
    }
  }
  handleLogout(){
localStorage.removeItem("user");

  }
}
