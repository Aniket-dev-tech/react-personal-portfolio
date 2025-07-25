import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';  
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <SkillSection />
      <Projects />
      <About />
      <ExperienceTimeline />
      {/* Add other components like Contact, Footer, etc. here */}
    </div>
  );
}

export default App;