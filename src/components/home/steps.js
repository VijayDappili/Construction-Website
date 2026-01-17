"use client";

import {
  FiClipboard,
  FiEdit,
  FiSettings,
  FiTruck,
} from "react-icons/fi";

const steps = [
  {
    step: "Step 01",
    title: "Evaluation And Signing Of The Contract",
    icon: <FiClipboard />,
  },
  {
    step: "Step 02",
    title: "Preparation Of The Work Plan",
    icon: <FiEdit />,
  },
  {
    step: "Step 03",
    title: "Implementation Of Quality Works",
    icon: <FiSettings />,
  },
  {
    step: "Step 04",
    title: "Delivering The Project To The Customer",
    icon: <FiTruck />,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600 mb-16">
          How We Work
        </h2>

       {/* DESKTOP */}
<div className="hidden md:block bg-white rounded-2xl shadow-lg p-12 relative">

  {/* LINE */}
  <div className="absolute left-12 right-12 top-[72%] h-[2px] bg-orange-500"></div>

  {/* STEPS */}
  <div className="grid grid-cols-4 gap-10 relative z-10">
    {steps.map((item, index) => (
      <div
        key={index}
        className="group text-center flex flex-col items-center relative"
      >
        {/* ICON */}
        <div className="text-5xl text-gray-800 mb-6 transition-transform duration-300 group-hover:scale-125">
          {item.icon}
        </div>

        {/* TITLE */}
        <p className="font-semibold text-gray-800 max-w-xs">
          {item.title}
        </p>

        {/* STEP */}
        <span className="mt-4 text-orange-600 font-semibold">
          {item.step}
        </span>

        {/* DOT (ABSOLUTE, CENTERED ON LINE) */}
        <div className="absolute top-[82%] left-1/2 -translate-x-1/2">
          <div
            className="w-4 h-4 rounded-full bg-orange-600 
                       transition-all duration-300
                       group-hover:scale-150
                       group-hover:shadow-[0_0_15px_rgba(234,88,12,0.9)]">
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* MOBILE (VERTICAL TIMELINE) */}
        <div className="md:hidden bg-white rounded-2xl shadow-lg p-8 relative">

          {/* VERTICAL LINE */}
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-orange-500"></div>

          <div className="space-y-10">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start gap-6 group">

                {/* DOT */}
                <div className="relative z-10 mt-2">
                  <div
                    className="w-4 h-4 rounded-full bg-orange-600 
                               transition-all duration-300
                               group-hover:scale-150
                               group-hover:shadow-[0_0_15px_rgba(234,88,12,0.9)]">
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <div className="text-3xl text-gray-800 mb-2 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <p className="font-semibold text-gray-800">
                    {item.title}
                  </p>

                  <span className="text-orange-600 font-semibold">
                    {item.step}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
