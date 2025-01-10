import React from "react";
import "./hero.css";
import logo from "../Media/logo.png";
import CTA from "./CTA";

function Hero() {
  return (
    <section className="hero-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          I'm the person you call when you want to make a lot of money.
        </h1>
        <h3 className="hero-text">
          I do that by building powerful connections between your brand and your
          audience—connections built on showing up, earning trust, and
          delivering value. Products sell, but relationships <em>scale</em>.
        </h3>

        <CTA />
      </div>
    </section>
  );
}

export default Hero;
