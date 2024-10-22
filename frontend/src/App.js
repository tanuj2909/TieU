import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import EvaluateYourself from './pages/EvaluateYourself'
import Books from './pages/Books'
import JoinProgram from './pages/JoinPrograms'
import Mentors from './pages/Mentors'
import Community from './pages/Community'
import Resource from './pages/ResourcePage'
import Tools from './pages/Tools'


import IndianBusinessType from './country/India/BusinessTypeIndia'
import EcommerceResourceIndia from './country/India/EcommerceResources'


import USABusinessType from './country/Usa/BusinessTypesUsa'



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
          <Route path="/Tools" element={<Tools/>} />
          <Route path="/Community" element={<Community/>} />
          <Route path="/Resource" element={<Resource/>} />

          /Resource/EcommerceIndia
      
          <Route path="/Resource/India" element={<IndianBusinessType/>} />
          <Route path="/Resource/EcommerceResourceIndia" element={<EcommerceResourceIndia/>} />



          <Route path="/Resource/Usa" element={<USABusinessType/>} />
        
      

      </Routes>

      
     
</Router>
    </>
  );
}

export default App;
