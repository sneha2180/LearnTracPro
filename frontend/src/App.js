import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import CoursesComponent from "./components/CoursesComponent";
import DiscussionComponent from "./components/DiscussionComponent";
import GptComponent from "./components/GptComponent";
import QuizComponent from "./components/QuizComponent";
import SignInComponent from "./components/SignInComponent";
import StudyGroupComponent from "./components/StudyGroupComponent";
import SignUpComponent from "./components/SignUpComponent";

function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/home" exact element={<HomeComponent />} />
          <Route path="/about" exact element={<AboutComponent />} />
          <Route path="/courses" exact element={<CoursesComponent />} />
          <Route path="/quiz" exact element={<QuizComponent />} />
          <Route path="/discussion" exact element={<DiscussionComponent />} />
          <Route path="/gpt" exact element={<GptComponent />} />
          <Route path="/study-group" exact element={<StudyGroupComponent />} />
          <Route path="/signin" exact element={<SignInComponent />} />
          <Route path="/signup" exact element={<SignUpComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
