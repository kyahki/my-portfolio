"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div id="contact" className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500">
              CONTACT
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                 href="mailto:kylevazwork@gmail.com"
        className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
          kylevazwork@gmail.com
              </a>
            </div>
            
            {/* Phone */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+63 9911743603</p>
            </div>
            
            {/* Location */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Cebu City, Philippines</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kyle Vasquez. All rights reserved.
          </p>
          
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}