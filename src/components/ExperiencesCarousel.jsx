// src/components/ExperiencesCarousel.jsx
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import "./ExperiencesCarousel.css";

import PlaceholderLogo from "../assets/placeholder.png";
import SouqifyLogo     from "../assets/souqify.png";
import CharegliLogo    from "../assets/charegli.png";
import CMSLogo         from "../assets/cms.png";
import SuziLogo        from "../assets/suzi.png";
import BULogo          from "../assets/BU.png";
import MedicLogo       from "../assets/medic.png";

const experiences = [
  {
    title: "Not Allowed to Publish it yet",
    image: PlaceholderLogo,
    description: "“as Client went”",
    tags: [],
    dateRole: "",
    externalUrl: "#",
  },
  {
    title: "Souqify App",
    image: SouqifyLogo,
    // plain description text; link appended in JSX
    description:
      "My Seminar Full-Stack Project—B2B digital communication platform specifically tailored for the fashion retail industry. It bridges Palestinian retailers with Turkish suppliers, streamlining the ordering process for high-quality products. Souqify enhances the supply chain, simplifying connections, orders, and inventory management for businesses.",
    figmaUrl:
      "https://www.figma.com/design/N5knv7LqsfnLdOU78jTrQ2/Souqify-App?node-id=0-1&t=Zms9ib0KxQTPVKtB-1",
    tags: [
      "Angular",
      "Spring Boot",
      "Railway",
      "PostgreSQL",
      "Ionic",
      "WebSocket",
      "Postman",
      "Trello",
    ],
    dateRole: "Jun-2024 | Back-End DB & UI/UX Designer",
    externalUrl: "https://github.com/suzanayesh/SouqifyBackEnd",
  },
  {
    title: "CHAREGLI Web",
    image: CharegliLogo,
    description:
      "I worked as a freelancer on the UI/UX design for Charegli, a Lebanese company specializing in online game shipping through the purchase of shipping cards. My role involved updating all website screens to enhance user experience and streamline navigation.",
    tags: ["Figma", "Figma Community"],
    dateRole: "Apr-2024 | UI/UX Designer",
    externalUrl:
      "https://www.figma.com/design/g2wiIfoepARYeCTQFwejPA/CHAREGLI-Web?node-id=0-1&t=PcTXJGwX1OrArAI3-1",
  },
  {
    title: "Content Management System",
    image: CMSLogo,
    description:
      "Content Management System (CMS) project, an initiative built after the training program with GSG (Gaza Sky Geeks), designed to handle digital content with ease and efficiency. It allows users to create, manage, and publish content without needing technical knowledge.",
    tags: [
      "Node.js",
      "JavaScript",
      "Docker",
      "XAMPP",
      "MySQL",
      "CI/CD",
      "AWS",
      "Git",
    ],
    dateRole: "Apr-2024 | UI/UX Designer",
    externalUrl:
      "https://github.com/salsabeel-alsahory/Content-Management-System-CMS-",
  },
  {
    title: "Clothing Shop",
    image: SuziLogo,
    description:
      "Developed a complete e-commerce web application using Flutter and MySQL. The app allows users to browse products by category, search and filter items, add them to a cart, and place orders. Designed a clean UI with smooth user experience, and implemented backend logic for order handling and product filtering using SQL queries.",
    tags: ["Flutter", "MySQL", "XAMPP"],
    dateRole: "Sep-2023 | Flutter",
    externalUrl: "https://github.com/suzanayesh/clothes-app.git",
  },
  {
    title: "Student Assistant | Bethlehem University",
    image: BULogo,
    description:
      "As a work-study Student Assistant for the Department for Students with Disabilities for 2 years, I focused on data entry, analysis, and preparing academic materials for accessibility.",
    tags: ["Excel", "Word"],
    dateRole: "Sep 2021–Jul 2023",
    externalUrl: "#",
  },
  {
    title: "Volunteer Medic | Medical Relief",
    image: MedicLogo,
    description:
      "Served as a medic for 9 years, providing emergency medical assistance in various public events and emergencies. Led medical teams during marathons, and conducted first aid training sessions for doctors, students, and schools.",
    tags: ["First Aid", "Team Leadership", "Training"],
    dateRole: "2015–Nov 2024",
    externalUrl: "#",
  },
];

export default function ExperiencesCarousel() {
  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: dir === "next" ? slider.clientWidth : -slider.clientWidth,
      behavior: "smooth",
    });
  };

  const handlePlaceholderClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="experiences-carousel">
      <button
        className="exp-nav prev"
        onClick={() => scroll("prev")}
        aria-label="Previous"
      >
        <FiChevronLeft />
      </button>

      <div className="exp-slider" ref={sliderRef}>
        {experiences.map((exp, i) => {
          const isNoArrowRole =
            exp.title.startsWith("Student Assistant") ||
            exp.title.startsWith("Volunteer Medic");
          const isPlaceholder = exp.externalUrl === "#";

          return (
            <div key={i} className="exp-card">
              <div className="exp-image-container">
                <img src={exp.image} alt={exp.title} />
              </div>
              <h3 className="exp-title">{exp.title}</h3>

              {/* description + optional Figma link */}
              <p className="exp-description">
                {exp.description}
                {exp.figmaUrl && (
                  <>{" "}<a
                    href={exp.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="figma-inline-link"
                  >
                   Figma Link
                  </a></>
                )}
              </p>

              <div className="exp-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="exp-footer">
                <span className="exp-date">{exp.dateRole}</span>

                {!isNoArrowRole && (
                  isPlaceholder ? (
                    <span className="exp-link" onClick={handlePlaceholderClick}>
                      <FiArrowRight size={20} />
                    </span>
                  ) : (
                    <a
                      href={exp.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-link"
                    >
                      <FiArrowRight size={20} />
                    </a>
                  )
                )}

                {isPlaceholder && showPopup && (
                  <div className="placeholder-popup">Not available yet</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="exp-nav next"
        onClick={() => scroll("next")}
        aria-label="Next"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
