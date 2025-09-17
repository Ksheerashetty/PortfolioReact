import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./Components/LoadingScreen";
import { Navbar } from "./Components/Navbar";
import { MobileMenu } from "./Components/MobileMenu";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Projects from "./Components/sections/Projects";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/sections/Footer";
import StarBackground from "./Components/StarBackground";
import Skills from "./Components/Skills";
import { Toaster } from "./Components/ui/toaster";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Toaster />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-800 ?${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-purple-600`}
      >
        <StarBackground />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

// handwriting
