import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Navigation from "./Navigation";
import { useState } from "react";
import profile from "./assets/profilovka vr.png";
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleSidebar = (state) => setIsMenuOpen(state);

  return (
    <>
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      <div className="neon-fog-circle2"></div>
      <div className="neon-fog-circle3"></div>
      <div className="neon-fog-circle4"></div>
      <div className="landingpage">
        <Navigation
          isMenuOpen={isMenuOpen}
          onToggleMenu={toggleSidebar}
          profile={profile}
        />
        <HeroSection profile={profile} />
        <Skills />
        <Projects />

        <Contact />
      </div>
    </>
  );
};
export default LandingPage;
