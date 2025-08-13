import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdkdywrv");

  return (
    <section
      id="contact"
      className="py-20 px-4 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2788ea] dark:text-[#0EA1E5] mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              {state.succeeded ? "Message Sent!" : "Send me a message"}
            </h3>

            {state.succeeded ? (
              <p className="text-green-600 dark:text-green-400">
                Thanks for your message! I'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
             placeholder-gray-400 dark:placeholder-gray-500
               focus:border-transparent"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
             placeholder-gray-400 dark:placeholder-gray-500
             focus:border-transparent"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
             bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
             placeholder-gray-400 dark:placeholder-gray-500
             focus:border-transparent"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-[#0EA1E5] cursor-pointer text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  goutamchoudhary907@gmail.com
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Goutamchoudhary907"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/goutamchoudhary/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/goutam907"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
