// src/components/Proyectos.jsx
import React from 'react';

function Proyectos() {
  const proyectos = [
    {
      titulo: "Portafolio Personal",
      descripcion: "Un portafolio interactivo creado con React y Tailwind CSS.",
      tecnologias: "React, Tailwind CSS, Vite",
      enlace: "https://github.com/tu-usuario/portafolio",
    },
    {
      titulo: "Aplicación de Tareas",
      descripcion: "Una app para gestionar tareas con login y persistencia en localStorage.",
      tecnologias: "React, Node.js, MongoDB",
      enlace: "https://github.com/tu-usuario/todo-app",
    },
  ];

  return (
    <section id="proyectos" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Proyectos</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {proyectos.map((proy, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{proy.titulo}</h3>
            <p className="text-gray-600 mt-2">{proy.descripcion}</p>
            <p className="text-gray-500 mt-2">Tecnologías: {proy.tecnologias}</p>
            <a href={proy.enlace} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;