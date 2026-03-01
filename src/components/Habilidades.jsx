// src/components/Habilidades.jsx
import React from "react";
import "../styles/Portfolio.css";

const categorias = [
  {
    titulo: "Redes & Infraestructura",
    color: "#0ea5e9",
    icon: "🌐",
    habilidades: [
      { nombre: "TCP/IP & Subnetting", nivel: 90 },
      { nombre: "VLANs & Switching", nivel: 85 },
      { nombre: "Cisco IOS", nivel: 80 },
      { nombre: "Firewall & Seguridad", nivel: 75 },
      { nombre: "DNS / DHCP / RADIUS", nivel: 85 },
      { nombre: "VPN & WAN", nivel: 70 },
    ],
  },
  {
    titulo: "Sistemas Operativos",
    color: "#06b6d4",
    icon: "🖥️",
    habilidades: [
      { nombre: "Linux (Ubuntu/CentOS)", nivel: 85 },
      { nombre: "Windows Server", nivel: 90 },
      { nombre: "Active Directory", nivel: 85 },
      { nombre: "Bash Scripting", nivel: 75 },
      { nombre: "PowerShell", nivel: 70 },
    ],
  },
  {
    titulo: "DevOps & Automatización",
    color: "#8b5cf6",
    icon: "⚙️",
    habilidades: [
      { nombre: "Docker & Contenedores", nivel: 75 },
      { nombre: "Git & GitHub", nivel: 85 },
      { nombre: "Jenkins (CI/CD)", nivel: 70 },
      { nombre: "GitHub Actions", nivel: 65 },
      { nombre: "YAML / Config as Code", nivel: 75 },
    ],
  },
  {
    titulo: "Cloud & Monitorización",
    color: "#10b981",
    icon: "☁️",
    habilidades: [
      { nombre: "AWS (fundamentos)", nivel: 55 },
      { nombre: "Azure (fundamentos)", nivel: 50 },
      { nombre: "Zabbix / PRTG", nivel: 75 },
      { nombre: "Grafana", nivel: 55 },
    ],
  },
];

function Habilidades() {
  return (
    <section id="habilidades" className="section-dark" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <h2 className="section-title">Habilidades</h2>
      <p className="section-subtitle">Tecnologías y herramientas que domino</p>
      <div className="section-line"></div>

      <div className="skills-grid">
        {categorias.map((cat) => (
          <div key={cat.titulo} className="skill-category">
            <div
              className="skill-category-title"
              style={{ color: cat.color }}
            >
              <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
              {cat.titulo}
            </div>
            {cat.habilidades.map((skill) => (
              <div key={skill.nombre} className="skill-item">
                <span className="skill-name">{skill.nombre}</span>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${skill.nivel}%`,
                      background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
