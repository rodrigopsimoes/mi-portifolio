// src/App.jsx
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6 transition-all duration-300">
        {" "}
        {/* Añadimos transición suave */}
        <Home />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
