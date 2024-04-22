import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Student from '../../model/Student';
import { Router } from '@angular/router';
import StudentSession from '../../common/Session';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private router: Router) {}
  obj: any;
  student: any = new Student();
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });
  async handleSubmit() {
    try {
      this.obj = {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        role: this.userForm.value.role,
      };
      if (this.obj.role == 'student') {
        const data = await this.student.signin(this.obj);
        const user = {...data,role:'student'};
        if (data) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/student/home']);
        }
      }
    } catch (e) {}
  }
  onSubmit() {
    this.handleSubmit();
  }
}
