import StarBackground from "./StarBackground";
export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 w-full bg-black z-40 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-1000 ease-in-out md:hidden ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <StarBackground />
      <button
        onClick={() => setIsMenuOpen(false)}
        className="text-purple-700 text-5xl right-4 top-3 absolute focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <div className="flex flex-col gap-24 font-extrabold text-2xl text-purple-700">
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className={` hover:[text-shadow:_-1px_-1px_0_#c084fc,_1px_-1px_0_#c084fc,_-1px_1px_0_#c084fc,_1px_1px_0_#c084fc,_0_0_10px_rgba(192,132,252,0.8)]
transform transition-transform duration-1000 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-black hover:[text-shadow:_-1px_-1px_0_#c084fc,_1px_-1px_0_#c084fc,_-1px_1px_0_#c084fc,_1px_1px_0_#c084fc,_0_0_10px_rgba(192,132,252,0.8)] transform transition-transform duration-1000 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-black hover:[text-shadow:_-1px_-1px_0_#c084fc,_1px_-1px_0_#c084fc,_-1px_1px_0_#c084fc,_1px_1px_0_#c084fc,_0_0_10px_rgba(192,132,252,0.8)] transform transition-transform duration-1000 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-black hover:[text-shadow:_-1px_-1px_0_#c084fc,_1px_-1px_0_#c084fc,_-1px_1px_0_#c084fc,_1px_1px_0_#c084fc,_0_0_10px_rgba(192,132,252,0.8)] transform transition-transform duration-1000 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-black hover:[text-shadow:_-1px_-1px_0_#c084fc,_1px_-1px_0_#c084fc,_-1px_1px_0_#c084fc,_1px_1px_0_#c084fc,_0_0_10px_rgba(192,132,252,0.8)] transform transition-transform duration-1000 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
