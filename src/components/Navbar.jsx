import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Detect active route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/Gallery" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#F9F7F5] shadow-md">
      <div className="container flex items-center justify-between px-6 py-3">
        {/* Logo */}
      <div>
          <img
            src="/images/logoo.png" // ← Changed to logoo.png
            alt="Anjelo Pictures"
            className="w-50  h-20 object-contain -ml-7 -mt-6"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`uppercase tracking-wider text-sm font-medium transition-all duration-300
                ${location.pathname === link.path ? "text-[#C8A35F] border-b-2 border-[#C8A35F]" : "text-gray-800 hover:text-[#C8A35F] hover:border-b-2 hover:border-[#C8A35F]"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Book Now */}
        <Link
          to="/book-now"
          className="px-6 py-2 uppercase tracking-wider text-sm font-medium border-b-2 border-gray-800 text-gray-800 hover:border-[#C8A35F] hover:text-[#C8A35F] transition-all duration-300 active:scale-95  -mt-5 "
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none hover:text-[#C8A35F] transition-colors duration-300"
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
        <div className="md:hidden bg-[#F9F7F5] border-t border-gray-200 animate-fadeIn">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block uppercase tracking-wider text-sm font-medium transition-all duration-300
                  ${location.pathname === link.path ? "text-[#C8A35F] border-b-2 border-[#C8A35F]" : "text-gray-800 hover:text-[#C8A35F] hover:border-b-2 hover:border-[#C8A35F]"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-now"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-2 uppercase tracking-wider text-sm font-medium border-b-2 border-gray-800 text-gray-800 hover:border-[#C8A35F] hover:text-[#C8A35F] transition-all duration-300 active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
