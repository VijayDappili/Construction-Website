import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
        name: "Luxury Villa",
        location: "Rachanahalli site number 18, Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/p1.jpeg",
      },
  {
        name: "Modern Kitchen",
        location: "BSR Layout, Jigani, Bengaluru",
        status: "Completed",
        image: "/images/projects/interior/interior1.jpg",
      },
  {
        
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
         status: "Completed",
        image: "/images/projects/3d/architecture3.jpg",
      },
];

export default function HomeProjects() {
  return (
    <section className="bg-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-8 py-3 rounded-full 
                          bg-yellow-500 text-black
                           text-lg font-semibold tracking-wider uppercase">
            Our Work
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Featured <span className="text-orange-600">Projects</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed and ongoing projects that
            showcase our expertise and quality.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              {/* IMAGE */}
              <div className=" relative h-60">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* INFO */}
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-block bg-orange-600 text-white px-10 py-3 rounded font-semibold hover:bg-orange-700 transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
