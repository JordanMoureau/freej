import CTA from "./CTA";
import "./endgame.css";

export default function Endgame() {
  return (
    <div className="endgame-container">
      <div className="endgame">
        <h1>Here’s What’s Next</h1>
        <p>
          You’ve got the vision—it’s time to turn it into reality. Whether you
          need a system to stabilize revenue, scale your business, or connect
          with the right audience, this is where it starts. Imagine yourself
          here. Taking a measurable step toward your goals.
        </p>
        <div className="endgame-steps">
          <div className="step">
            <h2>Step 1: Book a Call</h2>
            <p>
              We’ll talk about where you are, where you want to be, and what’s
              standing in the way.
            </p>
          </div>
          <div className="step">
            <h2>Step 2: Build the System</h2>
            <p>
              We’ll create a custom strategy designed to meet your goals—whether
              that’s consistent revenue, scalable growth, or deeper audience
              connections.
            </p>
          </div>
          <div className="step">
            <h2>Step 3: Watch It Work</h2>
            <p>
              With the system up and running, at this point we will dig into
              refining the process and making it the most cost efficient while
              exploring what scaling needs to look like for you.
            </p>
          </div>
        </div>
        <CTA />
      </div>
    </div>
  );
}
