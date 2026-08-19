// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div>
          <img
            src="/images/lo.png"
            alt="Otto Images"
            className="w-40 h-auto object-contain"
          />
          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
            A premium photography &amp; cinematography studio based in Addis
            Abeba, capturing moments and crafting memories.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="uppercase tracking-[0.25em] text-xs text-[#C8A35F] mb-5">
            Menu
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#C8A35F] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C8A35F] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#C8A35F] transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/book-now" className="hover:text-[#C8A35F] transition-colors">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="uppercase tracking-[0.25em] text-xs text-[#C8A35F] mb-5">
            Other Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/terms" className="hover:text-[#C8A35F] transition-colors">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#C8A35F] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-[#C8A35F] transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/book-now" className="hover:text-[#C8A35F] transition-colors">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="uppercase tracking-[0.25em] text-xs text-[#C8A35F] mb-5">
            Contact
          </h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#C8A35F] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Addis Abeba</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#C8A35F] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              <span>+251934486072</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#C8A35F] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4h20v16H2V4zm10 7l10-7H2l10 7z" />
              </svg>
              <span className="break-all">lemisaphbayisa@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Designer */}
      <div className="mt-14 border-t border-white/10 pt-6 max-w-6xl mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-gray-500 tracking-wide">
        <span>&copy; {new Date().getFullYear()} Otto Images. All rights reserved.</span>
        <span>
          &middot;{" "}
          <a
            href="https://sifenabduselam.github.io/PORTFOLIO/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A35F] transition-colors"
          >
            Who Designed This Website?
          </a>
        </span>
      </div>
    </footer>
  );
}
