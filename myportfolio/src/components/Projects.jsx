import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern responsive portfolio built using React & Tailwind.",
      btn: "#",
    },
    {
      title: "E-Commerce Dashboard",
      desc: "React + Redux dashboard with charts and authentication.",
      btn: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-400 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <a className="text-teal-400 underline" href={p.btn}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
