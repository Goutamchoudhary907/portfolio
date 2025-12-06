import React from "react";
import { 
  FiCode, 
  FiDatabase, 
  FiServer,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiLayers,
  FiPackage
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Complete web applications from frontend to backend, database design, and deployment.",
      features: ["React/Next.js Frontends", "Node.js/Express Backends", "Database Design", "API Integration"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Backend & API Development",
      description: "Scalable server architecture, REST APIs, authentication, and database optimization.",
      features: ["REST/GraphQL APIs", "Authentication Systems", "Database Optimization", "Microservices"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: "End-to-End Project Delivery",
      description: "From concept to deployment, handling the entire development lifecycle.",
      features: ["Project Planning", "Development", "Testing", "Deployment", "Maintenance"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2788ea] dark:text-[#0EA1E5] mb-4">
            What I Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable, production-ready applications with modern technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <FiCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engagement Models - Keep but make it clear it's for freelance */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
              For Freelance Clients
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Flexible Engagement Models
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-blue-500 text-2xl" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Hourly Rate</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Perfect for smaller tasks, bug fixes, or ongoing maintenance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Pay only for time spent
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Flexible scheduling
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Weekly time reports
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border-2 border-blue-200 dark:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <FiDollarSign className="text-green-500 text-2xl" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Project-Based</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fixed price for complete project delivery with defined scope and timeline.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Clear deliverables & timeline
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Regular progress updates
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Post-launch support included
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiCode className="text-purple-500 text-2xl" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Part-Time</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dedicated hours per week for longer-term collaboration or ongoing development.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Consistent availability
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Deep product understanding
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <FiCheckCircle className="text-green-500 mr-2" size={14} />
                  Priority support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              Open to both freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}