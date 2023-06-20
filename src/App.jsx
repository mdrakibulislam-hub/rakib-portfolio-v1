
import './App.css'
import About from './Components/About/About'
import CourseSection from './Components/CourseSection/CourseSection'
import HomeHero from './Components/HomeHero/HomeHero'
import Navbar from './Components/Navbar/Navbar'
import SkillsSection from './Components/SkillsSection.jsx/SkillsSection'
import ToolsSection from './Components/ToolsSection/ToolsSection'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <About></About>
      <SkillsSection></SkillsSection>
      <ToolsSection></ToolsSection>
      <CourseSection></CourseSection>
    </>
  )
}

export default App
