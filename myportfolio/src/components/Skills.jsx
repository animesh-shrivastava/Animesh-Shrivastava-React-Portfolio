import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React.js",
    "Redux",
    "TypeScript",
    "HTML & CSS",
    "Tailwind",
    "Axios",
    "PusherJS",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 hover:border-teal-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
