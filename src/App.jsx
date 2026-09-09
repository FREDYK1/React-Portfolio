import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection';
import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection';
import Certifications from './sections/Certifications';
import TechStack from './sections/TechStack';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <Certifications />
      <TechStack />
      <Leadership />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App