
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-20 text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT: Logo + Description */}
        <div className="space-y-6">
          <Image
            src="/images/aadityalogo.png"
            alt="Mountain Square Construction"
            width={150}
            height={150}
            className="object-contain"
          />
          <p className="text-white leading-relaxed max-w-sm">
            Delivering high-quality, innovative construction projects with
            precision and care.
          </p>
        </div>

        {/* CENTER: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-white">
            <li>
              <Link href="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-orange-600 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-600 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-white">
            <li>Construction of Individual Houses</li>
            <li>Interior Design and Execution</li>
            <li>2D & 3D Architectural Planning</li>
            <li>Renovation of Existing Buildings</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm items-center">

          {/* Left */}
          <div className="text-center md:text-left">
            © 2025 Mountain Square All rights reserved.
          </div>

          {/* Center */}
          <div className="text-center">
            <a
              href="mailto:aadityasquarecraftconstruction@gmail.com"
              className="hover:underline"
            >
              aadityasquarecraftconstruction@gmail.com
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <a href="tel:+918310985053" className="hover:underline">
              +91 8309642005
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
