import { useEffect } from "react";

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(15,1,29,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            K<span className="text-violet-500">.S</span>
          </a>
          {/* mobile menu */}
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
              className="text-gray-300 hover:text-white transition-colors hover:border-b-2 border-b-blue-400"
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
