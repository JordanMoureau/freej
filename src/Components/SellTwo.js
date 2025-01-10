import me from "../Media/me.jpg";
import CTA from "./CTA";

import "./selltwo.css";

export default function SellTwo() {
  return (
    <div className="the-sell">
      <div className="main-sell">
        <div className="me">
          <img src={me} />
        </div>
        <div className="sell-text">
          <h1>Create a Thriving Business</h1>
          <h2>Based on Strategy and results</h2>
          <p>
            I'm dedicated to helping entrepreneurs and business owners create
            sustainable, revenue-generating systems that not only grow their
            businesses but also give them back their time and energy.
          </p>

          <p>
            I believe that every business deserves a clear strategy, consistent
            messaging, and tools that work around the clock to capture interest
            and build relationships. That’s why I focus on systems that connect
            with your audience on every level—so you’re not just making money
            but creating a foundation for long-term success.
          </p>

          <p>
            After all, no one starts out knowing exactly how to scale their
            business or where to focus their efforts. It’s a process of
            learning, refining, and staying consistent with the right tools and
            strategies.
          </p>

          <p>
            Most entrepreneurs have big dreams, but many get stuck on how to get
            there. That’s where we come in. I bring you the tools, expertise,
            and support you need to make progress every day. Whether it’s
            through custom strategies, marketing systems, or actionable
            insights, and I'm here to help you build the business (and life)
            you’ve always envisioned.
          </p>

          <p>
            I built my business by mastering the art of strategic systems,
            growing a thriving business while helping others do the same. Now,
            I’m here to help you create a system that turns your vision into
            reality—one that works for you even when you’re not working.
          </p>

          <p>Don't build a business. Build a lifestyle.</p>

          <CTA />
        </div>
      </div>
    </div>
  );
}
