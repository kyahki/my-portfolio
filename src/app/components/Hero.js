"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto">
          {/* Profile Image - Now larger and with rounded corners instead of circular */}
          <motion.div
            className="w-64 h-80 rounded-2xl overflow-hidden mb-8 md:mb-0 shrink-0 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/myImage.jpg"
              alt="Kyle Vasquez"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="md:ml-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm Kyle Vasquez
            </h1>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              I'm a software developer skilled in Java, JavaScript, Python, PHP, C, 
              and C++, with experience in MySQL, MongoDB, Git, GitHub, React,
              and backend frameworks like Express, Django, and Node.js. 
              I love building efficient, user-friendly web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/cv.pdf" passHref>
                <motion.button
                  className="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See my CV
                </motion.button>
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-6 mt-6 sm:mt-0">
                <a
                  href="https://www.linkedin.com/in/kyle-vasquez-kyki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform hover:scale-110"
                >
                  <FaLinkedin size={32} className="text-white hover:text-blue-400" />
                </a>
                <a
                  href="https://www.facebook.com/kilotski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-110"
                >
                  <FaFacebook size={32} className="text-white hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/kyahki"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-transform hover:scale-110"
                >
                  <SiGithub size={32} className="text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}