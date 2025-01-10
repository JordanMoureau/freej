import React, { useState } from "react";
import "./prequalquiz.css";

export default function PrequalificationQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the biggest challenge in your business right now?",
      options: [
        "I get traffic, but no conversions.",
        "I don't know if my marketing efforts are working.",
        "I'm overwhelmed with too many tools and platforms.",
        "I'm unsure what to focus on for growth.",
      ],
    },
    {
      question: "What’s your primary business goal for the next 6 months?",
      options: [
        "Increase revenue.",
        "Generate more qualified leads.",
        "Launch a new product or service.",
        "Build brand awareness and authority.",
      ],
    },
    {
      question:
        "Do you have a clear system in place to track and measure your marketing results?",
      options: [
        "Yes, and it works great!",
        "Sort of, but it’s inconsistent.",
        "No, I rely on guesses and hope for the best.",
        "I’m not sure what to track.",
      ],
    },
    {
      question:
        "If you could double your revenue in 3 months, what would you do differently?",
      options: [
        "Invest in better marketing strategies.",
        "Expand my team or offerings.",
        "Focus on scaling and growth.",
        "I don’t know where to start.",
      ],
    },
    {
      question: "What are you most passionate about in your business?",
      options: [
        "Helping people solve problems.",
        "Making a positive impact in my community.",
        "Having freedom.",
        "Building a legacy.",
      ],
    },
    {
      question:
        "Businesses I work with consistently show growth and measurable results within three months. Are you ready to commit to a proven strategy tailored to your goals?",
      options: [
        "Yes, I’m ready to take the next step!",
        "I’m interested, but I’d like to know more.",
        "Not right now, but I’d like to stay in touch.",
      ],
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [`question_${step + 1}`]: answer }));
    if (step < questions.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit(); // Submit data when the quiz is completed
    }
  };

  const handleSubmit = async () => {
    // Quiz completed
    setShowResults(true);

    // Fire Google Tag Manager Event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "quiz_completion", // Use this as the trigger name in GTM
        quizName: "Prequalification Quiz", // Optional: Add details
      });
    }

    // Fire Facebook Pixel Event
    if (window.fbq) {
      window.fbq("track", "Schedule"); // Fires the "Schedule" event
    }

    // Send data to Formspree
    const response = await fetch("https://formspree.io/f/mannaqnb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });

    if (!response.ok) {
      console.error("Error submitting form to Formspree");
    }
  };

  const progressPercentage = ((step / questions.length) * 100).toFixed(0);

  return (
    <div className="container">
      <div className="quiz-container"> </div>

      <div className="schedule-quiz">
        {showResults ? (
          <div className="results">
            <h1>Thanks for completing the quiz!</h1>
            <h2>
              Based on your responses, we believe we can help you reach your
              goals.
            </h2>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, name: e.target.value }))
              }
              className="name-input"
            />

            <a
              href="https://calendly.com/jordan-freelancejordan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              ✨ Book Your Call ✨
            </a>
          </div>
        ) : (
          <div className="quiz">
            {/* Question Section */}
            {step < questions.length && (
              <>
                <div className="question">
                  <h1>
                    Question {step + 1} of {questions.length}
                  </h1>
                  {/* Progress Bar */}
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <h2 className="question-p">{questions[step].question}</h2>
                  <div className="options">
                    {questions[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="option-button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
