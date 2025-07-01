import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Linux Essentials",
    provider: "Gaza Sky Geeks — On-site short course",
    date: "2023",
    details:
      "Linux OS basics, user & group management, root privileges, IP/network configuration",
    link: "https://example.com/linux-essentials",
  },
  {
    title: "Advanced JavaScript",
    provider: "Gaza Sky Geeks — On-site 4-week bootcamp",
    date: "2023",
    details:
      "Modern JS (ES6+), DOM & Console debugging, code-by-code walkthroughs, pre-/post-JS web fundamentals",
    link: "https://example.com/advanced-js",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    provider: "Hope International — Online (Jordan)",
    date: "2023",
    details:
      "Red-team vs blue-team tactics, reconnaissance labs (tracking IPs, phones, cameras, systems), defensive hardening strategies",
    link: "https://example.com/cyber-security",
  },
  {
    title: "Express JS Backend Development",
    provider: "University Summer Internship, Hebron — 300 hrs on-site",
    date: "2023",
    details:
      "RESTful APIs with Express, SQL DB design, AWS services (EC2, S3, RDS, Load Balancer), AI-powered features; built a CMS capstone",
    link: "https://example.com/express-backend",
  },
  {
    title: "Flutter Development",
    provider: "University program with CoTeDe — 50 hrs on-site (Udacity curriculum)",
    date: "2023",
    details:
      "Flutter UI, state management & REST integration; coached project 'Suzi Shop' (e-commerce app)",
    link: "https://example.com/flutter-development",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="cert-listing">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-provider">
              {cert.provider} — {cert.date}
            </p>
            <p className="cert-details">{cert.details}</p>
            <a
              href={cert.link}
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINK
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
