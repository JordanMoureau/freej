import React from "react";
import { motion } from "framer-motion";
import { FaMountain } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg";
import { FaDog } from "react-icons/fa";
import "./loader.css";

function Loader() {
  // Individual icon blink animation
  const iconBlinkAnimation = {
    initial: { opacity: 0 },
    animate: (delay) => ({
      opacity: [1, 0, 1],
      transition: {
        duration: 0.5,
        repeat: 2, // Adjust for specific blinks (repeat = total blinks - 1)
        delay: delay, // Sequential animation
      },
    }),
  };

  return (
    <div className="loader-container">
      <div className="icon-container">
        {/* Mountain Icon */}
        <motion.div
          className="icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0.2, 1, 0.2, 1, 0.2, 1] }} // 3 blinks
          transition={{
            duration: 5, // Total duration for 3 blinks (adjust as needed)
            ease: "easeInOut",
          }}
        >
          <FaMountain size={30} />
        </motion.div>

        {/* Coffee Icon */}
        <motion.div
          className="icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 0.2, 1, 0.2, 1] }} // Starts after Mountain, 2 blinks
          transition={{
            duration: 7, // Matches total duration for consistency
            ease: "easeInOut",
            delay: 1.5, // Starts after Mountain's first blink
          }}
        >
          <CgCoffee size={30} />
        </motion.div>

        {/* Dog Icon */}
        <motion.div
          className="icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 1, 0.2, 1, 0.2, 1] }} // Starts after Coffee, 2 blinks
          transition={{
            duration: 10, // Matches total duration for consistency
            ease: "easeInOut",
            delay: 1, // Starts after Coffee finishes blinking
          }}
        >
          <FaDog size={30} />
        </motion.div>
      </div>

      {/* Loading Text with Animated Dots */}
      <p className="loading-text">
        Loading
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          .
        </motion.span>
      </p>
    </div>
  );
}

export default Loader;
