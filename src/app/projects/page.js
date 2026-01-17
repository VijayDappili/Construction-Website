import Image from "next/image";
const projects = [
  {
    category: "Individual Houses",
    items: [
      {
        name: "Luxury Villa",
        location: "Bangalore",
        status: "Completed",
        image: "/images/projects/indephouse/projects1.jpg",
      },
      {
        name: "Independent House",
        location: "BTM Layout",
        status: "Ongoing",
        image: "/images/projects/indephouse/projects2.jpg",
      },
      {
        name: "Duplex Home",
        location: "Jigani",
        status: "Completed",
        image: "/images/projects/indephouse/projects3.jpg",
      },
      {
        name: "Modern Residence",
        location: "Whitefield",
        status: "Completed",
        image: "/images/projects/indephouse/projects4.jpg",
      },
      {
        name: "Budget Home",
        location: "Yelahanka",
        status: "Ongoing",
        image: "/images/projects/indephouse/projects5.jpg",
      },
    ],
  },

  {
    category: "Interior Design & Execution",
    items: [
      {
        name: "3BHK Interior",
        location: "Electronic City",
        status: "Completed",
        image: "/images/projects/interior/interior1.jpg",
      },
      {
        name: "Office Interior",
        location: "HSR Layout",
        status: "Ongoing",
        image: "/images/projects/interior/interior2.jpg",
      },
      {
        name: "Modular Kitchen",
        location: "JP Nagar",
        status: "Completed",
        image: "/images/projects/interior/interior3.jpg",
      },
      {
        name: "Living Room Design",
        location: "Bannerghatta",
        status: "Completed",
        image: "/images/projects/interior/interior4.jpg",
      },
      {
        name: "Retail Interior",
        location: "Indiranagar",
        status: "Ongoing",
        image: "/images/projects/interior/interior5.jpg",
      },
    ],
  },

  {
    category: "2D & 3D Architectural Planning",
    items: [
      {
        name: "Villa Planning",
        location: "Mysore",
        status: "Completed",
        image: "/images/projects/3d/architecture1.jpg",
      },
      {
        name: "Apartment Planning",
        location: "Tumkur",
        status: "Completed",
        image: "/images/projects/3d/architecture2.jpg",
      },
      {
        name: "Commercial Plan",
        location: "Bangalore",
        status: "Ongoing",
        image: "/images/projects/3d/architecture3.jpg",
      },
      {
        name: "Farm House Plan",
        location: "Mandya",
        status: "Completed",
        image: "/images/projects/3d/architecture4.jpg",
      },
      {
        name: "Row House Plan",
        location: "Hosur",
        status: "Ongoing",
        image: "/images/projects/3d/architecture5.jpg",
      },
    ],
  },

  {
    category: "Renovation Projects",
    items: [
      {
        name: "Old House Renovation",
        location: "Jayanagar",
        status: "Completed",
        image: "/images/projects/rehouse/renovation2.jpg",
      },
      {
        name: "Office Upgrade",
        location: "MG Road",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation3.jpg",
      },
      {
        name: "Apartment Remodel",
        location: "BTM",
        status: "Completed",
        image: "/images/projects/rehouse/renovation4.jpg",
      },
      {
        name: "Kitchen Renovation",
        location: "Rajajinagar",
        status: "Completed",
        image: "/images/projects/rehouse/renovation4.jpg",
      },
      {
        name: "Bathroom Upgrade",
        location: "Basavanagudi",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation2.jpg",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-28">

      <section className="relative h-[65vh] flex items-center justify-center text-center">
             {/* Background Image */}
             <Image
               src="/images/projects/title.jpg"
               alt="Construction site"
               fill
               priority
               className="object-cover"
             />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
        {/* Text */}
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <span className="inline-block mb-6 px-5 py-2 rounded-full 
                           bg-yellow-500 text-yellow-00 
                           text-base md:text-lg 
                           font-semibold tracking-wider uppercase">
            What We Build
          </span>
      
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Our <span className="text-yellow-400">Projects</span>
          </h1>
      
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            A glimpse of our completed and ongoing projects.
          </p>
        </div>
              
               </section>
      






      {/* PROJECT SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {projects.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
              {category.category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.items.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group"
                >
                  {/* Image */}
                  <div className="relative h-56">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Status Badge */}
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

                  {/* Info */}
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
          </div>
        ))}
      </section>
    </main>
  );
}
