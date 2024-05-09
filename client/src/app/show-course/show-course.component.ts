import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Course from '../../model/Course';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Student from '../../model/Student';

@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css',
})
export class ShowCourseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  courseId: any;
  course: any = new Course();
  newCourse: any;
  chapters: any;
  chapter: any;
  chapterno: any = 0;
  noofchapters: any;
  studentId:any;
  student:any = new Student();
  courses:any;
  enrolledCourses:any=[];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['id'];
      // You can use this.courseId to fetch data or perform other operations based on the ID
    });
    this.getStudentId();
    this.getCourse(this.courseId);
    this.getAllCourses();
       this.getEnrolledCourses();
  }
  async getCourse(id: string) {
    this.newCourse = await this.course.getCourse(id);
    this.newCourse.safeImageUrl = this.sanitizeImageUrl(this.newCourse.image);
    this.chapters = this.newCourse.chapters;
    this.chapters.forEach((chapter: any) => {
      chapter.safeVideoUrl = this.sanitizeImageUrl(chapter.video);
    });
    console.log(this.chapters);
    this.noofchapters = this.chapters.length;
    this.chapter = this.chapters[this.chapterno];
    console.log(this.noofchapters);
  }

  handleNextChapter() {
    this.chapterno = this.chapterno + 1;
    this.chapter = this.chapters[this.chapterno];
  }
  handlePreviousChapter() {
    this.chapterno = this.chapterno - 1;
    this.chapter = this.chapters[this.chapterno];
  }

  sanitizeImageUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onEnroll() {
    this.enrollCourse();
  }
  async enrollCourse(){
    const obj = {
      "studentId":this.studentId,
      "courseId":this.courseId
    }
    const response = await this.student.enrollCourse(obj);
    console.log(response);
  }
  getStudentId() {
    const user = localStorage.getItem('user');
    const userObj = user && JSON.parse(user);
    this.studentId = userObj && userObj._id;
  }
  async getAllCourses(){
    this.courses = await Course.getAllCourses();
    this.courses = this.courses.filter((course: any) => {
      return course.hasOwnProperty('title');
    });
    this.courses.forEach((course: any) => {
      course.safeImageUrl = this.sanitizeImageUrl(course.image);
    });
    this.courses = this.courses.filter((course:any) => !this.enrolledCourses.includes(course._id));
    console.log(this.courses);
  }
  getEnrolledCourses(){
    const user = localStorage.getItem('user') || null;
    const userobj = user && JSON.parse(user);
    this.enrolledCourses = userobj && userobj.enrolledCourses;
  }
}
