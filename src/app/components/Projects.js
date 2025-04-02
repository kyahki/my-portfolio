"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Paws For Home",
    description: "Paws For Home is a pet adoption platform that connects shelters and adopters in a simple, user-friendly way. Users can create either an Adopter or Shelter Account.",
    link: "https://github.com/kyahki/PawsForHome",
    imageUrl: "/images/PawsForHome.png",
    technologies: ["HTML/CSS", "JavaScript", "Django", "Python", "SQLite"],
  },
  {
    title: "OnlyFit",
    description: "A fitness gym app cater to users who want to focus on their health and wellness. Users can manage their workout routines, track their progress, and reach their goals and objectives.",
    link: "https://github.com/kyahki/OnlyFit_SQL",
    imageUrl: "/images/OnlyFit.png",
    technologies: ["PHP", "HTML/CSS", "MySQL"],
  },
  {
    title: "2D-Adventure Game",
    description: "The 2D Adventure Game is a simple game that lets players explore a world, solve puzzles, and battle enemies. It focuses on core game development elements like physics, movement, and interaction.",
    link: "https://github.com/kyahki/2D-Adventure-Game",
    imageUrl: "/images/2D-Adventure.png",
    technologies: ["Java", "LibGDX", "Box2D", "Tiled"],
  },
  {
    title: "Exiled",
    description: "A Top-down Shooter Game inspired by Brotato. Survive waves of enemies and level up your character to face new challenges",
    link: "https://github.com/kyahki/exiled-oop-project",
    imageUrl: "/images/Exiled.png",
    technologies: ["Java", "LibGDX", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image container with fixed height */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {/* Content container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="mb-4 text-gray-300 flex-grow">{project.description}</p>

              {/* Technologies used */}
              <div className="mb-4">
                <p className="font-semibold mb-2 text-left">Technologies Used:</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="mr-2 mb-2 bg-gray-600 text-white text-sm rounded px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-transform hover:scale-120"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub logo"
                    width={24}
                    height={24}
                  />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}