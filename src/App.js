import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

import { useEffect } from "react";

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

import PopUp from "./Components/PopUp";

function MainPage() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* <PopUp /> */}
      <Hero />
      <main className="flex flex-col items-center justify-center p-8">
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/prequalquiz" element={<PrequalQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
