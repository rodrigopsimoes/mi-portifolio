// src/components/Experiencia.jsx
import React from "react";
import "../styles/Portfolio.css";

const experiencias = [
  {
    periodo: "2023 – Actualidad",
    titulo: "DevOps Engineer (Formación)",
    empresa: "Self-learning & Proyectos personales",
    descripcion:
      "Aprendizaje activo de prácticas DevOps: CI/CD con Jenkins y GitHub Actions, containerización con Docker, scripting en Bash y Python, gestión de infraestructura, monitorización y automatización de despliegues.",
    tags: ["Docker", "Jenkins", "CI/CD", "Bash", "GitHub Actions", "Linux"],
  },
  {
    periodo: "2019 – 2025",
    titulo: "Administrador de Redes",
    empresa: "Empresa de Tecnología",
    descripcion:
      "Gestión y mantenimiento de infraestructura de red (switches Cisco, routers, VLANs, firewall). Configuración de servidores Windows Server y Active Directory. Monitorización de red con herramientas como PRTG y Zabbix. Resolución de incidencias de nivel 2 y 3.",
    tags: ["Cisco", "VLANs", "Windows Server", "Active Directory", "Firewall", "DNS/DHCP"],
  },
  {
    periodo: "2019 – 2025",
    titulo: "Asistente Técnico de Informática",
    empresa: "Servicio Técnico TI",
    descripcion:
      "Soporte técnico presencial y remoto a usuarios finales y empresas. Diagnóstico y reparación de hardware, instalación y configuración de sistemas operativos (Windows y Linux), mantenimiento preventivo y correctivo de equipos.",
    tags: ["Soporte TI", "Hardware", "Windows", "Linux", "Redes LAN/WAN", "Help Desk"],
  },
  {
    periodo: "2015 – 2019",
    titulo: "Técnico de Informática",
    empresa: "Empresa de Soporte",
    descripcion:
      "Instalación y configuración de equipos informáticos, periféricos y software. Gestión de cableado estructurado y montaje de racks. Primeros pasos en administración de servidores y bases de datos.",
    tags: ["Cableado", "Configuración SW", "Servidores", "Bases de Datos"],
  },
];

function Experiencia() {
  return (
    <section id="experiencia" className="section-dark">
      <h2 className="section-title">Experiencia</h2>
      <p className="section-subtitle">Mi trayectoria profesional</p>
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