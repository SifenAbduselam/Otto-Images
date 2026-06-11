// src/pages/About.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
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
          style={{
            color: "#D4AF37",
            fontFamily: '"Cormorant Garamond", serif',
          }}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          About Us
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-5xl font-serif"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          Otto Images
        </motion.h1>
      </section>

      {/* Editorial Introduction */}
      <section className="px-6 md:px-12 mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-gray-300">
          
          {/* Left */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <span className="text-7xl font-serif absolute -left-2 -top-4 text-white opacity-20">
              O
            </span>

            <p className="leading-relaxed pl-10">
              Otto Images is a pioneering cinematography and photography company based in Ethiopia.
              Our journey began with a passion for storytelling through visuals and has grown into a mission to redefine creative excellence.
              <br /><br />
              We specialize in capturing unforgettable moments — from weddings and modeling shoots to cinematic productions — delivering timeless and emotionally powerful visuals.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <span className="text-7xl font-serif absolute -left-2 -top-4 text-white opacity-20">
              W
            </span>

            <p className="leading-relaxed pl-10">
              We work closely with our clients, combining creativity with advanced tools and techniques to produce high-quality results.
              Our team is dedicated to excellence, attention to detail, and delivering projects on time.
              <br /><br />
              At Otto Images, every frame tells a story — your story — captured with elegance, passion, and precision.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-12 mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{
                color: "#D4AF37",
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Mission
            </h2>

            <p className="leading-relaxed text-gray-300">
              Advancement along with establishing sister companies in different sectors and enhancing capability, obtaining resources, hiring professionals, utilizing technology, and offering resources to meet the industry's needs for high-quality services that could be performed locally.
              <br /><br />
              We provide opportunities for people in the community to work, develop, and transform their lives while building an educational environment that nurtures talent and helps individuals discover their full potential.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{
                color: "#D4AF37",
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Vision
            </h2>

            <p className="leading-relaxed text-gray-300">
              To stand for quality and prompt delivery while continuously advancing in technology and creativity.
              <br /><br />
              We aim to become a leading creative force in Ethiopia by empowering communities, building strong teams, and delivering exceptional visual experiences that inspire and elevate industry standards.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Divider Line */}
      <motion.div
        className="w-full h-px bg-white mx-auto my-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        style={{ transformOrigin: "center" }}
      />

      {/* Why Choose */}
      <section className="px-6 text-center">
        <motion.h3
          className="text-2xl"
          style={{
            color: "#D4AF37",
            fontFamily: '"Cormorant Garamond", serif',
          }}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          Great pictures for beautiful memories
        </motion.h3>
      </section>

      {/* Images */}
      <section className="px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto">
          {["/images/w4.jpg", "/images/w5.jpg", "/images/w6.jpg"].map(
            (src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={src}
                  className="w-full h-80 object-cover"
                  alt=""
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="px-6 md:px-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />

          <motion.p
            className="text-lg md:text-2xl italic font-bold"
            style={{
              color: "#D4AF37",
              fontFamily: '"Cormorant Garamond", serif',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            When memories blur and the day feels like a dream, these photos bring your story back to life.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}