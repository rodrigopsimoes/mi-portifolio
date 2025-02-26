// src/components/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import fondo from "../assets/web.webp"; // Ajusta la ruta según tu imagen
import "../styles/Home.css"; // Importa los estilos

function Home() {
  const textRef = useRef(null);
  const [textColor, setTextColor] = useState("white"); // Estado para el color del texto

  useEffect(() => {
    const textElement = textRef.current;
    const text = "Desarrollador Fullstack";
    let index = 0;

    textElement.textContent = "";

    function type() {
      if (index < text.length) {
        textElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, 80);
      }
    }

    type();

    return () => {
      textElement.textContent = text;
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = fondo;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      let brightnessSum = 0;
      let pixelCount = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Luminosidad basada en la percepción humana
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        brightnessSum += brightness;
        pixelCount++;
      }

      const averageBrightness = brightnessSum / pixelCount;
      setTextColor(averageBrightness > 128 ? "black" : "white"); // Umbral 128
    };
  }, []);

  return (
    <section
      id="home"
      className="home-section min-h-screen flex items-center justify-start p-6"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="text-container" style={{ color: textColor }}>
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
