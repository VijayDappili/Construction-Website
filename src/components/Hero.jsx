"use client";

import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
 

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Construction site"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building <span className="text-yellow-400">Dreams</span> with <br />
          Quality & <span className="text-yellow-400">Trust</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-200">
          We deliver high-quality residential and commercial construction
          projects with on-time completion, transparent pricing, and
          uncompromised safety standards.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
  href="/contact"
  className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition"
>
  Get Free Consultation
</Link>


 <Link

 href="/projects"
      
            className="border border-white mt-8   px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition">
            View Projects
          </Link>
        </div>
      </div>

      
    </section>
  );
}
