import React, { useEffect, useRef, useState } from "react";
import "./PhotoSlider.css";

import photo1 from "../assets/suzan.png";
import photo2 from "../assets/suzan4.png";
import photo3 from "../assets/suzan5.png";

const slides = [
  { src: photo1, alt: "Suzan slide 1" },
  { src: photo2, alt: "Suzan slide 2" },
  { src: photo3, alt: "Suzan slide 3" },
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCurrent(i => (i + 1) % slides.length),
      7000
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goPrev = () =>
    setCurrent(i => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () => setCurrent(i => (i + 1) % slides.length);

  return (
    <div className="slider">
      {slides.map((slide, idx) => (
        <img
          key={idx}
          className={`slide${idx === current ? " active" : ""} slide-${idx + 1}`}
          src={slide.src}
          alt={slide.alt}
        />
      ))}

      <button className="nav prev" onClick={goPrev} aria-label="Previous">
        ‹
      </button>
      <button className="nav next" onClick={goNext} aria-label="Next">
        ›
      </button>

      {current === 0 && (
        <div className="caption">
          <h1>SUZAN</h1>
          <h2>AYESH</h2>
        </div>
      )}
    </div>
  );
}
