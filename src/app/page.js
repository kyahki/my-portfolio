"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
     <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.h1>
  
     
   
  );
}
