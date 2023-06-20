
import About from './Components/About/About'
import ContactSection from './Components/ContactSection/ContactSection'
import CourseSection from './Components/CourseSection/CourseSection'

import HomeHero from './Components/HomeHero/HomeHero'

import ProjectsSection from './Components/ProjectsSection/ProjectsSection'
import SkillsSection from './Components/SkillsSection.jsx/SkillsSection'
import ToolsSection from './Components/ToolsSection/ToolsSection'

function HomePage() {

  return (
    <>
      <HomeHero></HomeHero>
      <About></About>
      <SkillsSection></SkillsSection>
      <ToolsSection></ToolsSection>
      <CourseSection></CourseSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </>
  )
}

export default HomePage
