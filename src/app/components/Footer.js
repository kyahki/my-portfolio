"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "../../../AnimationSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactItemVariants = {
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

  const contactItems = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      content: "kylevazwork@gmail.com",
      link: "mailto:kylevazwork@gmail.com",
      isLink: true,
    },
    {
      icon: <FaPhone size={24} />,
      title: "Phone",
      content: "+63 9911743603",
      isLink: false,
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Location",
      content: "Cebu City, Philippines",
      isLink: false,
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-12 border-t border-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_80%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div id="contact" className="max-w-5xl mx-auto mb-12">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative">
              CONTACT
              <motion.span
                className="absolute -bottom-2 left-0 h-0.5 bg-blue-500 w-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="flex flex-col items-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 h-full"
                  variants={contactItemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <motion.div
                    className="bg-blue-600 p-4 rounded-full mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.isLink ? (
                    <motion.a
                      href={item.link}
                      className="text-blue-400 hover:text-blue-300 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.content}
                    </motion.a>
                  ) : (
                    <p className="text-gray-300">{item.content}</p>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="pt-8 border-t border-gray-800 text-center">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {currentYear} Kyle Vasquez. All rights reserved.
            </motion.p>

            <motion.div
              className="mt-4 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05, x: -2 }}
              >
                Privacy Policy
              </motion.a>
              <span className="text-gray-600">|</span>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05, x: 2 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
