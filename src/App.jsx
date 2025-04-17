import FeatureCards from './components/FeatureCards';
import LogoSection from './sections/LogoSection';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AppShowcase from './sections/ShowcaseSection';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
