import Image from "next/image";
const projects = [
  {
    category: "Individual Houses",
    items: [
      {
        name: "Luxury Villa",
        location: "Rachanahalli site number 18, Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/p1.jpeg",
      },
      {
        name: "Independent House",
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
        status: "Completed",
        image: "/images/projects/indephouse/projects2.jpg",
      },
      {
        name: "Appartment",
        location: "Rachanahalli,balakotaiah appartment, Bengaluru ",
        status: "Completed",
        image: "/images/projects/indephouse/p3.jpeg",
      },
      {
        name: "Modern Residence",
        location: "BSR layout, jigani",
        status: "Completed",
        image: "/images/projects/indephouse/projects5.jpg",
      },
      {
        name: "Budget Home",
        location: "Electronic City, Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/projects4.jpg",
      },

      {
        name: "Modern Residence",
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
        status: "Ongoing",
        image: "/images/projects/indephouse/projects6.jpg",
      },

      {
        name: "Budget Home",
        location: "BSR layout, jigani",
        status: "Ongoing",
        image: "/images/projects/indephouse/projects7.jpg",
      },
       {
        name: "PN Residence",
        location: "HSR layout ,Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/projects8.jpeg",
      },
       {
        name: "Modern Residence",
        location: "HSR layout ,Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/projects9.jpeg",
      },
       {
        name: "Modern Residence",
        location: "Rachanahalli ,Bengaluru",
        status: "Completed",
        image: "/images/projects/indephouse/p4.jpeg",
      },
       {
        name: "Modern Residence",
        location: "Rachanahalli ,Bengaluru",
        status: "Ongoing",
        image: "/images/projects/indephouse/p5.jpeg",
      },
       {
        name: "Modern Residence",
        location: "Rachanahalli ,Bengaluru",
        status: "Ongoing",
        image: "/images/projects/indephouse/p6.jpeg",
      },
       {
        name: "Modern Residence",
        location: "Rachanahalli ,Bengaluru",
        status: "Ongoing",
        image: "/images/projects/indephouse/p7.jpeg",
      },
       {
        name: "Modern Residence",
        location: "Rachanahalli ,Bengaluru",
        status: "Ongoing",
        image: "/images/projects/indephouse/p8.jpeg",
      },
       {
        name: "Appartment",
        location: "Rachanahalli ,Bengaluru",
        status: "Ongoing",
        image: "/images/projects/indephouse/p9.jpeg",
      },
      

      

    ],
  },

  {
    category: "Interior Design & Execution",
    items: [
      {
        name: "Modern Kitchen",
        location: "BSR Layout, Jigani, Bengaluru",
        status: "Completed",
        image: "/images/projects/interior/interior1.jpg",
      },
      {
        name: "Stair Interior",
        location: "Kanakpura Road, Thatagunni, Bengaluru",
        status: "Completed",
        image: "/images/projects/interior/interior2.jpg",
      },
      {
        name: "Home Interior",
        location: "Royal Reed Layout, Electronic City",
        status: "Completed",
        image: "/images/projects/interior/interior3.jpg",
      },
      {
        name: "Living Room Design",
        location: "Kalluballu, Jigani, Bengaluru",
        status: "Completed",
        image: "/images/projects/interior/interior4.jpg",
      },
      {
        name: "Living Room Design",
        location: "Hulimangala, Bengaluru",
        status: "Completed",
        image: "/images/projects/interior/interior5.jpg",
      },
    ],
  },

  {
    category: "2D & 3D Architectural Planning",
    items: [
      {
        
        location: "Jigani, Bengaluru",
         status: "Completed",
        image: "/images/projects/3d/architecture1.jpg",
      },
      {
        
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
          status: "Completed",
        image: "/images/projects/3d/architecture2.jpg",
      },
      {
        
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
         status: "Completed",
        image: "/images/projects/3d/architecture3.jpg",
      },
      {
         
        location: "Jigani, Bengaluru",
         status: "Completed",
        image: "/images/projects/3d/architecture4.jpg",
      },
      {
        
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
        status: "Completed",
        image: "/images/projects/3d/architecture5.jpg",
      },
        {
        
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
        status: "Completed",
        image: "/images/projects/3d/architecture6.jpg",
      },
        {
        
        location: "Jigani, Bengaluru",
        status: "Completed",
        image: "/images/projects/3d/architecture7.jpg",
      },
    ],
  },

  {
    category: "Renovation Projects",
    items: [
      {
        
        location: "Bommanahalli, Begur",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation2.jpg",
      },
      {
       
        location: "Jigani, Bengaluru",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation3.jpg",
      },
      {
         
        location: "Royal reed layout, Podu, Hulimangala, Electronic City",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation4.jpg",
      },
      {
        name: "Kitchen Renovation",
        location: "Rajajinagar",
        status: "Ongoing",
        image: "/images/projects/rehouse/renovation5.jpg",
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
