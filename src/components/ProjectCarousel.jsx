// src/components/Projects.jsx
import React from "react";
import "./ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-grid">
        {/* 1) Garden Shop – Full-Stack Fruit & Vegetable Store */}
        <article className="project-card">
          <h3>Garden Shop – Full-Stack Fruit &amp; Vegetable Store</h3>
          <p className="project-meta">Team Project | 2023</p>
          <p className="project-description">
            Developed a full-stack online store using Spring Boot and React to connect
            local farmers directly with customers, eliminating resellers to ensure fresher
            products and higher profits for farmers. The project combined coursework and
            seminar preparation, including designing the ER diagram and class diagram.
          </p>
          <p className="project-links">
            <a
              href="https://github.com/S23-SWER313/step-3-resteng"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeLink | 
            </a>
            <a
              href="https://www.figma.com/board/dDfn5IY3n1hlbjy5amdLrT/Untitled?t=PyIaljhvDmO19hRp-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diagrams
            </a>
          </p>
        </article>

        {/* 2) JobApp – UX/UI Prototype */}
        <article className="project-card">
          <h3>JobApp – UX/UI Prototype</h3>
          <p className="project-meta">UX/UI Course Project (GSG) | 2023</p>
          <p className="project-description">
            Designed a Figma-based prototype as part of a UX/UI course in collaboration
            with Gaza Sky Geeks. Created a platform connecting job seekers in the West Bank
            with opportunities in Jerusalem, focusing on user research, journey mapping,
            and accessibility.
          </p>
          <p className="project-links">
            <a
              href="https://www.figma.com/design/QrXj3I7RxxBZ54UTicrG4B/JOB-APP?node-id=0-1&t=aP9JHSmVaK6Odn9h-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Prototype
            </a>
          </p>
        </article>

        {/* 3) Web Shop – Food Recipe App */}
        <article className="project-card">
          <h3>Web Shop – Food Recipe App</h3>
          <p className="project-meta">Frontend Course Project | 2023</p>
          <p className="project-description">
            Built a responsive React web app using fake APIs. Users can browse recipes
            by category, view details, and save favorites. Developed as part of a Gaza Sky
            Geeks frontend course, focusing on component-based architecture and state
            management.
          </p>
        </article>

        {/* 4) Orphanage Database System */}
        <article className="project-card">
          <h3>Orphanage Database System</h3>
          <p className="project-meta">Database Course Project | 2022</p>
          <p className="project-description">
            Collaborated to design and implement an ER database for a Bethlehem orphanage,
            gathering requirements through stakeholder interviews and modeling an efficient
            Entity-Relationship schema.
          </p>
        </article>
      </div>
    </section>
  );
}

