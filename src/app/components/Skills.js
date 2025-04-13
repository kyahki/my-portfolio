"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPhp } from "react-icons/fa";
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
  SiMongodb,
} from "react-icons/si";
import AnimatedSection from "../../../AnimationSection";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: [
        {
          name: "React",
          icon: <FaReact size={40} className="text-blue-500" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={40} className="text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss size={40} className="text-cyan-400" />,
        },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={40} className="text-green-600" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress size={40} className="text-white" />,
        },
        {
          name: "Django",
          icon: <SiDjango size={40} className="text-green-500" />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql size={40} className="text-blue-500" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={40} className="text-blue-400" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={40} className="text-green-500" />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={40} className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript size={36} className="text-yellow-400" />,
        },
        {
          name: "Python",
          icon: <SiPython size={36} className="text-blue-400" />,
        },
        { name: "Java", icon: <FaJava size={36} className="text-red-400" /> },
        { name: "PHP", icon: <FaPhp size={36} className="text-purple-500" /> },
        { name: "C", icon: <SiC size={36} className="text-blue-500" /> },
        {
          name: "C++",
          icon: <SiCplusplus size={36} className="text-blue-600" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gray-800 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.1),transparent_70%)]" />

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-12 inline-block relative">
          Technical Skills
          <motion.span
            className="absolute -bottom-2 left-1/2 h-1 bg-blue-500 rounded-full"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "50%", x: "-50%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </h2>
      </AnimatedSection>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection
            key={categoryIndex}
            delay={categoryIndex * 0.1}
            className="h-full"
          >
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg h-full"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {category.title}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.h3>

              <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className="cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      {skill.icon}
                    </motion.div>

                    <motion.span
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded pointer-events-none"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
}
