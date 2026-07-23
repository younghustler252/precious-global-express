"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h2
            className={`text-2xl font-bold ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
          >
            MR BEAST
          </h2>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex items-center gap-8 transition-all duration-300 ${
              scrolled
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
              Get Started
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded ${
                scrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg mt-4">
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 border-b border-gray-200 text-gray-700 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Create Something Amazing
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Build beautiful, responsive websites with Next.js and Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition">
              Get Started
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Dummy Content */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Scroll Down
        </h2>

        <p className="text-gray-600 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          deserunt doloremque, molestiae provident quae iure porro minima
          consequatur. Reiciendis ducimus neque debitis labore doloribus
          inventore blanditiis doloremque amet dignissimos repellendus.
        </p>

        <div className="h-[1200px]"></div>
      </section>
    </>
  );
}