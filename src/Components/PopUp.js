import React, { useState, useEffect } from "react";
import "./popup.css";

export default function PopUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const [hasScrolled, setHasScrolled] = useState(false); // Detect scroll event

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("FNAME", firstName);
    formData.append("tags", "4032053");

    try {
      const response = await fetch(
        "https://freelancejordan.us19.list-manage.com/subscribe/post-json?u=385e30180dbe1c3d896b74fb2&id=22ae9ab7f6&c=?",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Prevent CORS errors
        }
      );

      // Mailchimp doesn't send a response for no-cors; assume success
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was an issue with your subscription. Please try again.");
    }
  };

  // Close the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Show the popup after scrolling and a 3-second delay
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 3000); // Delay showing the popup by 3 seconds after the first scroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [hasScrolled]);

  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => {
        closePopup();
      }, 2800); // Close pop-up after 3 seconds

      return () => clearTimeout(timeout); // Cleanup timeout if component unmounts
    }
  }, [submitted]);

  if (!isVisible) return null; // Don't render the popup if it's not visible

  if (submitted) {
    return (
      <div className="PopUp">
        <h2>Check your email. You've got something special in it. ✨</h2>
      </div>
    );
  }

  return (
    <>
      <div className="backdrop" onClick={closePopup}></div>
      <div className="PopUp">
        <div className="close-btn" onClick={closePopup}>
          &times;
        </div>
        <h1>5 ChatGPT prompts for Bootstrapping your Marketing</h1>
        <p>You've never seen using AI like this before</p>
        <form className="pop-up-form" onSubmit={handleSubmit}>
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            className="required email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />

          <label htmlFor="mce-FNAME">First Name</label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your Name"
          />

          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_385e30180dbe1c3d896b74fb2_22ae9ab7f6"
              tabIndex="-1"
              value=""
              readOnly
            />
          </div>
          <div className="clear">
            <button type="submit">Submit</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </>
  );
}
