import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";

export default function Hero() {
  const phrases = [
    "Full Stack Developer",
    "Building Production-Ready Apps", 
    "Open to New Opportunities"
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
    <section className="flex flex-col items-center justify-center mt-10 px-4 text-center py-20">     
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-lg font-medium mb-8 shadow-lg">
        <FiCheckCircle className="animate-pulse" />
        <span>Full Stack Developer</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Goutam Choudhary
      </h1>

      <h2 className="text-3xl md:text-5xl font-semibold text-[#2D8CEA] dark:text-[#0E96D6] mb-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-xl mb-12">
        I build scalable, production-ready web applications. From real-time gaming platforms to complex business systems, I deliver end-to-end solutions for clients and companies.
      </p>

      {/* Experience Stats */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ">
  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
    <div className="text-gray-600 dark:text-gray-400">Projects</div>
  </div>
  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">MERN</div>
    <div className="text-gray-600 dark:text-gray-400">Stack Dev</div>
  </div>
  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Fast</div>
    <div className="text-gray-600 dark:text-gray-400">Delivery</div>
  </div>
  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Production</div>
    <div className="text-gray-600 dark:text-gray-400">Ready Apps</div>
  </div>
</div>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <MdMail size={20} /> Get In Touch
        </a>

        <a
          href="GoutamChoudhary_Resume.pdf"
          download
          className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-7 py-3.5 rounded-lg font-semibold shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          <HiDownload size={20} /> Download CV
        </a>

        <div className="flex gap-3">
          <a
            href="https://github.com/Goutamchoudhary907"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <FaGithub size={20} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/goutamchoudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}