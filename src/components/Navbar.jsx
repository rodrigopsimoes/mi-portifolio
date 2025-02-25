// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4 justify-center">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#experiencia" className="hover:text-gray-300">Experiencia</a></li>
        <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
        <li><a href="#habilidades" className="hover:text-gray-300">Habilidades</a></li>
        <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;