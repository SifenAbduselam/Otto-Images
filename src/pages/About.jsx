// src/pages/About.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <motion.img
          src="/images/w16.jpg"
          alt="Wedding"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </section>

      {/* Title Section */}
      <section className="py-16 px-6 bg-black text-center">
        <motion.h2
          className="text-sm mb-4 tracking-[0.3em] uppercase"
          style={{ color: "#D4AF37", fontFamily: '"Cormorant Garamond", serif' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          About Us
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-5xl font-serif "
          style={{ color: "white", fontFamily: '"Cormorant Garamond", serif' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          Otto Pictures
        </motion.h1>
      </section>

      {/* About Us Text */}
      <section className="py-6 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "white" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            At Otto Pictures, we believe every picture tells a story worth
            remembering. We are a passionate photography and videography team
            dedicated to capturing life’s most meaningful moments — from
            weddings, birthdays, and corporate events to creative portraits and
            lifestyle shoots.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "white" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Our mission is simple: to transform ordinary moments into timeless
            memories. With a unique artistic eye and professional equipment, we
            blend creativity and precision to deliver stunning visuals that
            reflect your story.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: "white" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Whether it’s the joy of a wedding, the excitement of a graduation,
            or the elegance of a brand photoshoot, Otto Pictures is here to
            frame it beautifully. We don’t just take photos — we capture
            emotions, personalities, and the little details that make every
            story unique.
          </motion.p>
        </div>
      </section>

      {/* Full-Width Horizontal Line (Edge-to-Edge) */}
      <motion.div
        className="w-full h-px bg-white mx-auto my-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px 0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      {/* Why Choose Section */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mt-8">
          <motion.h3
            className="text-2xl text-center"
            style={{ color: "#D4AF37", fontFamily: '"Cormorant Garamond", serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            Great pictures for bautiful memories
          </motion.h3>

          
        </div>
      </section>

      {/* Three Vertical Photos Side by Side – No Gap + Animate */}
      <section className="px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-6xl mx-auto overflow-hidden">
          {[
            "/images/w4.jpg",
            "/images/w5.jpg",
            "/images/w6.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto max-h-96 object-cover object-center"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Closing Line – Offset to Left */}
      <section className="px-6 md:px-12 mt-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.p
            className="text-lg md:text-2xl italic font-bold md:pl-8"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              color: "#D4AF37",
              textShadow: "0 0 10px rgba(212, 175, 55, 0.2)",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            When memories blur and the day feels like a dream, these photos bring your story back to life.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}