// src/components/Education.jsx
import "./Education.css";

// ① import the image from your src/assets folder
import bucImage from "../assets/buc.png";

export default function Education() {
  return (
    <section id="education" className="education-section">
      {/* <h2>Education</h2> */}

      <div className="education-content">
        <div className="education-left">
          {/* ② use the imported image */}
          <img
            src={bucImage}
            alt="Bethlehem University"
          />
        </div>

        <div className="education-divider" />

        <div className="education-right">
          <h3>Bethlehem University</h3>
          <p>Faculty of Applied Sciences,</p>
                    <p>Technology & Engineering</p>
          <p>Major in Software Engineering</p>

          <p className="education-dates">Sep 2020 – Jul 2024</p>
        </div>
      </div>

      {/* <div className="edu-extra">
        <div className="edu-extra-item">
          <h3>Certifications</h3>
          <ul className="cert-list">
            <li>Oracle Certified Java Programmer</li>
            <li>Certified Scrum Master (CSM)</li>
            <li>Google UX Design Professional Certificate</li>
          </ul>
        </div> */}

        {/* <div className="edu-extra-item">
          <h3>Languages</h3>
          <ul className="lang-list">
            <li>Arabic – Native</li>
            <li>English – Fluent</li>
            <li>French – Intermediate</li>
          </ul>
        </div> */}
      {/* </div> */}
    </section>
  );
}
