// src/pages/Contact.jsx
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "lemisaphbayisa@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 4h20v16H2V4zm10 7l10-7H2l10 7z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: (
        <a
          href="https://www.instagram.com/ottoimagesl?igsh=MTNra3JhbmUwNWlsNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#C8A35F] transition"
        >
          @ottoimagesl
        </a>
      ),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+251 934 486 072 ",
      sub: "call or text",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.5 21.4 2.6 13.5 2.6 3.3 2.6 2.6 3.2 2 4 2h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.3 2.2z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Addis Abeba",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      value: (
        <a
          href="https://web.facebook.com/profile.php?id=61566619078074"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#C8A35F] transition"
        >
          @ottoimages
        </a>
      ),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.5 3h-2.3v7C18.3 21.1 22 17 22 12z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6 flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-80 md:h-[400px] overflow-hidden mb-16">
        <img
          src="/images/w16.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-6">
            
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-start space-x-4 bg-[#0f0f0f] border border-[#1c1c1c] p-6 rounded-xl shadow-lg hover:shadow-[#C8A35F]/40 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-[#C8A35F]">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold text-[#C8A35F]">{item.label}</p>
              <p className="text-white">{item.value}</p>
              {item.sub && <p className="text-gray-400 text-sm italic">{item.sub}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
