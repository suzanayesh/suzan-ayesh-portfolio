import React, { useEffect } from "react";
import logo from "../assets/SAlogo.png";
import "./SplashScreen.css";

export default function SplashScreenPulse({ onFinish }) {
  useEffect(() => {
    // total duration must match the animation length
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-pulse">
      <img src={logo} alt="SA Logo" className="pulse-logo" />
    </div>
  );
}
