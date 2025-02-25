// src/App.jsx
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center flex-col text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tu Nombre</h1>
        <p className="text-xl text-gray-600">Desarrollador Fullstack | Creativo y Profesional</p>
        <p className="mt-4 text-gray-500">Bienvenido a mi portafolio, donde muestro mi experiencia y proyectos.</p>
      </section>
      {/* Agrega más secciones aquí más tarde */}
      <Experiencia />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </div>
  );
}

export default App;



