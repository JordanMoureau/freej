export default function Portfolio() {
  const projects = [
    { name: "Project One", image: "project1.jpg", link: "/project1" },
    { name: "Project Two", image: "project2.jpg", link: "/project2" },
    { name: "Project Three", image: "project3.jpg", link: "/project3" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
        <p className="text-lg mb-12">
          See the websites I’ve built to deliver results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
