"use client";

import { useState, useEffect } from "react";
import { FaLaptopCode, FaBrain, FaEnvelope } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy: marker line just below the nav; active = last section (DOM order) whose top is at/above it.
  // Replaces dual IntersectionObservers + "at bottom" hack, which kept forcing Contact while Projects was on screen when scrolling up.
  useEffect(() => {
    const navOffset = 80;
    const markerOffset = 56;
    const sectionIds = ["hero", "skills", "projects", "contact"];

    const maxScrollY = () => {
      const root = document.documentElement;
      const scrollHeight = Math.max(
        document.body?.scrollHeight ?? 0,
        root.scrollHeight,
      );
      const viewHeight = root.clientHeight;
      return Math.max(0, scrollHeight - viewHeight);
    };

    const isAtPageBottom = () => {
      const slack = 64; // px — mobile chrome / subpixel so “bottom” reliably counts
      return window.scrollY >= maxScrollY() - slack;
    };

    const updateFromScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "hero";

      if (isAtPageBottom()) {
        current = "contact";
        if (window.location.hash !== "#contact") {
          window.history.replaceState(null, "", "#contact");
        }
      } else {
        if (window.location.hash === "#contact") {
          const path = `${window.location.pathname}${window.location.search}`;
          window.history.replaceState(null, "", path || "/");
        }
        const markerY = window.scrollY + navOffset + markerOffset;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= markerY) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: "hero", label: "About me", icon: <HiAcademicCap className="mr-1" /> },
    {
      id: "skills",
      label: "Technical Skills",
      icon: <FaBrain className="mr-1" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FaLaptopCode className="mr-1" />,
    },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="mr-1" /> },
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset for navbar height
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
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
                        ? "text-white bg-blue-600"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
                      ? "text-white bg-blue-600"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
