// src/components/SkillsMarquee.jsx
import { useState } from "react";
import "./SkillsMarquee.css";

// Import logos
import agile from "../assets/agile.png";
import aws from "../assets/aws.png";
import css3 from "../assets/css3.png";
import cyber from "../assets/cybersecurity.png";
import docker from "../assets/docker.png";
import express from "../assets/expressjs.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import git from "../assets/git.png";
import html5 from "../assets/html5.png";
import javaLogo from "../assets/java.png";
import js from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import linux from "../assets/linux.png";
import node from "../assets/nodejs.png";
import php from "../assets/php.png";
import postgres from "../assets/postgres.png";
import pydi from "../assets/pydi.png";
import railway from "../assets/railway.png";
import reactLogo from "../assets/react.png";
import spring from "../assets/spring.png";
import sql from "../assets/sql.png";
import ts from "../assets/typescript.png";
import uxui from "../assets/uxui.png";

const logos = [
  linux, reactLogo, uxui, spring, flutter, sql, railway,
  php, docker, aws, agile, jquery, javaLogo, pydi,
  html5, css3, cyber, js, git, ts, node, express,
  figma, postgres,
];

export default function SkillsMarquee() {
  const [paused, setPaused] = useState(false);

  const togglePaused = () => setPaused((p) => !p);

  return (
    <section id="skills" className="skills-section">
      <div
        className={`marquee${paused ? " paused" : ""}`}
        onClick={togglePaused}
        role="button"
        aria-label={paused ? "Resume scrolling" : "Pause scrolling"}
      >
        <div className="marquee__inner">
          {[...logos, ...logos].map((logo, i) => (
            <div className="marquee__item" key={i}>
              <img src={logo} alt={`Skill ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
