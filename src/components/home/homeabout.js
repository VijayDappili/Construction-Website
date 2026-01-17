import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT: TEXT */}
      <div>
        <span className="inline-block mb-4 px-4 py-1 rounded-full 
                         bg-orange-500/10 text-orange-600 
                         text-sm font-semibold tracking-wider uppercase">
          About Our Company
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
          Building Quality Structures with{" "}
          <span className="text-orange-600">Trust & Excellence</span>
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Hari Kumar Constructions is a trusted construction company delivering
          high-quality residential and commercial projects. We focus on
          durability, transparency, and timely delivery.
        </p>

        <Link
          href="/about"
          className="inline-block mt-8 bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition"
        >
          Know More About Us
        </Link>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="relative h-80 rounded-xl overflow-hidden shadow">
        <Image
          src="/images/home/homeabout.jpg"
          alt="About Hari Kumar Constructions"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
