"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedSection from "../../../AnimationSection";

const projects = [
  {
    title: "Paws For Home",
    description:
      "Paws For Home is a pet adoption platform that connects shelters and adopters in a simple, user-friendly way. Users can create either an Adopter or Shelter Account.",
    link: "https://github.com/kyahki/PawsForHome",
    imageUrl: "/images/PawsForHome.png",
    technologies: ["HTML/CSS", "JavaScript", "Django", "Python", "SQLite"],
  },
  {
    title: "FitHub",
    description:
      "A fitness tracking web app that helps users log workouts, monitor progress, and stay consistent. Features include authentication, personalized dashboards, and workout history.",
    link: "https://github.com/kyahki/FitHub",
    imageUrl: "/images/Fithub.png",
    technologies: ["MERN Stack", "Tailwind CSS", "JWT", "Framer Motion"],
  },
  {
    title: "Exiled",
    description:
      "A Top-down Shooter Game inspired by Brotato. Survive waves of enemies and level up your character to face new challenges",
    link: "https://github.com/kyahki/exiled-oop-project",
    imageUrl: "/images/Exiled.png",
    technologies: ["Java", "LibGDX", "MySQL"],
  },
  {
    title: "OnlyFit",
    description:
      "A fitness gym app cater to users who want to focus on their health and wellness. Users can manage their workout routines, track their progress, and reach their goals and objectives.",
    link: "https://github.com/kyahki/OnlyFit_SQL",
    imageUrl: "/images/OnlyFit.png",
    technologies: ["PHP", "HTML/CSS", "MySQL"],
  },
  {
    title: "2D-Adventure Game",
    description:
      "The 2D Adventure Game is a simple game that lets players explore a world, solve puzzles, and battle enemies. It focuses on core game development elements like physics, movement, and interaction.",
    link: "https://github.com/kyahki/2D-Adventure-Game",
    imageUrl: "/images/2D-Adventure.png",
    technologies: ["Java", "LibGDX", "Box2D", "Tiled"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gray-800 text-white text-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.1),transparent_80%)]" />

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-12 inline-block relative">
          My Projects
          <motion.span
            className="absolute -bottom-2 left-1/2 h-1 bg-blue-500 rounded-full"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "50%", x: "-50%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </h2>
      </AnimatedSection>

      <motion.div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <AnimatedSection
            key={index}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
            <motion.div
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Image container with enhanced hover effect */}
              <motion.div className="relative w-full h-80 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 z-10"
                  whileHover={{ opacity: 0, transition: { duration: 0.3 } }}
                />
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-blue-600/20"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>

              {/* Content container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="mb-4 text-gray-300 flex-grow">
                  {project.description}
                </p>

                {/* Technologies used with animated tags */}
                <div className="mb-4">
                  <p className="font-semibold mb-2 text-left">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="mr-2 mb-2 bg-gray-600 text-white text-sm rounded px-3 py-1"
                        whileHover={{
                          backgroundColor: "#3b82f6",
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.5 + techIndex * 0.1,
                            duration: 0.3,
                          },
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link with animation */}
                <div className="mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
                    whileHover={{
                      scale: 1.05,
                      color: "#ffffff",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                      alt="GitHub logo"
                      width={24}
                      height={24}
                    />
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{
                        width: "auto",
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      View on GitHub
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
}
