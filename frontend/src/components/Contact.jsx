import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaComments,
} from "react-icons/fa";
import { FiMessageSquare, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdkdywrv");

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <FaComments className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2788ea] dark:text-[#0EA1E5] mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question, an idea, or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                <FiMessageSquare className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Send a Message
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-7">
              Drop me a message and I'll get back to you soon.
            </p>

            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="What's your name?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                             placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Where can I reply?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                             placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="What would you like to talk about?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                             placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 group"
                >
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-2xl text-white shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-lg">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">Direct Email</h3>
              </div>
              
              <p className="mb-6 opacity-90">
                Prefer to email directly? Reach out here:
              </p>
              
              <a
                href="mailto:goutamchoudhary907@gmail.com"
                className="mt-auto inline-flex items-center gap-3 px-6 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaEnvelope />
                <span>goutamchoudhary907@gmail.com</span>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                  <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Connect on Social
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-5">
                Let's connect and continue the conversation elsewhere!
              </p>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.linkedin.com/in/goutamchoudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">LinkedIn</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Professional</span>
                </a>

                <a
                  href="https://github.com/Goutamchoudhary907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <FaGithub className="text-gray-800 dark:text-white text-xl" />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">GitHub</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Code</span>
                </a>

                <a
                  href="https://x.com/goutam907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <FaTwitter className="text-blue-400 dark:text-blue-300 text-xl" />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">Twitter</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Thoughts</span>
                </a>
              </div>

              <div className="mt-5 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiMail className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Quick Response</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">I typically reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No matter the reason for reaching out, I'm excited to connect! ✨
          </p>
        </div>
      </div>
    </section>
  );
}