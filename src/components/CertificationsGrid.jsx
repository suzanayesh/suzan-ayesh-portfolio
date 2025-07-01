import React, { useState } from "react";
import "./CertificationsGrid.css";

// Replace these with your actual badge images:
import linuxBadge   from "../assets/linux.png";
import jsBadge      from "../assets/expressjs.png";
import cyberBadge   from "../assets/cybersecurity.png";
import expressBadge from "../assets/expressjs.png";
import flutterBadge from "../assets/flutter.png";

const certifications = [
  {
    icon: linuxBadge,
    title: "Linux Essentials",
    provider: "Gaza Sky Geeks — On‐site short course (2023)",
    details:
      "Linux OS basics, user & group management, root privileges, IP/network configuration",
    link: "https://example.com/linux-essentials",
  },
  {
    icon: jsBadge,
    title: "Advanced JavaScript",
    provider: "Gaza Sky Geeks — Bootcamp (2023)",
    details:
      "Modern JS (ES6+), DOM & Console debugging, code-based walkthroughs, web fundamentals",
    link: "https://example.com/advanced-js",
  },
  {
    icon: cyberBadge,
    title: "Cyber Security & Ethical Hacking",
    provider: "Hope International — Online (2023)",
    details:
      "Red/blue-team tactics, reconnaissance labs, defensive hardening strategies",
    link: "https://example.com/cyber-security",
  },
  {
    icon: expressBadge,
    title: "Express JS Backend Dev",
    provider: "Hebron Summer Internship — 2hrs (2023)",
    details:
      "RESTful APIs, SQL DB design, AWS (EC2/S3/RDS), CMS capstone project",
    link: "https://example.com/express-backend",
  },
  {
    icon: flutterBadge,
    title: "Flutter Development",
    provider: "CoTeDe Udacity Curriculum — 50hrs (2023)",
    details:
      "Flutter UI, state management, REST integration; coached 'Suzi Shop' project",
    link: "https://example.com/flutter-development",
  },
];

export default function CertificationsGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="certifications" className="cert-grid-section">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="cert-icon-wrap"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(idx)}            // for mobile tap
          >
            <img src={cert.icon} alt={cert.title} className="cert-icon" />

            {hovered === idx && (
              <div className="cert-tooltip">
                <h3>{cert.title}</h3>
                <p className="provider">{cert.provider}</p>
                <p className="details">{cert.details}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
