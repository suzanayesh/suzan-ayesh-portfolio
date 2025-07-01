// src/components/HomePage.jsx
import { useState } from "react";
import { FiArrowLeft, FiDownload, FiMenu } from "react-icons/fi";
import logo from "../assets/SAlogo.png";
import cvFile from "../SuzanAyesh_CV.pdf";

import CertificationsTimeline from "./CertificationsTimeline";
import Education from "./Education";
import ExperiencesCarousel from "./ExperiencesCarousel";
import Languages from "./Languages";
import PhotoSlider from "./PhotoSlider";
import ProjectCarousel from "./ProjectCarousel";
import SkillsMarquee from "./SkillsMarquee";

import "./HomePage.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#experiences", label: "EXPERIENCES" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#education", label: "EDUCATION" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="homepage-header">
        <div className="nav-wrapper">
          {/* Logo */}
          <img src={logo} alt="SA logo" className="site-logo" />

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          {/* Desktop nav */}
          <div className="nav-container">
            <div className="chevron-left" />
            <ul className="menu">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
            <a
              href={cvFile}
              download="SuzanAyesh_CV.pdf"
              className="cv-button"
            >
              My CV <FiDownload />
            </a>
          </div>
        </div>
      </header>

      {/* ===== MOBILE SLIDE-IN MENU ===== */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FiArrowLeft size={24} />
        </button>
        <ul className="mobile-menu-list">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={cvFile}
          download="SuzanAyesh_CV.pdf"
          className="mobile-cv-button"
          onClick={() => setMenuOpen(false)}
        >
          My CV <FiDownload />
        </a>
      </aside>

      {/* ===== PAGE CONTENT ===== */}
      <PhotoSlider />

      <main className="homepage-main">
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            I am seeking to work as a Software Engineer to further my knowledge
            in the IT domain and utilize my skills. I am dedicated to
            continuously learning and acquiring new abilities. My experience
            includes working as a UI/UX freelancer with Wetrade General Trading
            in Lebanon, where I honed my design skills. Additionally, I served
            as a Project Coordinator and Developer for the Souqify Seminar
            Project, leading efforts to connect merchants and suppliers between
            Palestine and Turkey. These roles have equipped me with a
            comprehensive skill set and the ability to manage and execute
            complex projects effectively.
          </p>
        </section>

        <section id="experiences" className="section experiences-section">
          <h2>Experiences</h2>
          <div className="experiences-content">
            <div className="experiences-left">
              <h3>Explore My Experiments</h3>
              <p>
                Welcome to the wild side of my brain, where pixels meet bugs and
                brilliant ideas accidentally happen at 3 a.m.
              </p>
            </div>
            <div className="experiences-divider" />
            <div className="experiences-right">
              <p>
                From apps that almost broke the internet (just kidding, mom) to
                designs that made my coffee proud — here’s where my tech-meets-art
                chaos lives. Grab a snack and explore the madness.
              </p>
            </div>
          </div>
          <div className="experiences-fullwidth">
            <ExperiencesCarousel />
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <SkillsMarquee />
        </section>

<section id="projects" className="section">
          <h2>Projects</h2>
          <ProjectCarousel />
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          <Education />
          <CertificationsTimeline />
          <Languages />
        </section>

        <section id="contact" className="section">
          {/* Your contact component or form here */}
        </section>
      </main>
    </>
  );
};

export default HomePage;
