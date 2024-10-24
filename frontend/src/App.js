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
import ItandSoftwareIndia from './country/India/ITandSoftwareIndustry'

import USABusinessType from './country/Usa/BusinessTypesUsa'


// AI SECTION INTRO PAGES
import Outboundintro from '../src/Aisection/Outboundintro'
import Inboundinto from '../src/Aisection/Inboundintro'
import ChatSDRintro from '../src/Aisection/ChatsdrIntro'
import LinkdinSDRintro from '../src/Aisection/LinkdinSdrIntro'
import AiphoneAssistantintro from '../src/Aisection/AIphoneassistantintro'
import AiRevOps from '../src/Aisection/AIrevopsintro'

//AI SECTION EXPLORE PAGES
import AIoutboundExplore from '../src/Aisection/AIoutboundExplore'
import AIinboundExplore from './Aisection/AIinboundExplore'


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
          <Route path="/Resource/ITandSoftwareIndia" element={<ItandSoftwareIndia/>} />

          /EricaAITools/AIOutboundSDR
         



          <Route path="/Resource/Usa" element={<USABusinessType/>} />


        {/* AI SECTION INTRO PAGES */}
          <Route path="/EricaAITools/AIOutboundSDR" element={<Outboundintro />} />
          <Route path="/EricaAITools/AIInboundSDR" element={<Inboundinto />} />
          <Route path="/EricaAITools/AIChatSDR" element={<ChatSDRintro />} />
          <Route path="/EricaAITools/AILinkedInSDR" element={<LinkdinSDRintro />} />
          <Route path="/EricaAITools/AIPhoneAssistant" element={<AiphoneAssistantintro/>} />
          <Route path="/EricaAITools/AIRevenueOperations" element={<AiRevOps />} />

        {/* AI SECTION EXPLORE PAGES */}
        <Route path="/EricaAITools/AIOutboundSdrExplore" element={<AIoutboundExplore />} />
        <Route path="/EricaAITools/AIinboundExplore" element={<AIinboundExplore />} />
        
      

      </Routes>

      
     
</Router>
    </>
  );
}

export default App;
