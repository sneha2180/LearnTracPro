import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-account',
  standalone: true,
  imports: [],
  templateUrl: './tutor-account.component.html',
  styleUrl: './tutor-account.component.css'
})
export class TutorAccountComponent implements OnInit{
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
    localStorage.removeItem('user');
  }
}
