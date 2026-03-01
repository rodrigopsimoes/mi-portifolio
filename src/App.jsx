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
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a" }}>
      <Navbar />
      <main style={{ marginLeft: "260px", width: "100%", overflowX: "hidden" }} id="main-content">
        <Home />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>

      {/* Responsive: at ≤768px sidebar is off-canvas and main takes full width */}
      <style>{`
        @media (max-width: 768px) {
          #main-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
