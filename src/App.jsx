import FeatureCards from './components/FeatureCards';
import LogoSection from './sections/LogoSection';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AppShowcase from './sections/ShowcaseSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  );
};

export default App;
