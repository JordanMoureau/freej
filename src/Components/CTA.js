import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <Link to="/prequalquiz">
      <button className="cta-button">✨ Book a Chat ✨</button>
    </Link>
  );
}
