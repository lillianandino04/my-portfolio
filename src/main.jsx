import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
//Main component: Home
import { Home } from './pages/Home.jsx' 
import { WorkExperience } from './pages/WorkExperience.jsx';
import { Projects } from './pages/Projects.jsx';
import { SkillsEd } from './pages/SkillsEd.jsx';
import { Leadership } from './pages/Leadership.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Define all the possible paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<SkillsEd />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </BrowserRouter> 
  </StrictMode>,
)