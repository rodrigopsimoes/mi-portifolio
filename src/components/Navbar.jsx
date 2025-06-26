// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full bg-gray-800 text-white w-64 z-50 hidden md:block">
      {/* Foto, nombre y función */}
      <div className="p-4 text-center">
        <img
          src="/tu-foto.jpg" // Reemplaza con la ruta de tu foto en la carpeta public
          alt="Tu Foto"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-bold">Rodrigo</h2>
        <p className="text-gray-400">Desarrollador Fullstack</p>
      </div>

      {/* Enlaces de navegación */}
      <ul className="p-4 space-y-4">
        <li>
          <a href="#home" className="hover:text-gray-300 block">
            Home
          </a>
        </li>
        <li>
          <a href="#experiencia" className="hover:text-gray-300 block">
            Experiencia
          </a>
        </li>
        <li>
          <a href="#proyectos" className="hover:text-gray-300 block">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#habilidades" className="hover:text-gray-300 block">
            Habilidades
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-gray-300 block">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
