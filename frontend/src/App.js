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

//TOOLS PAGE
import CrmTool from '../src/ToolsPage/CRMtool'
import LeaveMangement from '../src/ToolsPage/LeaveManagement'
import Analytics from '../src/ToolsPage/Analytics'


//COURSES PAGE
import DigitalMarketingCourse from '../src/Tutorials/Video/DigitalMarketingCourse'


// ASSIGNMETS SECTION
import FinancialPlanning from '../src/Tutorials/Assignment/FinancialPlanning'

// CASE STUDY
import LocalCafeSuccessStory from '../src/Tutorials/CaseStudy/LoaclCafe'

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

  =

      {/* RESOURCE SECTION INDIA */}
          <Route path="/Resource/India" element={<IndianBusinessType/>} />
          <Route path="/Resource/EcommerceResourceIndia" element={<EcommerceResourceIndia/>} />
          <Route path="/Resource/ITandSoftwareIndia" element={<ItandSoftwareIndia/>} />

      
         

     {/* RESOURCE SECTION USA */}

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


        {/* TOOLS PAGE */}
        <Route path="/Tools/CRM" element={<CrmTool />} />
        <Route path="/Tools/LeaveMangement" element={<LeaveMangement/>} />
        <Route path="/Tools/Analytics" element={< Analytics/>} />


        {/* COURSE PAGES */}
        <Route path="/Course/DigitalMarketing" element={<DigitalMarketingCourse />} />

        {/* ASSIGNMENTS SECTION */}
        <Route path="/Assignments/FinancialPlanning" element={<FinancialPlanning />} />

        {/* CASE STUDIES */}
        <Route path="/CaseStudy/LocalCafe" element={<LocalCafeSuccessStory />} />

      </Routes>

      
     
</Router>
    </>
  );
}

export default App;
