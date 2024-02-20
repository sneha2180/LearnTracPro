import React from 'react'

function CourseComponent({ course }) {
  return (
    <div>
      <div>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Level: {course.level}</p>
      </div>
    </div>
  )
}

export default CourseComponent