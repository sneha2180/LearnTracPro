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
import { ShowDiscussionComponent } from './show-discussion/show-discussion.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { DiscussionFormComponent } from './discussion-form/discussion-form.component';
import { TutorAboutComponent } from './tutor-about/tutor-about.component';
import { TutorAccountComponent } from './tutor-account/tutor-account.component';
import { TutorBlogComponent } from './tutor-blog/tutor-blog.component';
import { TutorCoursesComponent } from './tutor-courses/tutor-courses.component';
import { TutorDiscussionsComponent } from './tutor-discussions/tutor-discussions.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent},
    {path:'student',component:StudentHomeComponent},
    {path:'student/home',component:StudentHomeComponent},
    {path:'tutor/home',component:TutorHomeComponent},
    {path:'student/about',component:StudentAboutComponent},
    {path:'student/blogs',component:StudentBlogsComponent},
    {path:'student/courses',component:StudentCoursesComponent},
    {path:'student/course/:id',component:ShowCourseComponent},
    {path:'student/blog/create',component:BlogFormComponent},
    {path:'student/blog/:id',component:ShowBlogComponent},
    {path:'student/discussion/create',component:DiscussionFormComponent},
    {path:'student/discussion/:id',component:ShowDiscussionComponent},
    {path:'student/discussions',component:StudentDiscussionsComponent},
    {path:'student/account',component:StudentAccountComponent},
    {path:'tutor',component:TutorHomeComponent},
    {path:'tutor/about',component:TutorAboutComponent},
    {path:'tutor/courses',component:TutorCoursesComponent},
    {path:'tutor/course/create',component:CourseFormComponent},
    {path:'tutor/blogs',component:TutorBlogComponent},
    {path:'tutor/discussions',component:TutorDiscussionsComponent},
    {path:'tutor/account',component:TutorAccountComponent},
    {path:'student/chat',component:ChatbotComponent}
];
