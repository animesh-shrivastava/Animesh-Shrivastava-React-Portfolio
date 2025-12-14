import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <p className="text-lg text-gray-300 mb-4">
        Want to collaborate or discuss an opportunity? Let’s connect!
      </p>

      <a
        href="mailto:animeshshrivastava080@gmail.com"
        className="bg-teal-500 px-6 py-3 rounded-lg text-lg hover:bg-teal-400"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;
