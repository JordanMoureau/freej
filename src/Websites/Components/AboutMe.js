export default function AboutMe() {
  return (
    <section className="bg-light-100 py-20 px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <img
          src="your-photo-url.jpg"
          alt="Jordan"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Meet Your Web Designer and Developer
          </h2>
          <p className="text-lg mb-4">
            I’m Jordan, a passionate web designer and developer who specializes
            in creating marketing-focused websites that deliver real results.
            With years of experience in design, coding, and marketing, I
            understand what it takes to build a website that works as hard as
            you do.
          </p>
          <p className="text-lg">
            Let’s work together to bring your vision to life and create a
            website that grows your business.
          </p>
        </div>
      </div>
    </section>
  );
}
