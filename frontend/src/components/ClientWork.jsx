import React from "react";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import {
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export default function ClientWork() {
  const project = {
    title: "ThugTap",
    description: "Production-ready multiplayer Ludo gaming platform with virtual currency system, wallet management, and admin dashboard.",
    role: "Full Stack Developer",
    liveLink: "https://thugtap.sbs",
    features: [
      "Multiplayer Room System",
      "Virtual Currency Management",
      "Admin Approval Workflow",
      "Payment Proof Verification"
    ],
    techStack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiVercel />, name: "Vercel" },
    ],
    highlights: [
      "Built complete platform end-to-end",
      "Implemented secure verification workflows",
      "Deployed with custom domain thugtap.sbs",
      "Delivered production-ready solution"
    ]
  };

  return (
    <section id="clientWork" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2788ea] dark:text-[#0EA1E5] mb-4">
            Client Project
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-world application built and deployed for a client
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                    Freelance Project
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.role}
                </p>
              </div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <FiExternalLink size={18} />
                Visit Live Site
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {project.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8">
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                What I Built
              </h4>
              
              <div className="space-y-4 mb-8">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="text-gray-700 dark:text-gray-300">
                        {tech.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Highlights
              </h4>
              
              <div className="space-y-4 mb-8">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Want something similar?
                </h5>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  I can build custom solutions for your business needs.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Have a project in mind? Let's discuss how I can help.
          </p>
        </div>
      </div>
    </section>
  );
}