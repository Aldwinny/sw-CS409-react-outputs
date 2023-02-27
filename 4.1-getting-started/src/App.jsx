import React from "react";
import { Routes, Route } from "react-router-dom";
import HelloPage from "./pages/HelloPage";
import SplashPage from "./pages/SplashPage";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Getting Started</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HelloPage />} />
      </Routes>
    </div>
  );
}

export default App;
