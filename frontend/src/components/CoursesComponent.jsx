import React from 'react'
import CourseComponent from './CourseComponent';
import coursesData from './coursesData.json';
import NavbarComponent from './NavbarComponent';

function CoursesComponent() {
  return (
    <div className="courses">
      <NavbarComponent/>
      <h1>Available Courses</h1>
      <div className="course-list">
        {coursesData.courses.map(course => (
          <CourseComponent key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesComponent