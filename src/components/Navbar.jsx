// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !isMenuOpen;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        transparent
          ? "bg-gradient-to-b from-black/85 via-black/40 to-transparent"
          : "bg-black/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/otto.png"
            alt="Otto Images"
            className="h-10 md:h-12 w-auto object-contain brightness-125"
          />
        </Link>

        {/* Desktop Nav - Pushed to the right using ml-auto */}
        <div className="hidden md:flex items-center space-x-12 ml-auto pr-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`uppercase tracking-[0.25em] text-[11px] font-medium transition-all duration-300 pb-1 border-b-2 ${
                location.pathname === link.path
                  ? "text-white border-[#C8A35F]"
                  : "text-white/80 border-transparent hover:text-white hover:border-[#C8A35F]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="md:hidden text-white focus:outline-none hover:text-[#C8A35F] transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block uppercase tracking-[0.2em] text-sm font-medium transition-all duration-300 pb-2 border-b ${
                  location.pathname === link.path
                    ? "text-white border-[#C8A35F]"
                    : "text-white/80 border-transparent hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}