import React from 'react';
import { FiBook, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2788ea] dark:text-[#0EA1E5] mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A quick introduction about who I am and what I do
          </p>
        </div>

        {/* Simple Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Education & Background */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FiBook className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Final Year B.Tech Student<br />
                  Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <FiCode className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Current Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building production-ready web applications<br />
                  Full Stack Development (MERN)<br />
                  Real-world client projects & personal learning
                </p>
              </div>
            </div>
          </div>

          {/* Right - Experience */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <FiBriefcase className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Freelance Work
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Built ThugTap - multiplayer gaming platform (Next.js, Supabase)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Personal Projects
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Rentpy (rental marketplace), Pestiguide (college project)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <FiUser className="text-amber-600 dark:text-amber-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Beyond Code
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about solving real problems<br />
                  Enjoy learning new technologies<br />
                  Focus on clean, maintainable code
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Building things that work, learning every day, and excited for what's next.
          </p>
        </div>
      </div>
    </section>
  );
}