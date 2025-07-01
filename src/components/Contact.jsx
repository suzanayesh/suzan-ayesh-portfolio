import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumeFile from "../SuzanAyesh_Resume.pdf";

import {
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone
} from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const topItems = [
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Bethlehem, Palestine",
      href: "#location",
      color: "#FBC02D",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "0597669358",
      href: "tel:0597669358",
      color: "#4CAF50",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "suzan.ayesh11@gmail.com",
      href: "mailto:suzan.ayesh11@gmail.com",
      color: "#E53935",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "suzan-ayesh",
      href: "https://www.linkedin.com/in/suzan-ayesh-169a4725b",
      color: "#0A66C2",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "suzanayesh",
      href: "https://github.com/suzanayesh",
      color: "#000",
    },
   {
  icon: <FiFileText />,
  label: "Resume",
  value: "Download",
  href: resumeFile,
  color: "#9C27B0",
  download: "SuzanAyesh_Resume.pdf",
}
,
  ];

  return (
    <>
      <div className="contact-header">
        <h2>Contact</h2>
        <p className="subtitle">GET IN TOUCH</p>
      </div>

      <div className="contact-wrapper">
        <section id="contact" className="contact-section">
          <div className="contact-top-row">
            {topItems.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`contact-item${c.download ? " resume" : ""}`}
                style={{ "--item-color": c.color }}
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(c.download ? { download: c.download } : {})}
              >
                <div className="item-icon">{c.icon}</div>
                <div className="item-label">{c.label}</div>
                <div className="item-value">{c.value}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
