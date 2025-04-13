"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  // Animation variants for staggered animations
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="hero"
      className="flex items-center min-h-screen bg-gray-900 text-white py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto">
          {/* Profile Image with enhanced animation */}
          <motion.div
            className="w-64 h-80 rounded-2xl overflow-hidden mb-8 md:mb-0 shrink-0 shadow-lg relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent z-10"
              animate={{
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <Image
              src="/images/myImage.jpg"
              alt="Kyle Vasquez"
              className="w-full h-full object-cover"
              width={256}
              height={320}
              priority
            />
          </motion.div>

          {/* Content with staggered animations */}
          <motion.div
            className="md:ml-12 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
              variants={itemVariants}
            >
              Hi, I&apos;m Kyle Vasquez
            </motion.h1>

            <motion.p
              className="text-lg mb-8 text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I&apos;m a software developer skilled in Java, JavaScript, Python, PHP,
              C, and C++, with experience in MySQL, MongoDB, Git, GitHub, React,
              and backend frameworks like Express, Django, and Node.js. I love
              building efficient, user-friendly web applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6"
              variants={itemVariants}
            >
              <Link href="/cv.pdf" passHref>
                <motion.button
                  className="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1.5,
                      opacity: 0.3,
                      transition: { duration: 0.4 },
                    }}
                  />
                  See my CV
                </motion.button>
              </Link>

              {/* Social Links with floating animation */}
              <motion.div
                className="flex items-center gap-6 mt-6 sm:mt-0"
                variants={itemVariants}
                animate={floatingAnimation}
              >
                <motion.a
                  href="https://www.linkedin.com/in/kyle-vasquez-kyki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, color: "#0077b5" }}
                >
                  <FaLinkedin size={32} className="text-white" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/kilotski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-transform"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, color: "#1877f2" }}
                >
                  <FaFacebook size={32} className="text-white" />
                </motion.a>
                <motion.a
                  href="https://github.com/kyahki"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-transform"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, color: "#f5f5f5" }}
                >
                  <SiGithub size={32} className="text-white" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
