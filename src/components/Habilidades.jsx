// src/components/Habilidades.jsx
import React from "react";

function Habilidades() {
  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Vite",
  ];

  return (
    <section id="habilidades" className="py-16 bg-white w-full ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 sm:text-2xl md:text-4xl">
        Habilidades
      </h2>
      <div className="w-full max-w-screen-xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow sm:p-2 md:p-4"
          >
            <span className="text-lg font-medium text-gray-800 sm:text-base md:text-xl">
              {habilidad}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
