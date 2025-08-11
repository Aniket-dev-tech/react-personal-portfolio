import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Analytics />
      <Navbar />
      <Hero />
      <SkillSection />
      <Projects />
      <About />
      <ExperienceTimeline />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
