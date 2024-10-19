import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import EvaluateYourself from './pages/EvaluateYourself'


function App() {
  return (
    <>
     <Router>
        <Routes>
         
          <Route path="/" element={<MainPage/>} />
          <Route path="/EvaluateYourself" element={<EvaluateYourself/>} />

        
      

      </Routes>

      
     
</Router>
    </>
  );
}

export default App;
