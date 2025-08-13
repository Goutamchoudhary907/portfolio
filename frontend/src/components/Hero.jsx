import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
    const phrases = [
    "Full Stack Developer",
    "Skilled in React & Node.js", 
    "Backend Enthusiast"
  ];
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50; 
    const pauseBetween = 5000; 
    
    let timeout;

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      
    } else if (isDeleting && currentCharIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, deletingSpeed);
      
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetween);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setCurrentCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentPhraseIndex, isDeleting]);


  return (
     <section className="flex flex-col items-center justify-center mt-50 px-4 text-center 
            ">     
           <div className="bg-blue-100 dark:bg-[#71a6c1] text-gray-900 px-4 py-2 rounded-full text-2xl font-medium mb-8 shadow-sm">
        👋 Hello, I'm
      </div>

    <h1 className="text-4xl md:text-6xl font-extrabold text-[#338FEB] dark:text-[#0C8DC9] dark:opacity-80 mb-6">
    Goutam Choudhary
      </h1>

     <h2 className="text-4xl md:text-5xl font-semibold text-[#2D8CEA] dark:text-[#0E96D6] dark:opacity-80 mb-12">
  {displayText}
      <span className="animate-pulse">|</span>
      </h2>

      <p className="text-black dark:text-[#A3A3A3] max-w-4xl text-2xl mb-10">
        Building full-stack web applications with scalable backends and intuitive interfaces. Passionate about crafting secure, efficient solutions end-to-end.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="mailto:goutamchoudhary907@gmail.com"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-[#0EA3E8] dark:hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium shadow transition"
  >
          <MdMail size={18} /> Contact Me
        </a>

        <a
          href="https://github.com/Goutamchoudhary907"
          target="_blank"
          rel="noopener noreferrer"
       className="flex items-center gap-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-200 dark:hover:bg-gray-800 transition"
   >
          <FaGithub size={18} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/goutamchoudhary"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-200 dark:hover:bg-gray-800 transition"
  >
          <FaLinkedin size={18} /> LinkedIn
        </a>

        <a
          href="GoutamChoudhary_Resume.pdf"
          download
        className="flex items-center gap-2 bg-blue-200 dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-300 dark:hover:bg-gray-800 transition"
  >
          <HiDownload size={18} /> Download CV
        </a>
      </div>
    </section>
  );
}