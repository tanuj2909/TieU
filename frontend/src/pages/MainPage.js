import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';
import KeyFreatures from './MainPage/KeyFeatures'
import PersonalisedBot from './MainPage/PersonalisedBot'
import ReviewSection from './MainPage/ReviewSection'
import Footer from './MainPage/Footer'
import AIsection from './MainPage/AIsection'

import Chatbot from '../Aisection/AIChatbot';



export default function MainPage() {
  

    return (
      
        <div>
        
          <Navbar />
          <main>

            <HomePage />
            <Chatbot />
            <KeyFreatures />

            {/* <PersonalisedBot /> */}


          <AIsection />
          <ReviewSection />
          <Footer />


            </main>
      </div>
   
  );
}