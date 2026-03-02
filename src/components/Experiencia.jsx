// src/components/Experiencia.jsx
import React from "react";
import "../styles/Portfolio.css";

const experiencias = [
  {
    periodo: "Mayo 2021 – Actualidad",
    titulo: "DevSecOps & IT Automation Developer",
    empresa: "VIEWNEXT (Grupo IBM)",
    descripcion:
      "Desarrollo de automatizaciones para operaciones de infraestructura y e-commerce. Implementación de flujos DevSecOps y gestión de infraestructura como código (IaC) para grandes clientes, optimizando procesos y garantizando la seguridad en el ciclo de vida del software.",
    tags: ["DevSecOps", "Terraform", "Python", "AWS", "Bash", "IT Automation"],
  },
  {
    periodo: "2019 – 2021",
    titulo: "Soporte Técnico / Adaptación en España",
    empresa: "Sector Hostelería & Servicios TI",
    descripcion:
      "Etapa de transición profesional al llegar a España, compaginando roles en el sector servicios con soporte técnico puntual y especialización en el ecosistema tecnológico europeo.",
    tags: ["Soporte TI", "Adaptación", "Gestión de incidencias"],
  },
  {
    periodo: "2012 – 2019",
    titulo: "Especialista en Infraestructura & Soporte Avanzado",
    empresa: "Empresas de Tecnología (Brasil)",
    descripcion:
      "Más de 7 años liderando proyectos de infraestructura local, administración de servidores (Windows y Linux) y soporte técnico de nivel avanzado. Gestión de redes corporativas, switches Cisco y Active Directory.",
    tags: ["SysAdmin", "Networking", "Windows Server", "Linux Server", "Cisco", "Help Desk L3"],
  },
];

function Experiencia() {
  return (
    <section id="experiencia" className="section-dark">
      <h2 className="section-title">Experiencia</h2>
      <p className="section-subtitle">Más de 10 años de trayectoria profesional</p>
      <div className="section-line"></div>

      <div className="timeline">
        {experiencias.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-period">{exp.periodo}</span>
              <h3 className="timeline-title">{exp.titulo}</h3>
              <p className="timeline-company">🏢 {exp.empresa}</p>
              <p className="timeline-desc">{exp.descripcion}</p>
              <div className="timeline-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;