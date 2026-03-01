// src/components/Home.jsx
import React, { useEffect, useRef } from "react";
import fondo from "../assets/hero_bg.png";
import "../styles/Home.css";

const roles = [
  "Administrador de Redes",
  "Asistente Técnico TI",
  "DevOps Engineer en formación",
  "Linux & Systems Admin",
];

function Home() {
  const textRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    function type() {
      const current = roles[roleIndex.current];

      if (!deleting.current) {
        el.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeoutRef.current = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }

      timeoutRef.current = setTimeout(type, deleting.current ? 45 : 80);
    }

    timeoutRef.current = setTimeout(type, 500);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Disponible para oportunidades
        </div>

        {/* Name */}
        <h1 className="hero-name">
          Rodrigo P. <span>Simões</span>
        </h1>

        {/* Typewriter */}
        <div className="typing-container">
          <span ref={textRef} className="typing-text"></span>
        </div>

        {/* Description */}
        <p className="hero-description">
          Más de <strong style={{ color: "#38bdf8" }}>6 años</strong> de experiencia
          en soporte técnico, administración de redes y sistemas. Actualmente
          formándome en <strong style={{ color: "#38bdf8" }}>DevOps</strong> para
          automatizar infraestructuras y acelerar entregas de software.
        </p>

        {/* CTAs */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" }); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            Contactarme
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        Scroll
      </div>
    </section>
  );
}

export default Home;
