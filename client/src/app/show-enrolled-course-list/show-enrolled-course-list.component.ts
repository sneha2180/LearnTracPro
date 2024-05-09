import { Component,OnInit } from '@angular/core';
import Course from '../../model/Course';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-enrolled-course-list',
  standalone: true,
  imports: [],
  templateUrl: './show-enrolled-course-list.component.html',
  styleUrl: './show-enrolled-course-list.component.css'
})
export class ShowEnrolledCourseListComponent implements OnInit{
  constructor(private router: Router, private sanitizer: DomSanitizer ) {}
  courses:any;
  enrolledCourses:any=[];
  ngOnInit(): void {
    this.getAllCourses();
    this.getEnrolledCourses();
    console.log(this.enrolledCourses);
 }
 async getAllCourses(){
   this.courses = await Course.getAllCourses();
   this.courses = this.courses.filter((course: any) => {
     return course.hasOwnProperty('title');
   });
   this.courses.forEach((course: any) => {
     course.safeImageUrl = this.sanitizeImageUrl(course.image);
   });
   this.courses = this.courses.filter((course:any) => this.enrolledCourses.includes(course._id));
   console.log(this.courses);
 }
 handleCourseClick(id:string){
   console.log(id);
 }
 sanitizeImageUrl(url: string): SafeResourceUrl {
   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
 }
 getEnrolledCourses(){
   const user = localStorage.getItem('user') || null;
   const userobj = user && JSON.parse(user);
   this.enrolledCourses = userobj && userobj.enrolledCourses;
 }
}
