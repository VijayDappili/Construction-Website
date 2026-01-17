"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiBriefcase,
  FiUsers,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

/* 🔹 Reusable Counter Hook */
function useCounter(end, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function StatsSection() {
  const projects = useCounter(180);
  const clients = useCounter(500);
  const safe = useCounter(100);
  const quality = useCounter(100);

  return (
   <section className="bg-purple-100  flex items-center py-20">
      <div className="w-full px-6">

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl 
                p-14 md:p-20 
                w-full max-w-[1600px] mx-auto
                grid grid-cols-1 lg:grid-cols-3 
                gap-14 items-center min-h-[420px]">


          {/* LEFT */}
          <div className="text-center lg:text-left space-y-4">
            <Image
              src="/images/harilogo.jpg"
              alt="Company Logo"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />

            <h2 className="text-5xl font-extrabold text-orange-600">
              10<span className="text-gray-700">+</span>
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              Years Experience
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD */}
            <StatCard
              icon={<FiBriefcase />}
              value={`${projects}+`}
              label="Projects Completed"
            />

            <StatCard
              icon={<FiUsers />}
              value={`${clients}+`}
              label="Happy Clients"
            />

            <StatCard
              icon={<FiShield />}
              value={`${safe}%`}
              label="Safe Transaction"
            />

            <StatCard
              icon={<FiCheckCircle />}
              value={`${quality}%`}
              label="Quality Delivery"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Stat Card Component */
function StatCard({ icon, value, label }) {
  return (
   <div className="border border-orange-500 rounded-2xl 
                p-8 min-h-[140px] 
                flex items-center gap-6">

      <div className="text-orange-600 text-3xl">
        {icon}
      </div>

      <div>
        <h3 className="text-3xl font-extrabold text-orange-600">
          {value}
        </h3>
        <p className="text-gray-700 font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}
