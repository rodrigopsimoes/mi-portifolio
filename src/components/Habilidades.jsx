// src/components/Habilidades.jsx
import React from "react";
import "../styles/Portfolio.css";

const categorias = [
  {
    titulo: "DevOps & IaC",
    color: "#8b5cf6",
    icon: "⚙️",
    habilidades: [
      { nombre: "Terraform", nivel: 75 },
      { nombre: "AWS (S3, DynamoDB, VPC)", nivel: 70 },
      { nombre: "Python (Automation)", nivel: 85 },
      { nombre: "Bash Scripting", nivel: 80 },
      { nombre: "Docker & CI/CD", nivel: 70 },
      { nombre: "GitHub Actions / Jenkins", nivel: 65 },
    ],
  },
  {
    titulo: "Sistemas & Seguridad",
    color: "#06b6d4",
    icon: "🖥️",
    habilidades: [
      { nombre: "DevSecOps Practices", nivel: 65 },
      { nombre: "Linux (Ubuntu/CentOS)", nivel: 85 },
      { nombre: "Windows Server", nivel: 90 },
      { nombre: "Active Directory", nivel: 90 },
      { nombre: "Virtualización", nivel: 85 },
    ],
  },
  {
    titulo: "Redes & Infraestructura",
    color: "#0ea5e9",
    icon: "🌐",
    habilidades: [
      { nombre: "TCP/IP & Subnetting", nivel: 95 },
      { nombre: "Cisco Switching & Routing", nivel: 85 },
      { nombre: "VLANs & Firewalling", nivel: 80 },
      { nombre: "DNS / DHCP / VPN", nivel: 90 },
      { nombre: "Monitorización (Zabbix/PRTG)", nivel: 75 },
    ],
  },
];

function Habilidades() {
  return (
    <section id="habilidades" className="section-dark" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <h2 className="section-title">Habilidades</h2>
      <p className="section-subtitle">Mi stack tecnológico en constante evolución</p>
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
