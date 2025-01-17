import "./whoami.css";

import teatime from "../Media/teatime.mp4";

export default function WhoAmI() {
  return (
    <div className="who-am-i">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="background-video"
      >
        <source src={teatime} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Who I Am.</h1>
        <p>
          I’m Jordan—a strategist, creator, and entrepreneur. I help business
          owners like you turn ideas into systems that drive growth. My passion
          is in bridging creativity with precision to deliver results. I love
          being the person who helps carve new pathways to success and makes big
          dreams feel achievable.
        </p>

        <p>
          As a business owner, I get the challenge of balancing big-picture
          vision with the day-to-day. That’s why I’m a solutions person. My
          special skill? Finding the path of least resistance to where you want
          to be. Whether it’s crafting a brand story or building rock-solid
          campaigns.
        </p>

        <p>
          I’m driven by curiosity and relentless determination. My goal is
          simple: for you to get more than you ever thought possible out of
          working with me. That’s the standard I hold myself to.
        </p>
      </div>
    </div>
  );
}
