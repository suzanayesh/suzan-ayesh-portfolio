import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import SplashScreen from "./components/SplashScreen";
import "./index.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app">
      {/* Splash screen sits on top until onFinish() */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Main content hidden until splash is gone */}
      <main className="main" style={{ visibility: showSplash ? "hidden" : "visible" }}>
        <HomePage />
      </main>

      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
