import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./styles.css";

import { useState, useEffect } from "react";

import Loader from "./Components/Loader";

// Components
import PrequalQuiz from "./Components/PrequalQuiz";

// Single-Page Components
import SellTwo from "./Components/SellTwo";
import Hero from "./Components/Hero";
import Awareness from "./Components/Awareness";
import WhatYouGet from "./Components/YouGet";
import WhoAmI from "./Components/WhoAmI";
import Cred from "./Components/Credibility";
import WhoYouAre from "./Components/WhoYouAre";
import Endgame from "./Components/Endgame";
import Footer from "./Components/Footer";
import Websites from "./Websites/Websites";

import PopUp from "./Components/PopUp";

function MainPage() {
  return (
    <div>
      <PopUp />
      <Hero />
      <main>
        <Awareness />
        <WhatYouGet />
        <SellTwo />
        <WhoAmI />
        <Cred />
        <WhoYouAre />
        <Endgame />
      </main>
      <Footer />
    </div>
  );
}
function App() {
  function LeadMagnetRedirect() {
    useEffect(() => {
      const link = document.createElement("a");
      link.href = "/leadmagnet.pdf"; // Ensure this is the correct path
      link.setAttribute("download", "leadmagnet.pdf"); // Forces download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, []);

    return null; // No UI needed
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/prequalquiz" element={<PrequalQuiz />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/leadmagnet" element={<LeadMagnetRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
