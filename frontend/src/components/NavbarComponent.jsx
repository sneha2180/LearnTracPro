import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/discussion">Discussion</Link>
      <Link to="/gpt">Chat GPT</Link>
      <Link to="/study-group">Study Group</Link>
    </div>
  )
}

export default NavbarComponent