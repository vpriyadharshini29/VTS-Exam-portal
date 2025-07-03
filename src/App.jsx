// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Designing from './pages/Designing';
import Profile from "./pages/Profile";
import QuestionsPage1 from "./pages/QuestionsPage1";
import QuestionsPage2 from "./pages/QuestionsPage2";
import SubmissionSuccess from "./pages/SubmissionSuccess";
import ExamPage from './pages/ExamPage';
import OnlinePage from "./pages/OnlinePage";
import OfflinePage from "./pages/OfflinePage";
import Result from './pages/Result';
import Development from "./pages/Development";
import Overview from './pages/Overview';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/designing" element={<Designing />} />
        <Route path="/development" element={<Development />} />
         <Route path="/profile" element={<Profile />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/questions/page1" element={<QuestionsPage1 />} />
        <Route path="/questions/page2" element={<QuestionsPage2 />} />
        <Route path="/exam/submitted" element={<SubmissionSuccess />} />
        <Route path="/designing/online" element={<OnlinePage />} />
        <Route path="/designing/offline" element={<OfflinePage />} />
         <Route path="/result" element={<Result />} />
    
      </Routes>
    </Router>
  );
};

export default App;
