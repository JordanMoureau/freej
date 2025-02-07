export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      business: "XYZ Consulting",
      text: "Jordan built us a website that transformed how we get clients. Our lead generation has never been stronger!",
    },
    {
      name: "John Smith",
      business: "ABC Marketing",
      text: "Working with Jordan was a game-changer. Her attention to detail and marketing knowledge are unmatched.",
    },
    {
      name: "Sarah Lee",
      business: "The Creative Agency",
      text: "Our business saw a 40% growth in revenue after launching the site she designed. Highly recommend!",
    },
  ];

  return (
    <section className="bg-brand-cream py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Clients Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-brand-green">{testimonial.business}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
