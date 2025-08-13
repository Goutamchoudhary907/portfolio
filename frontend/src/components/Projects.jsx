import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Rentpy",
      description:
        "A full-stack rental marketplace where users can search and book rooms, while property owners can easily list and manage their rentals with rich media and location features.",
      bulletPoints: [
        "Built with React, TypeScript, Node.js, and PostgreSQL using Prisma ORM",
        "Implemented JWT authentication and responsive Tailwind CSS UI",
        "Integrated Google Maps API for location autocomplete and property maps",
        "Enabled secure rental bookings via Razorpay payment gateway",
        "Optimized API performance and implemented Zod-based form validation",
      ],
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Google Maps API",
        "Razorpay",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/Goutamchoudhary907/Room-Renting",
      liveLink: "https://rentpy.vercel.app/",
      image: "/Rentpy.png",
    },
    {
      title: "Pestiguide",
      description:
        "Mini college project — Full-stack system providing detailed pesticide information, where I built the backend using Node.js, Express.js, and MongoDB.",
      bulletPoints: [
        "Developed backend architecture and REST APIs for pesticide and crop data management",
        "Designed and implemented MongoDB schema with collections for pesticides, crops, and relationships",
        "Organized pesticide data into Kharif, Rabi, and Zaid seasons for farmer-friendly access",
        "Collaborated in a 3-person team using Git, delivering seamless integration with the frontend",
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "REST API", "Git"],
      githubLink: "https://github.com/Goutamchoudhary907/mini_project",
      image: "/Pestiguide.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2788ea] dark:text-[#0EA1E5] mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-blue-50/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded-full text-sm shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length < 6 && (
                    <>
                      <span className="invisible px-3 py-1 rounded-full">
                        filler
                      </span>
                      <span className="invisible px-3 py-1 rounded-full">
                        filler
                      </span>
                      <span className="invisible px-3 py-1 rounded-full">
                        filler
                      </span>
                    </>
                  )}
                </div>

                <ul className="mb-6 pl-5 space-y-2">
                  {project.bulletPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <FiArrowRight className="mt-1 mr-2 text-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  {project.liveLink ? (
                    <div className="flex gap-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium
          border border-gray-400 dark:border-gray-600
          text-gray-900 dark:text-white
          rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900
          transition-colors group"
                      >
                        <FiGithub
                          className="mr-2 group-hover:translate-x-1 transition-transform"
                          size={16}
                        />
                        <span>Code</span>
                      </a>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium
          bg-blue-500 text-white rounded-md
          hover:bg-blue-600 transition-colors group"
                      >
                        <FiExternalLink
                          className="mr-2 group-hover:translate-x-1 transition-transform"
                          size={16}
                        />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium
        border border-gray-400 dark:border-gray-600
        text-gray-900 dark:text-white
        rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900
        transition-colors group"
                    >
                      <FiGithub
                        className="mr-2 group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            More exciting projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
