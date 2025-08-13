import React from 'react';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="relative py-16 px-4 mt-30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2788ea] dark:text-[#0EA1E5] inline-block relative pb-2">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400"></span>
          </h2>
        </div>

       <div className="grid md:grid-cols-12 gap-8">
  <div className="md:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 min-h-[calc(100%-32px)]">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a Full Stack Developer with a strong focus on backend development, specializing in building robust, scalable applications using both relational (PostgreSQL) and NoSQL (MongoDB) databases within the MERN stack (MongoDB, Express.js, React, Node.js).
            </p>
            
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "My passion lies in creating efficient solutions that solve real-world problems while delivering exceptional user experiences."
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-[#2788ea] dark:text-[#0EA1E5] mb-3">
                Beyond Code
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm deeply invested in continuous learning, constantly exploring new database technologies and system architectures to solve problems elegantly. Whether it's optimizing SQL queries, designing NoSQL schemas, or refining API endpoints, I obsess over details that make systems reliable and efficient.
              </p>
            </div>
          </div>

           <div className="md:col-span-5">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 sticky top-4 h-full">
            <h3 className="text-2xl font-semibold text-[#2788ea] dark:text-[#0EA1E5] mb-4 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                What I Deliver
              </h3>
              
              <ul className="space-y-3 cursor-pointer">
                {[
                  "End-to-End Development: From dynamic React frontends to high-performance Node.js APIs",
                  "Database Expertise: PostgreSQL for complex relational models and MongoDB for flexible NoSQL solutions",
                  "Backend Architecture: Designing scalable systems with clean, maintainable code",
                  "Performance Optimization: Applications that load fast and handle heavy workloads",
                  "Security-First Approach: Implementing authentication, data protection, and best practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}