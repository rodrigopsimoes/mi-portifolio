// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center flex-col text-center p-6 bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:text-3xl">
        Tu Nombre
      </h1>
      <p className="text-xl text-gray-600 sm:text-lg">
        Desarrollador Fullstack | Creativo y Profesional
      </p>
      <p className="mt-4 text-gray-500 max-w-md sm:max-w-sm">
        Bienvenido a mi portafolio, donde muestro mi experiencia, proyectos y
        habilidades como desarrollador. ¡Explora y conéctate conmigo!
      </p>
    </section>
  );
}

export default Home;
