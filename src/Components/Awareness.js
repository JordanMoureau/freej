import video from "../Media/thevibetrim.mp4";
import "./awareness.css";

export default function Awareness() {
  return (
    <div className="awareness-container">
      <div className="awareness">
        <div className="aware-head">
          <h1>It's Data, Not Magic</h1>
          <h2>Here's how I'll do it, without taking off my slippers:</h2>
          <ul>
            <li>
              Set clear goals, identify revenue targets, and tackle bottlenecks
            </li>
            <li>Dig deep into the psychology of your target market</li>
            <li>
              Craft strategic campaigns that drive traffic and conversions
            </li>
            <li>Analyze your website and sales process for maximum ROI</li>
            <li>
              Build a unique end-to-end system that transforms insights into
              lasting revenue
            </li>
          </ul>
        </div>

        <div className="aware-broll-vid">
          {/* Optimized video tag */}
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="video-element"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
