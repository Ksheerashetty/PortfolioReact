import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 
    bg-[rgba(15,1,29,0.8)] 
    backdrop-blur-sm border-b border-white/10 shadow-lg"
    >
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* <a
            href="#home"
            className="font-mono text-xl font-bold text-fuchsia-900"
          >
            {"<K"}
            <span className="text-violet-900">{"S/>"}</span>
          </a> */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold text-fuchsia-500 
             drop-shadow-[0_0_2px_rgba(217,70,239,0.7)] 
             hover:drop-shadow-[0_0_4px_rgba(217,70,239,0.9)] 
             transition"
          >
            {"<K"}
            <span
              className="text-violet-500 
               drop-shadow-[0_0_2px_rgba(139,92,246,0.7)] 
               hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.9)] 
               animate-glow"
            >
              {"S/>"}
            </span>
          </a>

          {/* mobile menu */}
          {/* address the height coverage */}
          {/* <div
            className="relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          > */}
          <div
            className="relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`transition-colors duration-300 ${
                  activeSection === item
                    ? "text-purple-500 font-semibold"
                    : "text-gray-300 hover:text-purple-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
