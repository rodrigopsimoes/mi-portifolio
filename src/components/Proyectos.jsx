// src/components/Proyectos.jsx
import React from "react";
import "../styles/Portfolio.css";

const proyectos = [
  {
    icon: "🏗️",
    titulo: "IaC con Terraform & AWS",
    descripcion:
      "Despliegue automatizado de infraestructura cloud utilizando Terraform. Gestión de estado remoto con S3 y DynamoDB, configuración de redes (VPC, Subnets) y servicios de cómputo siguiendo las mejores prácticas de seguridad.",
    tags: ["Terraform", "AWS", "IaC", "Cloud Security"],
    enlace: "https://github.com/rodrigopsimoes",
  },
  {
    icon: "🚀",
    titulo: "Jenkins CI/CD Automation",
    descripcion:
      "Pipeline completo de CI/CD con Jenkins utilizando Configuration as Code (JCasC). Automatización del ciclo de vida de aplicaciones, desde el testeo hasta el despliegue automático en entornos productivos.",
    tags: ["Jenkins", "CI/CD", "JCasC", "Docker", "DevSecOps"],
    enlace: "https://github.com/rodrigopsimoes",
  },
  {
    icon: "🐍",
    titulo: "Scripts de Automatización Python/Bash",
    descripcion:
      "Desarrollo de herramientas personalizadas para la automatización de tareas de IT y operaciones de infraestructura. Reducción drástica del tiempo de ejecución en procesos manuales críticos.",
    tags: ["Python", "Bash", "Automation", "IT Operations"],
    enlace: "https://github.com/rodrigopsimoes",
  },
  {
    icon: "💼",
    titulo: "Portafolio Personal Premium",
    descripcion:
      "Mi escaparate profesional desarrollado con React, Vite y TailwindCSS. Un reflejo de mi perfil como DevSecOps, con un diseño oscuro, fluido y totalmente responsive.",
    tags: ["React", "Vite", "TailwindCSS", "UI/UX"],
    enlace: "https://github.com/rodrigopsimoes/mi-portifolio",
  },
];

function Proyectos() {
  return (
    <section id="proyectos" className="section-card">
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Soluciones de infraestructura y automatización</p>
      <div className="section-line"></div>

      <div className="projects-grid">
        {proyectos.map((proy, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{proy.icon}</div>
            <h3 className="project-title">{proy.titulo}</h3>
            <p className="project-desc">{proy.descripcion}</p>
            <div className="project-tags">
              {proy.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a
              href={proy.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
