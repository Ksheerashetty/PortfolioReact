import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 
    bg-white dark:bg-[rgba(15,1,29,0.8)] 
    backdrop-blur-sm border-b border-gray-200 dark:border-white/10 shadow-lg"
    >
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-fuchsia-900"
          >
            {"<K"}
            <span className="text-violet-900">{"S/>"}</span>
          </a>
          <ThemeToggle />
          {/* mobile menu */}
          {/* address the height coverage */}
          <div
            className="relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
