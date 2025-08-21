import { useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./Components/LoadingScreen";
import { Navbar } from "./Components/Navbar";
import { MobileMenu } from "./Components/MobileMenu";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-800 ?${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-purple-600`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
