import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentAboutComponent } from './student-about/student-about.component';
import { StudentBlogsComponent } from './student-blogs/student-blogs.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentDiscussionsComponent } from './student-discussions/student-discussions.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';
import { ShowCourseComponent } from './show-course/show-course.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent},
    {path:'student',component:StudentHomeComponent},
    {path:'student/home',component:StudentHomeComponent},
    {path:'student/about',component:StudentAboutComponent},
    {path:'student/blogs',component:StudentBlogsComponent},
    {path:'student/courses',component:StudentCoursesComponent},
    {path:'student/course/:id',component:ShowCourseComponent},
    {path:'student/blog/:id',component:ShowBlogComponent},
    {path:'student/discussions',component:StudentDiscussionsComponent},
    {path:'student/account',component:StudentAccountComponent},
    {path:'tutor',component:TutorHomeComponent}
];
