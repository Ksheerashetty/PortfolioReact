import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Ksheera Shetty, All rights reserved.
      </p>
      <a
        href="#home"
        className="p-2 rounded bg-purple-400 hover:bg-pink-600 text-pink-900 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
