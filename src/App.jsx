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
    <div className="min-h-screen bg-gray-100 flex">
      <Navbar />
      <main className="md:ml-64 w-full">
        {" "}
        {/* Añadimos w-full para que ocupe todo el ancho */}
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
