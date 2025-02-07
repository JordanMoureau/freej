export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most projects are completed within 4-6 weeks, depending on the complexity and scope.",
    },
    {
      question: "Do you offer maintenance and updates?",
      answer:
        "Yes, I offer ongoing maintenance packages to keep your website running smoothly.",
    },
    {
      question: "What platforms do you use?",
      answer:
        "I work with a variety of platforms, including custom-built solutions and CMS options like WordPress.",
    },
    {
      question: "Can you help with copywriting?",
      answer:
        "Absolutely! I can help craft compelling copy that aligns with your brand and drives conversions.",
    },
    {
      question: "What is the process for starting a project?",
      answer:
        "We’ll begin with a consultation to understand your needs, followed by a proposal and timeline to get started.",
    },
  ];

  return (
    <section className="bg-brand-dark text-white py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-brand-green p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
