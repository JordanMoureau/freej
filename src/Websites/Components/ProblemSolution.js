export default function ProblemSolution() {
  const solutions = [
    { icon: "📈", title: "Optimize for Lead Generation and Sales" },
    { icon: "💰", title: "Designed with a Focus on ROI" },
    { icon: "📱", title: "Mobile-Responsive and SEO-Friendly" },
  ];

  return (
    <section className="bg-brand-cream py-20 px-10 text-brand-green">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Your Website Should Do More Than Look Good
        </h2>
        <p className="text-lg mb-12">
          It should work as a marketing machine that drives real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-brand-green p-6 rounded-lg shadow-md text-white"
            >
              <span className="text-4xl mb-4">{solution.icon}</span>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
