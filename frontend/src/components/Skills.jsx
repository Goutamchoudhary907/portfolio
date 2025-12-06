import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiRender,
  SiGooglemaps,
  SiGit,
  SiPostman
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const VSCodeIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6 text-blue-500"
    fill="currentColor" 
  >
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const RazorpayIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6 text-indigo-600"
    fill="currentColor"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm4.5-10.5h-3v-3h3v3zm-6 0h-3v-3h3v3zm6 3h-3v3h3v-3zm-6 0h-3v3h3v-3z"/>
  </svg>
);

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={24} /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" size={24} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={24} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={24} /> },
        { name: "React", icon: <SiReact className="text-blue-400" size={24} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" size={24} /> },
        { name: "Zod", icon: <span className="text-sm font-bold text-purple-600">Zod</span> },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={24} /> },
        { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" size={24} /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500" size={24} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={24} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={24} /> },
        { name: "Prisma", icon: <SiPrisma className="text-blue-800 dark:text-blue-300" size={24} /> },
        { name: "REST APIs", icon: <span className="text-sm font-bold text-green-600">REST</span> },
      ],
    },
    {
      category: "APIs & Services",
      items: [
        { name: "Google Maps", icon: <SiGooglemaps className="text-red-500" size={24} /> },
        { name: "Razorpay", icon: <RazorpayIcon /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" size={24} /> },
      ],
    },
    {
      category: "Languages & Tools",
      items: [
        { name: "Java", icon: <FaJava className="text-red-500" size={24} /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-500" size={24} /> },
        { name: "Git", icon: <SiGit className="text-orange-600" size={24} /> },
        { name: "VS Code", icon: <VSCodeIcon className="text-blue-500" size={24} /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" size={24} /> },
        { name: "Render", icon: <SiRender className="text-blue-400" size={24} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2788ea] dark:text-[#0EA1E5] mb-12">
          My Skills
        </h2>

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mb-2 flex items-center justify-center h-6">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;