"use client";
import { useState } from "react";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";





export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  setLoading(false);

  if (res.ok) {
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  }
};


  return (
    <>

{/* 🔹 IMAGE + QUOTE SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">

        {/* Background Image */}
        <Image
          src="/images/contact.jpg"
          alt="Contact background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Reach New Heights with Us – <span className="text-yellow-400">Connect Today!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Let’s turn your vision into reality, one strong foundation at a time.
            We are here to listen, collaborate, and build your future together.
          </p>
        </div>
      </section>



    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-lg shadow">

          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-orange-600">
              Visit us to explore our projects.
            </h3>

            {/* Address */}
            <div className="flex gap-4">
              <FiMapPin className="text-orange-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600 ">
                 Rama Reddy Building, hulimangala,jigani, Electronic City, Anekal, Bengaluru, Karnataka 560100
                </p>
                <a
                  href="https://www.google.com/maps/search/Rama+Reddy+Building,+hulimangala,jigani,+Electronic+City,+Anekal,+Bengaluru,+Karnataka+560100/@12.8517013,77.6500269,15.5z?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                  target="_blank"
                  className="inline-block mt-2 text-orange-600 border border-orange-600 px-4 py-1 rounded hover:bg-orange-600 hover:text-white transition"
                >
                  Click here to view on Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <FiPhone className="text-orange-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-gray-600">+91 8309642005</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <FiMail className="text-orange-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">
                 aadityasquarecraftconstruction@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-6">
              Get Started Today
            </h3>

           <form onSubmit={handleSubmit} className="space-y-5">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Enter Your First Name*"
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      required
      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-600"
    />

    <input
      type="email"
      placeholder="Enter Your Email*"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      required
      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-600"
    />
  </div>

  <input
    type="tel"
    placeholder="Enter Your Phone Number*"
    value={formData.phone}
    onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
    }
    required
    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-600"
  />

  <textarea
    rows="5"
    placeholder="Tell us about your requirements"
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-600"
  />

  <button
    type="submit"
    disabled={loading}
    className={`px-8 py-3 rounded font-semibold transition ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-orange-600 text-white hover:bg-orange-700"
    }`}
  >
    {loading ? "Submitting..." : "Submit Request"}
  </button>

  {success && (
    <p className="text-green-600 font-semibold">
      ✅ Thank you! We will contact you soon.
    </p>
  )}

</form>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}
