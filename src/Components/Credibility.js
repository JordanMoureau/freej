import "./cred.css";
import { motion } from "framer-motion";

export default function Cred() {
  const stats = [
    { title: "+300% in Sales", description: "E-Commerce & Foot Traffic" },
    { title: "+600% In Web Traffic", description: "Lead Mine System" },
    { title: "Minimum 2x ROI Guarantee", description: "On Every Project" },
    {
      title: "+200% Calls & Leads",
      description: "Auditing & Improving Existing Systems",
    },
    {
      title: "20% Click Rates",
      description: "Google PPC Campaigns",
    },
    { title: "+300% in Sales", description: "E-Commerce & Foot Traffic" },
    { title: "+600% In Web Traffic", description: "Lead Mine System" },
    { title: "Minimum 2x ROI Guarantee", description: "On Every Project" },
    {
      title: "+200% Calls & Leads",
      description: "Auditing & Improving Existing Systems",
    },
    {
      title: "20% Click Rates",
      description: "Google PPC Campaigns",
    },
    { title: "+300% in Sales", description: "E-Commerce & Foot Traffic" },
    { title: "+600% In Web Traffic", description: "Lead Mine System" },
    { title: "Minimum 2x ROI Guarantee", description: "On Every Project" },
    {
      title: "+200% Calls & Leads",
      description: "Auditing & Improving Existing Systems",
    },
    {
      title: "20% Click Rates",
      description: "Google PPC Campaigns",
    },
  ];

  const testimonials = [
    { name: "Misty", feedback: "SHUT UP NO WAY! Jordan, you are my hero." },

    { name: "Mathew G.", feedback: "I can’t recommend Jordan enough." },
    // {
    //   name: "Joe W.",
    //   feedback:
    //     "You tell me the truth. Not what I want to hear. It's so refreshing.",
    // },
    {
      name: "JC",
      feedback:
        "Within a day, we were overwhelmed with an influx of phone calls...",
    },
    {
      name: "Jena",
      feedback: "I do not think I could have done this without you!",
    },
    { name: "Misty", feedback: "SHUT UP NO WAY! Jordan, you are my hero." },

    { name: "Mathew G.", feedback: "I can’t recommend Jordan enough." },
    // {
    //   name: "Joe W.",
    //   feedback:
    //     "You tell me the truth. Not what I want to hear. It's so refreshing.",
    // },
    {
      name: "JC",
      feedback:
        "Within a day, we were overwhelmed with an influx of phone calls...",
    },
    {
      name: "Jena",
      feedback: "I do not think I could have done this without you!",
    },
  ];

  const leftScroll = {
    animate: {
      x: [0, -2000], // Adjust based on content width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust speed
          ease: "linear",
        },
      },
    },
  };

  const rightScroll = {
    animate: {
      x: [0, 2000], // Moves to the right
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // Adjust speed to match leftScroll
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="credibility-container">
      <h1 className="credibility-title">Why Work With Me?</h1>

      <h2>Real results from real projects.</h2>
      <div className="carousel-container">
        <motion.div
          className="carousel-row"
          variants={leftScroll}
          animate="animate"
        >
          {stats.map((stat, index) => (
            <div className="carousel-item" key={index}>
              <h3 className="credibility-stat">{stat.title}</h3>
              <p className="credibility-description">
                ✨ {stat.description} ✨
              </p>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="carousel-row reverse"
          variants={rightScroll}
          animate="animate"
        >
          {testimonials.map((testimonial, index) => (
            <div className="carousel-item" key={index}>
              <h3 className="credibility-stat">"{testimonial.feedback}"</h3>
              <p className="testimonial-feedback">- {testimonial.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
