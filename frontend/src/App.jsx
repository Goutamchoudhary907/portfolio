import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 
                   dark:bg-gradient-to-br dark:from-[#0C1E25] dark:to-[#0C1E25]
                   transition-all duration-300 pt-2">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
