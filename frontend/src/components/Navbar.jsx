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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-900 shadow-sm">
      <div className="flex-1">
        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Portfolio
        </a>
      </div>

      <div className="flex items-center justify-center gap-8 flex-1 font-semibold text-xl">
        <a href="#aboutMe" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9]">
          About
        </a>
        <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9]">
          Projects
        </a>
        <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9]">
          Skills
        </a>
        <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-[#0C8DC9]">
          Contact
        </a>
      </div>

      <div className="flex-1 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
