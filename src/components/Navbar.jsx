"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-orange-600 shadow">
      {/* Top bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 items-center px-6 py-0">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/aadityalogo.png"
            alt="Hari Kumar Construction Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
      <h1 className="font-extrabold text-gray-900 leading-tight text-left">
  {/* Line 1 */}
  <span className="block text-base sm:text-lg md:text-2xl whitespace-nowrap">
    Aaditya Square
  </span>

  {/* Line 2 */}
  <span className="block text-base sm:text-lg md:text-2xl text-yellow-400 whitespace-nowrap">
    Craft Construction
  </span>
</h1>




        </div>

        {/* CENTER: Menu (Desktop) */}
        <nav className="hidden md:flex justify-center gap-12 font-serif text-xl text-yellow-400 whitespace-nowrap">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <Link href="/services" className="hover:text-blue-700">Services</Link>
          <Link href="/projects" className="hover:text-blue-700">Projects</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact Us</Link>
        </nav>

        {/* RIGHT: Contact info (Desktop) */}
        <div className="hidden md:flex flex-col items-end gap-1 text-sm font-serif">
          <div className="flex items-center gap-2 text-lg">
            <FiPhone className="text-yellow-300" />
            <a href="tel:+918310985053">+91 8309642005</a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <FiMail className="text-yellow-300" />
            <a href="mailto:aadityasquarecraftconstruction@gmail.com">
              aadityasquarecraftconstruction@gmail.com
            </a>
          </div>
        </div>

        {/* MOBILE: Hamburger */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FiX className="text-3xl text-white" />
            ) : (
              <FiMenu className="text-3xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-orange-600 border-t border-orange-500">
          <nav className="flex flex-col items-center gap-6 py-6 text-lg font-semibold text-white">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

            {/* Mobile Contact */}
            <div className="pt-4 text-sm text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <FiPhone />
                <a href="tel:+918310985053">+91 83109 85053</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FiMail />
                <a href="mailto:hariconstructions@gmail.com">
                  hariconstructions@gmail.com
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
