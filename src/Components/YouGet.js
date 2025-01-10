import CTA from "./CTA";
import "./youget.css";

export default function WhatYouGet() {
  const cards = [
    {
      title: "Custom Strategy",
      description:
        "Every business is different, and so is the marketing that works for them. Together we will design a roadmap to where you want to be and troubleshoot every step of the process. No two plans I build are the same and the almighty pivot is a keystone of all my strategies.",
      icon: "",
    },
    {
      title: "Performance Campaigns",
      description:
        "Don't wasting time on campaigns that won’t convert. I design and execute high-performing marketing campaigns that not only capture attention but also drive tangible results. From ad copy to A/B testing, every campaign is built to maximize ROI and ensure your business thrives in a highly competitive space.",
      icon: "",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with insights that matter. Using advanced analytics, I help you uncover what’s working and what’s not. From audience behavior to campaign performance, I provide actionable data to refine strategies, optimize performance, and achieve continuous growth for your business.",
      icon: "",
    },
    {
      title: "Conversion-Optimized Websites",
      description:
        "Your website should be more than just a pretty face—it should be your hardest-working sales tool. Without a website optimized for sales, your ads won't convert. My process digs into what's missing in your web presence and elevates it. Every site is crafted to reflect your brand, connect with your audience and drive results.",
      icon: "",
    },
    {
      title: "Irresistible Offers & Funnels",
      description:
        "I design end-to-end lead funnels, complete with irresistible offers, nurturing emails, and high-converting landing pages. Together, we’ll build a system that attracts, engages, and converts your ideal clients at every stage of their journey.",
      icon: "",
    },
  ];

  return (
    <div className="what-you-get-container">
      <h1 className="section-title">What You Get Working with Me</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
