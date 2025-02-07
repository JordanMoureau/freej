export default function ServicesList() {
  const services = [
    "Landing Pages",
    "Full Marketing Websites",
    "E-commerce Solutions",
    "SEO & Analytics",
    "Copywriting & Brand Storytelling",
  ];

  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What I Can Build for You</h2>
        <p className="text-lg mb-12">
          Websites designed to grow your business and deliver results.
        </p>
        <ul className="space-y-4 text-lg">
          {services.map((service, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                ✓
              </span>
              {service}
            </li>
          ))}
        </ul>
        <button className="mt-8 bg-brand-green hover:bg-brand-dark text-white font-semibold py-2 px-4 rounded">
          Let’s Start Your Project
        </button>
      </div>
    </section>
  );
}
