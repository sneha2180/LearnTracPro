import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import Student from '../../model/Student';
import Tutor from '../../model/Tutor';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private route: ActivatedRoute,private router: Router) { }
  student = new Student();
  tutor = new Tutor();
  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    role:new FormControl('',Validators.required)
  });
  obj:any;
  ngOnInit(): void {
      
  }
  async handleLogin(){
    try{
      this.obj = {
        name:this.userForm.value.name,
        email:this.userForm.value.email,
        password:this.userForm.value.password
      }
      let data;
      if(this.userForm.value.role==='student'){
        this.obj = {
          email: this.userForm.value.email,
          password: this.userForm.value.password,
          role: this.userForm.value.role,
          enrolledCourses:[]
        };
        data =await this.student.register(this.obj);
      }
      if(this.userForm.value.role==='tutor'){
        data =await this.tutor.register(this.obj);
      }
      if(data){
        this.router.navigate(['/signin']);
      }
    }catch(e){
      console.log(e);
    }
  }
  onSubmit() {
    this.handleLogin();
  }
}
