// src/components/Experiencia.jsx
import React from 'react';

function Experiencia() {
  const experiencias = [
    {
      titulo: "Desarrollador Fullstack",
      empresa: "Tech Solutions",
      fecha: "2022 - 2025",
      descripcion: "Desarrollé aplicaciones web usando React, Node.js y Tailwind CSS, mejorando la experiencia del usuario en un 30%.",
    },
    {
      titulo: "Ingeniero Frontend",
      empresa: "Innovate Corp",
      fecha: "2020 - 2022",
      descripcion: "Implementé interfaces dinámicas con React y Redux, optimizando el rendimiento de las páginas.",
    },
  ];

  return (
    <section id="experiencia" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Experiencia</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {experiencias.map((exp, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{exp.titulo}</h3>
            <p className="text-gray-600">{exp.empresa} | {exp.fecha}</p>
            <p className="mt-2 text-gray-700">{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;