import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black shadow-md">
      <div className="container flex items-center justify-between px-6 py-3 ">
        {/* Logo */}
        <div>
          <img
            src="/images/ww.jpg"
            alt="Anjelo Pictures"
            className="w-60 h-20 object-contain -ml-10 -mt-3 -mb-6"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 -ml-16"> {/* ✅ pushed left */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`uppercase tracking-wider text-sm font-medium transition-all duration-300 pb-1
                ${
                  location.pathname === link.path
                    ? "text-white border-b-2 border-[#C8A35F]"
                    : "text-white hover:text-white hover:border-b-2 hover:border-[#C8A35F]"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Book Now */}
        <Link
          to="/book-now"
          className="px-6 py-2 uppercase tracking-wider text-sm font-medium border-2 border-[#C8A35F] text-white rounded transition-all duration-300 active:scale-95 hover:border-[#C8A35F] hover:scale-110"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none hover:text-[#C8A35F] transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 animate-fadeIn">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block uppercase tracking-wider text-sm font-medium transition-all duration-300 pb-1
                  ${
                    location.pathname === link.path
                      ? "text-white border-b-2 border-[#C8A35F]"
                      : "text-white hover:text-white hover:border-b-2 hover:border-[#C8A35F]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-now"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-2 uppercase tracking-wider text-sm font-medium border-2 border-[#C8A35F] text-white rounded transition-all duration-300 active:scale-95 hover:border-[#C8A35F] hover:scale-110"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
