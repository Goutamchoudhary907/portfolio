import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import OnekoCat from './components/common/OnekoCat';
import { Quote } from './components/common/Quote';
import { ThemeProvider } from './components/common/ThemeProviders';
import ReactLenis from 'lenis/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import JourneyPage from './pages/JourneyPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import WorkExperiencePage from './pages/WorkExperience';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <BrowserRouter>
        <ReactLenis root>
          <div className="font-hanken-grotesk antialiased">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/work-experience" element={<WorkExperiencePage />} />
            </Routes>
            <OnekoCat />
            <Quote />
            <Footer />
          </div>
        </ReactLenis>
      </BrowserRouter>
    </ThemeProvider>
  );
}