import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-teal-400">Animesh Shrivastava</span>
        </h1>
        <p className="text-xl mb-6">
          Frontend Engineer | React.js | Redux | TypeScript
        </p>

        <a
          href="#projects"
          className="bg-teal-500 hover:bg-teal-400 px-6 py-3 rounded-lg text-lg"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
