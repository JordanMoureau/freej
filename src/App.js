import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadingTime = 4000;
    const startTime = Date.now();

    const preloadVideos = async () => {
      const videoPaths = [
        "../Media/teatime.mp4",
        "../Media/thevibetrim.mp4",
        "../Media/hero.png",
      ];

      const videoPromises = videoPaths.map((path) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement("video");
          video.src = path;
          video.oncanplaythrough = () => resolve();
          video.onerror = (err) => reject(err);
        });
      });

      try {
        await Promise.all(videoPromises); // Wait for all videos to preload
      } catch (error) {
        console.error("Error loading videos:", error); // Log errors
      }

      // Ensure minimum loading time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadingTime - elapsedTime;
      if (remainingTime > 0) {
        setTimeout(() => setIsLoading(false), remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    preloadVideos();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/prequalquiz" element={<PrequalQuiz />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
