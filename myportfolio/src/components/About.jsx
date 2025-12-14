import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-6">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg leading-relaxed text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        A highly motivated and self-taught Software Engineer with deep expertise
        in front-end development. I specialize in building scalable,
        high-performance web applications using ReactJS and component-driven
        architecture.

        With strong knowledge of Redux, TypeScript, Axios, and PusherJS, I build
        modern, interactive, and user-focused applications. Passionate about
        continuous learning, innovation, and collaborating to create exceptional
        digital experiences.
      </motion.p>
    </section>
  );
};

export default About;
