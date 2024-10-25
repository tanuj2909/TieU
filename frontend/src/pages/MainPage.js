import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';
import KeyFreatures from './MainPage/KeyFeatures'
import PersonalisedBot from './MainPage/PersonalisedBot'
import ReviewSection from './MainPage/ReviewSection'
import Footer from './MainPage/Footer'
import AIsection from './MainPage/AIsection'



export default function MainPage() {
  

    return (
      
        <div>
        
          <Navbar />
          <main>

            <HomePage />
            <KeyFreatures />

            {/* <PersonalisedBot /> */}


          <AIsection />
          <ReviewSection />
          <Footer />


            </main>
      </div>
   
  );
}