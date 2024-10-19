import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';


export default function MainPage() {
    return (
      
        <div>
        
          <Navbar />
          <main>

            <HomePage />



            </main>
      </div>
   
  );
}