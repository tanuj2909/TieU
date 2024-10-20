import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import EvaluateYourself from './pages/EvaluateYourself'
import Books from './pages/Books'
import JoinProgram from './pages/JoinPrograms'
import Mentors from './pages/Mentors'
import Community from './pages/Community'



function App() {
  return (
    <>
     <Router>
        <Routes>
         
          <Route path="/" element={<MainPage/>} />
          <Route path="/EvaluateYourself" element={<EvaluateYourself/>} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/JoinProgram" element={<JoinProgram/>} />
          <Route path="/Mentors" element={<Mentors/>} />
          <Route path="/Community" element={<Community/>} />



        
      

      </Routes>

      
     
</Router>
    </>
  );
}

export default App;
