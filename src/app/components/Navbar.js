"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaLaptopCode, FaBrain, FaEnvelope } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  
  // Track which section is currently in view using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      // Determine if page has scrolled to add background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Create IntersectionObserver to handle section visibility
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-80px 0px -20% 0px" // Adjust the top and bottom margins
      }
    );
    
    // Special observer for contact section with more lenient threshold
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("contact");
          }
        });
      },
      { 
        threshold: 0.1, // More sensitive threshold for contact section
        rootMargin: "-80px 0px -10% 0px" // More lenient margins
      }
    );
    
    // Get all sections and observe them
    const sections = ["hero", "projects", "skills", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        if (section === "contact") {
          contactObserver.observe(element);
        } else {
          sectionObserver.observe(element);
        }
      } else {
        console.warn(`Section with id "${section}" not found in the DOM`);
      }
    });
    
    // Check if we're at the bottom of the page
    const handleScrollBottom = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActiveSection("contact");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollBottom);
    
    // Run handleScroll once to set initial state
    handleScroll();
    
    return () => {
      // Clean up observers when component unmounts
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (section === "contact") {
            contactObserver.unobserve(element);
          } else {
            sectionObserver.unobserve(element);
          }
        }
      });
      
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollBottom);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: "hero", label: "About me", icon: <HiAcademicCap className="mr-1" /> },
    { id: "skills", label: "Technical Skills", icon: <FaBrain className="mr-1" /> },
    { id: "projects", label: "Projects", icon: <FaLaptopCode className="mr-1" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="mr-1" /> }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset for navbar height
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-white bg-blue-600' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex items-center justify-center w-full">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex flex-col items-center justify-center text-center px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-white bg-blue-600' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-label={item.label}
                >
                  <span className="text-lg mb-1">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}