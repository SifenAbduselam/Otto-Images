// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#170d04] text-[#C8A35F] py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <img
            src="/images/lo.png"
            alt="Anjelo Pictures"
            className="w-70 h-90 object-contain"
          />
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/book-now"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Other Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/terms"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/book-now"
                className="transition transform hover:scale-105 hover:text-yellow-400"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Addis Abeba</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              <span>+251934486072</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              <span>lemisaphbayisa@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Designer */}
      <div className="mt-12 border-t border-white pt-6 text-center flex flex-col md:flex-row justify-center items-center gap-2">
        <span>© {new Date().getFullYear()} - Otto Images, All rights reserved!</span>
        <span>
          <a
            href="https://sifenabduselam.github.io/PORTFOLIO/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-white"
          >
            Who Designed This Website?
          </a>
        </span>
      </div>
    </footer>
  );
}
