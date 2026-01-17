import Image from "next/image";
const services = [
  {
    title: "Construction of Individual Houses",
    desc: "We specialize in crafting custom homes that perfectly reflect your unique style and needs. From the foundation to the final touches, we ensure exceptional quality and attention to detail, transforming your vision into a dream home that stands the test of time.",
    image:"/images/services/singlehouse.jpg"
  },
  {
    title: "Interior Design & Execution",
    desc: "Our team of expert designers creates spaces that are both functional and visually stunning. Tailored to suit your lifestyle, we manage every aspect of the design and execution process to bring your vision to life with elegance and precision.",
    image:"/images/services/interior.jpg"
  },
  {
    title: "2D & 3D Architectural Planning",
    desc: "We offer detailed 2D and 3D architectural plans that provide a clear, accurate representation of your project. Combining creativity and technical expertise, we ensure a seamless transition from concept to construction, guiding you through each stage with precision.",
    image:"/images/services/3d.jpg"
  },
  {
    title: "Renovation of Existing Buildings",
    desc: "Breathe new life into your existing spaces with our expert renovation and remodeling services. Whether enhancing interiors or updating structural elements, we help modernize and refresh your building while maintaining its character and integrity.",
    image:"/images/services/rehouse.jpg"
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28">
       <section className="relative h-[65vh] flex items-center justify-center text-center">
       {/* Background Image */}
       <Image
         src="/images/services/title.jpg"
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
      What We Offer
    </span>

    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Our <span className="text-yellow-400">Services</span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
      Comprehensive construction solutions delivered with quality,
      precision, and commitment.
    </p>
  </div>
        
        
      </section>

      <section className="max-w-8xl mx-auto px-11 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group"
          >
 {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>


            {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-orange-600 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {service.desc}
        </p>
      </div>
          </div>
        ))}
      </section>
    </main>
  );
}
