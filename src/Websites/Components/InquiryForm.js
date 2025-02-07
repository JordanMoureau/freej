export default function InquiryForm() {
  return (
    <section className="bg-brand-green text-white py-20 px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Ready to Build Your Dream Website?
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-brand-light text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-brand-light text-white"
          />
          <textarea
            placeholder="Project Description"
            className="w-full p-3 rounded-lg bg-brand-light text-white h-32"
          ></textarea>
          <button className="bg-brand-cream hover:bg-brand-dark text-brand-green font-semibold py-2 px-4 rounded">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
