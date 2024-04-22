import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import Student from '../../model/Student';

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
        data =await this.student.register(this.obj);
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
