"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaTools, FaCode, FaJava, FaPhp } from "react-icons/fa";
import { 
  SiExpress, 
  SiDjango, 
  SiMysql, 
  SiPostgresql, 
  SiGithub, 
  SiGit, 
  SiJavascript, 
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiMongodb
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       Technical Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Frameworks */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Frontend Frameworks</h3>
          <div className="flex justify-center items-center mb-4 space-x-3">
            <div className="group relative">
              <FaReact size={40} className="text-blue-500 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                React
              </span>
            </div>
            <div className="group relative">
              <SiNextdotjs size={40} className="text-white cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Next.js
              </span>
            </div>
            <div className="group relative">
              <SiTailwindcss size={40} className="text-cyan-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Tailwind
              </span>
            </div>
          </div>
        </motion.div>

        {/* Backend Frameworks */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Backend Frameworks</h3>
          <div className="flex justify-center items-center mb-4 space-x-3">
            <div className="group relative">
              <FaNodeJs size={40} className="text-green-600 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Node.js
              </span>
            </div>
            <div className="group relative">
              <SiExpress size={40} className="text-white cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Express.js
              </span>
            </div>
            <div className="group relative">
              <SiDjango size={40} className="text-green-500 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Django
              </span>
            </div>
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <div className="flex justify-center items-center mb-4 space-x-3">
            <div className="group relative">
              <SiMysql size={40} className="text-blue-500 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                MySQL
              </span>
            </div>
            <div className="group relative">
              <SiPostgresql size={40} className="text-blue-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                PostgreSQL
              </span>
            </div>
            <div className="group relative">
              <SiMongodb size={40} className="text-blue-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                MongoDB
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex justify-center items-center mb-4 space-x-3">
            <div className="group relative">
              <SiGit size={40} className="text-red-500 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Git
              </span>
            </div>
            <div className="group relative">
              <SiGithub size={40} className="text-white cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                GitHub
              </span>
            </div>
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
          <div className="flex justify-center items-center mb-4 space-x-3">
            <div className="group relative">
              <SiJavascript size={36} className="text-yellow-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                JavaScript
              </span>
            </div>
            <div className="group relative">
              <SiPython size={36} className="text-blue-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Python
              </span>
            </div>
            <div className="group relative">
              <FaJava size={36} className="text-red-400 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                Java
              </span>
            </div>
            <div className="group relative">
              <FaPhp size={36} className="text-purple-500 cursor-pointer transition-transform hover:scale-130" />
              <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                PHP
              </span>
            </div>
            <div className="group relative">
              <SiC size={36} className="text-purple-500 cursor-pointer transition-transform hover:scale-130" />
              <span className = "opacity-0 group-hover:opacity-100  absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                C
              </span>
            </div>
            <div className = "group relative">
              <SiCplusplus size={36} className = "text-purple-500 cursor-pointer transition-transform hover:scale-130"/>
              <span className ="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                C++
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}