import "./whoyouare.css";

export default function WhoYouAre() {
  const scenarios = [
    {
      title: "Looking to Make Revenue Reliable",
      description:
        "You’re tired of unpredictable months and want a system that keeps your income steady and stress-free.",
    },
    {
      title: "Ready to Scale Your Business",
      description:
        "You’ve proven your offer works, and now you want to grow without burning out or losing quality.",
    },
    {
      title: "Struggling to Reach the Right Audience",
      description:
        "You’ve got a great product or service, but you’re not connecting with the customers who need it most.",
    },
  ];

  return (
    <div className="clients-section">
      <h1>If this is you...</h1>
      <div className="clients-cards">
        {scenarios.map((scenario, index) => (
          <div className="client-card" key={index}>
            <h2>{scenario.title}</h2>
            <p>{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
