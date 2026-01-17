import Image from "next/image";
import Link from "next/link";
import {
  FiPenTool,
  FiLayers,
  FiCheckCircle,
  FiHome,
  FiFileText,
  FiUsers,
} from "react-icons/fi";

export default function HomeServices() {
  return (
    <section className="bg-gray-50 py-20">
 <div className="text-center">
  <h1 className="inline-block mb-4 px-8 py-3 rounded-full 
                 bg-yellow-500 text-black 
                 text-lg font-semibold tracking-wider uppercase">
    Services We Offer
  </h1>
</div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-28     items-center">


         {/* RIGHT: IMAGE */}
        <div className="relative h-96 rounded-xl overflow-hidden shadow">

            


          <Image
            src="/images/home/homeservice.jpg"
            alt="Construction Services"
            fill
             
          />
        </div>




        {/* LEFT: CONTENT */}
        <div>
         

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            Complete Construction & Design{" "}
            <span className="text-orange-600">Solutions</span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            We provide end-to-end construction and design services, ensuring
            quality, transparency, and client satisfaction at every stage of
            the project.
          </p>

          {/* POINTS */}
          <ul className="mt-8 space-y-4">
            <li className="flex gap-4">
              <FiPenTool className="text-orange-600 text-xl mt-1" />
              <span>
                Design and development of concepts as per site conditions
              </span>
            </li>

            <li className="flex gap-4">
              <FiLayers className="text-orange-600 text-xl mt-1" />
              <span>
                Architectural, interior, and detailed working drawings
              </span>
            </li>

            <li className="flex gap-4">
              <FiCheckCircle className="text-orange-600 text-xl mt-1" />
              <span>
                Approval from related authorities (based on site location)
              </span>
            </li>

            <li className="flex gap-4">
              <FiHome className="text-orange-600 text-xl mt-1" />
              <span>
                Construction supervision until project completion (as per client request)
              </span>
            </li>

            <li className="flex gap-4">
              <FiFileText className="text-orange-600 text-xl mt-1" />
              <span>
                Preparation of buildup drawings for approvals
              </span>
            </li>

            <li className="flex gap-4">
              <FiUsers className="text-orange-600 text-xl mt-1" />
              <span>
                Strong client relationship with a sincere effort to fulfill their dreams
              </span>
            </li>
          </ul>

          {/* BUTTON */}
          <Link
            href="/services"
            className="inline-block mt-10 bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition"
          >
            Explore Our Services
          </Link>
        </div>

       

      </div>
    </section>
  );
}
