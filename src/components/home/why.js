"use client";

import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const reasons = [
  {
    title: "Free Consultation",
    content:
      "Get a free consultation with our experienced construction team to discuss your project needs. We provide expert advice and guidance to ensure the best start to your construction or renovation project.",
    image: "/images/why/freecons.jpg",
  },
  {
    title: "Quality Construction",
    content:
      "We use high-quality materials and proven construction practices to ensure durability, safety, and excellence in every project we undertake.",
    image: "/images/why/quality.jpg",
  },
  {
    title: "On-Time Delivery",
    content:
      "Our structured planning and professional execution ensure that your project is delivered on time without compromising quality.",
    image: "/images/why/time.jpg",
  },
  {
    title: "Customer Satisfaction",
    content:
      "We prioritize transparency, communication, and customer happiness at every stage of the project.",
    image: "/images/why/customer.jpg",
  },
  {
    title: "Reasonable Price",
    content:
      "We offer competitive and transparent pricing without hidden costs, ensuring maximum value for your investment.",
    image: "/images/why/price.jpg",
  },
];

export default function WhyChooseUs() {
  // separate states (IMPORTANT)
  const [activeDesktop, setActiveDesktop] = useState(0);
  const [activeMobile, setActiveMobile] = useState(null);

  return (
    <section className="bg-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-black text-lg font-semibold uppercase">
            Why Choose Us
          </h2>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid grid-cols-2 gap-10">

          {/* LEFT TABS */}
          <div className="space-y-4">
            {reasons.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveDesktop(index)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-semibold transition-all
                  ${
                    activeDesktop === index
                      ? "bg-gradient-to-r from-violet-500 to-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {item.title}
                <FiChevronRight className="text-xl" />
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div
            key={activeDesktop}
            className="relative rounded-2xl overflow-hidden shadow-xl flex items-center transition-all duration-700"
            style={{
              backgroundImage: `url(${reasons[activeDesktop].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "360px",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {reasons[activeDesktop].title}
              </h3>
              <p className="text-lg leading-relaxed">
                {reasons[activeDesktop].content}
              </p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW (ACCORDION) ================= */}
        <div className="md:hidden space-y-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow"
            >
              {/* HEADER */}
              <button
                onClick={() =>
                  setActiveMobile(activeMobile === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-4 font-semibold text-gray-800"
              >
                {item.title}
                <FiChevronRight
                  className={`transition-transform duration-300 ${
                    activeMobile === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              {activeMobile === index && (
                <div
                  className="relative h-64 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>

                  <div className="relative z-10 p-6 text-white">
                    <p className="text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
