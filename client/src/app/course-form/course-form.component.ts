import { Component,ElementRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import Course from '../../model/Course';
import Chapter from '../../model/Chapter';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent {
  @ViewChild('inputFiles') inputFiles!: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router) {}
  // imageUrl: string = "https://cdn.pixabay.com/photo/2023/10/21/22/00/chain-8332727_1280.jpg";
  obj: any;
  course: any = new Course();
  chapter = new Chapter();
  chapterCreateButton: any = false;
  showChapterForm: any = false;
  id: any;
  chapters:any=[];
  courseForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    instructor: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    imageUrl: new FormControl(' ',Validators.required)
  });
  chapterForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    video:new FormControl('',Validators.required)
  });
  async handleCourse() {
    try {
      var data;
      if(this.courseForm.value.title!=null){
        this.obj = {
          title: this.courseForm.value.title,
          description: this.courseForm.value.description,
          instructor: this.courseForm.value.instructor,
          duration: this.courseForm.value.duration,
          category: this.courseForm.value.category,
          level: this.courseForm.value.level,
          prerequisites: [],
          queries: [],
          chapters: [],
          resources: [],
          image:this.courseForm.value.imageUrl
        };
        data = await this.course.createCourse(this.obj);
      }
      if (data) {
        this.id = data._id;
        console.log(this.id);
        this.chapterCreateButton = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
  onSubmit() {
    this.handleCourse();
  }
  handleChapterCreate() {
    this.chapterCreateButton = false;
    this.showChapterForm = true;
  }
  async handleChapter() {
    try {
      this.obj = {
        title: this.chapterForm.value.title,
        content: this.chapterForm.value.content,
        video:this.chapterForm.value.video,
        resources: [],
      };
      const data = await this.chapter.createChapter(this.obj, this.id);
      if (data) {
        this.chapters.push(this.obj);
        this.chapterForm.value.title='';
        this.chapterForm.value.content='';
        this.chapterForm.value.video='';
        this.chapterCreateButton = true;
        this.showChapterForm = false;
      }
    } catch (e) {
      console.log(e);
    }
  }
  onChapterSubmit() {
    this.handleChapter();
  }
}
