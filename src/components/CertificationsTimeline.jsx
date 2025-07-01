import React, { useState } from "react";
import "./CertificationsTimeline.css";

const certifications = [
  {
    title: "Linux Essentials",
    provider: "Gaza Sky Geeks — On-site short course",
    date: "2023",
    details:
      "Linux OS basics, user & group management, root privileges, IP/network configuration",
    // no link yet
  },
  {
    title: "Advanced JavaScript",
    provider: "Gaza Sky Geeks — On-site 4-week bootcamp",
    date: "2023",
    details:
      "Modern JS (ES6+), DOM & Console debugging, code-by-code walkthroughs, pre-/post-JS web fundamentals",
    link: "https://drive.google.com/file/d/1WNCmnjaNRNin6iCnDrl7BYycUaGrerJj/preview",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    provider: "Hope International — Online (Jordan)",
    date: "2023",
    details:
      "Red-team vs blue-team tactics, reconnaissance labs (tracking IPs, phones, cameras, systems), defensive hardening strategies",
    link: "https://drive.google.com/file/d/1yTsXAlb7Oqe9-OHLaR9bhLRdBz5PaBfR/preview",
  },
  {
    title: "Express JS Backend Development",
    provider: "University Summer Internship, Hebron — 300 hrs on-site",
    date: "2023",
    details:
      "RESTful APIs with Express, SQL DB design, AWS services (EC2, S3, RDS, Load Balancer), AI-powered features; built a CMS capstone",
    link: "https://drive.google.com/file/d/18dlrQQHdwJ0cXsgVewuP5A2dCHvEqcuW/preview",
  },
  {
    title: "Flutter Development",
    provider: "University program with CoTeDe — 50 hrs on-site (Udacity curriculum)",
    date: "2023",
    details:
      "Flutter UI, state management & REST integration; coached project “Suzi Shop” (e-commerce app)",
    link: "https://drive.google.com/file/d/1MCVGWHrjssAEKLMpeP0UsYOfFxg6xpSu/preview",
  },
  {
    title: "Oracle SQL & Security",
    provider: "Gaza Sky Geeks — 3-month intensive",
    date: "2025",
    details:
      "Introduction to Oracle Database, writing complex SQL queries, role-based user management and security hardening",
    link: "https://drive.google.com/file/d/1XR0vyo30CWJ5OLkl_4dIeCKygeUIITp8/preview",
  },
  {
    title: "Palestinian Internship Program (PIP)",
    provider:
      "Palestinian Internship Program — Online workshops by Arab & international professionals from Jerusalem",
    date: "Jan–Jun 2025",
    details:
      "A six-month training program with professional instructors (e.g., Microsoft engineers at leading companies), aimed at preparing Palestinian youth for the job market.",
    link: "https://drive.google.com/file/d/1kQiByGrrGaaKFjr0d_kcPkp2V5ny1DKD/view?usp=sharing", // placeholder
  },
];

export default function CertificationsTimeline() {
  const [showPopupIndex, setShowPopupIndex] = useState(null);

  const handleClick = (e, certIndex) => {
    if (certifications[certIndex].link === "#") {
      e.preventDefault();
      setShowPopupIndex(certIndex);
      setTimeout(() => setShowPopupIndex(null), 2000);
    }
    // external links navigate normally
  };

  return (
    <section id="certifications" className="timeline-section">
      <h2>Certifications</h2>
      <div className="timeline">
        {certifications.map((cert, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{cert.title}</h3>
              <p className="provider">
                {cert.provider} — {cert.date}
              </p>
              <p className="details">{cert.details}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  className="view-cert"
                  onClick={(e) => handleClick(e, i)}
                  {...(cert.link !== "#" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  View Certificate
                </a>
              )}
              {showPopupIndex === i && (
                <div className="cert-popup">Not yet available</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
