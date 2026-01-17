import WhyChooseUs from "@/components/home/why";
import StatsSection from "@/components/home/numbers";
import Image from "next/image";
import { FiEye, FiTarget, FiCalendar, FiBriefcase, FiUsers } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="pt-28">
      {/* Header */}
      <section className="relative h-[65vh] flex items-center justify-center text-center">
  {/* Background Image */}
  <Image
    src="/images/aboutus.jpg"
    alt="Construction site"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

  {/* Text */}
  <div className="relative z-10 max-w-4xl px-6 text-white">
    <span className="inline-block mb-6 px-5 py-2 rounded-full 
                 bg-yellow-500 text-yellow-00 
                 text-base md:text-lg 
                 font-semibold tracking-wider uppercase">
      About Our Company
    </span>

    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Building with <span className="text-yellow-400">Trust</span>,  
      <span className="text-yellow-400"> Quality</span> & Commitment
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
      Delivering high-quality construction solutions and long-lasting
      relationships through excellence, transparency, and care.
    </p>
  </div>
</section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Company */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Mountain Square Construction is committed to delivering high-quality
            residential and commercial construction projects. We focus on
            precision, durability, and customer satisfaction at every stage.
          </p>
        </div>
 
       {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 text-center">

          {/* VISION */}
          <div>
            <FiEye className="mx-auto text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold tracking-wide mb-4">
              OUR VISION
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
              To be a leader in innovative, sustainable construction that
              shapes communities and enhances lives.
            </p>
          </div>

          {/* MISSION */}
          <div>
            <FiTarget className="mx-auto text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold tracking-wide mb-4">
              OUR MISSION
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
              Delivering high-quality, efficient construction services while
              exceeding client expectations and maintaining the highest
              standards.
            </p>
          </div>

        </div>
        {/* Why Choose Us */}
       <WhyChooseUs />
       <StatsSection />
      </section>
    </main>
  );
}
