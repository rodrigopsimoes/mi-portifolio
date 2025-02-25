// src/components/Home.jsx
import React, { useEffect, useRef } from "react";
import fondo from "../assets/fondo.jpg"; // Ajusta la ruta según tu imagen
import "../styles/Home.css"; // Importa los estilos

function Home() {
  const textRef = useRef(null); // Usamos una referencia para el elemento

  useEffect(() => {
    const textElement = textRef.current;
    const text = "Desarrollador Fullstack";
    let index = 0;

    // Limpiamos el texto antes de empezar
    textElement.textContent = "";

    function type() {
      if (index < text.length) {
        textElement.textContent = text.slice(0, index + 1); // Usamos slice para evitar acumulación
        index++;
        setTimeout(type, 80); // Velocidad de escritura
      }
    }

    type(); // Iniciamos el efecto

    // Cleanup para evitar duplicaciones al desmontar
    return () => {
      textElement.textContent = text; // Opcional: deja el texto completo al salir
    };
  }, []); // Solo se ejecuta al montar

  return (
    <section
      id="home"
      className="home-section min-h-screen flex items-center justify-start p-6"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="text-container">
        <h1 className="text-4xl font-bold mb-4 sm:text-3xl">
          Rodrigo P. Simões
        </h1>
        <p ref={textRef} className="text-xl sm:text-lg typing-text"></p>
        <p className="mt-4 max-w-md sm:max-w-sm">
          Bienvenido a mi portafolio, donde muestro mi experiencia, proyectos y
          habilidades como desarrollador. ¡Explora y conéctate conmigo!
        </p>
      </div>
    </section>
  );
}

export default Home;