import React from "react";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/discussion">Discussions</Link>
        <Link to="/gpt">Ask GPT-3</Link>
        <Link to="/study-group">Study Group</Link>
        <Link to="/signin">Sign In</Link>
      </div>
      <div>
        <div>WHAT IS LearnTracPro ?</div>
        <div>Welcome to our Learning Community Platform, where knowledge knows no boundaries! We believe in the power of collective learning and collaboration. Join our vibrant community of learners, educators, and experts to embark on a transformative educational journey. Access a diverse range of resources, engage in lively discussions, and unleash your potential through shared learning experiences. Let's connect, grow, and inspire each other to reach new heights of knowledge and skills. Together, we can make learning an exciting and enriching adventure. Join us today and let's learn, connect, and thrive together!</div>
      </div>
    </div>
  );
}

export default HomeComponent;
