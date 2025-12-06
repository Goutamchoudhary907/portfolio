import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import '../../src/App.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="flex-1">
        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Goutam Choudhary
        </a>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 font-semibold text-lg">
        <a href="#aboutMe" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9] transition-colors">
          About
        </a>
        <a href="#services" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9] transition-colors">
          Services
        </a>
        <a href="#clientWork" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9] transition-colors">
          Client Work
        </a>
        <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9] transition-colors">
          Projects
        </a>
        <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9] transition-colors">
          Skills
        </a>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <a
          href="#contact"
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Hire Me →
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}