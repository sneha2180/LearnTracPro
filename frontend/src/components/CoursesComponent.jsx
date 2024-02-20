import React from 'react'
import CourseComponent from './CourseComponent';
import coursesData from './coursesData.json';

function CoursesComponent() {
  return (
    <div className="courses">
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