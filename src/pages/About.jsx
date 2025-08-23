// src/pages/About.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageHover = { scale: 1.05, transition: { duration: 0.3 } };

  // Text Blocks
  const textBlock1 = `Many photographers took part in a festival that was held. Aged just fourteen, the school year had just ended, and I was thankful for my neighbor’s support in showing me the way and suggesting that I could work with them for a week. I immediately started helping, and after a week, they requested me to proceed with them. I accepted the offer and started training and working with them. The first project I worked on was the “Krestana” video recording, and the client was incredibly grateful and pleased with the work. That moment when I saw a satisfied customer empowered me and gave me insight. My wife and my best friend saw the inner strength I possess, propelled me forward, and gave me energy. Since an early age, I’ve been aware of the value of learning from experience, am eager to change, and am willing to take on challenges that help me grow and discover my potential. These things profoundly amazed me, and my biggest ally was the family prayer. Due to that, I decided to establish the company; the journey began, and I became the company’s founder.`;

  const textBlock2 = `Anjelo Pictures was established in 2015 and has been in the photography and cinematography industries for many years. We aim to be one of the leading companies, delivering quality and excellence at every stage with continuous improvement. We work closely with our clients, reviewing project specifics, objectives, budget, schedule, and whether the work will be on location or in our studio. We organize a team, supervise the shoot, and develop a unique perspective by adding our own creative flair. Our work combines lighting, camera techniques, lens choice, scene modes, filters, zoom, camera movement, exposure, graphics, music, and sound effects to capture your greatest moments. We always collaborate with clients, welcoming feedback and making changes as needed. Every project is handled with dignity and delivered on time. Life is exciting and worth living—capturing moments that leave you breathless and create emotions in your heart.`;

  return (
    <div className="min-h-screen bg-[#F9F7F5] text-gray-800 font-sans">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <motion.img
          src="/images/w25.png"
          alt="Wedding"
          className="w-full h-full object-cover"
          whileHover={imageHover}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-6"></div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-16 px-6 bg-[#F9F7F5] text-black text-center">
        <motion.h2
          className="text-lg mb-2"
          style={{ color: "#D4AF37" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          Your memory with us
        </motion.h2>
        <motion.h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#D4AF37" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          Anjelo Pictures
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          About us
        </motion.p>
      </section>

      {/* First Text & Image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
              How We Work & Our Approach
            </h2>
            <p className="text-gray-700 leading-relaxed">{textBlock1}</p>
          </motion.div>

          <motion.div className="order-1 lg:order-2" whileHover={imageHover}>
            <img
              src="https://anjelopictures.com/wp-content/uploads/2024/05/1D6A0935-1-2048x1366.jpg"
              alt="Wedding"
              className="w-full h-auto object-cover max-h-[900px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Second Text & Image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div whileHover={imageHover}>
            <img
              src="https://anjelopictures.com/wp-content/uploads/2024/05/438A1823-scaled.jpg"
              alt="Detail"
              className="w-full h-auto object-cover max-h-[400px] rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#D4AF37" }}>
              Values & Delivering Memories
            </h2>
            <p className="text-gray-700 leading-relaxed">{textBlock2}</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-[#F9F7F5] text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#D4AF37" }}>
            Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Guiding principles for excellence. Discover our unwavering commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Creativity", "Excellence", "Passion", "Integrity"].map((value) => (
              <div key={value}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#D4AF37" }}>
                  {value}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value === "Creativity" && "We believe in pushing the boundaries of creativity, capturing moments that inspire and evoke emotion through innovative approaches and artistic expression."}
                  {value === "Excellence" && "We are committed to delivering the highest quality photography services, striving for excellence in every aspect of our work."}
                  {value === "Passion" && "We are passionate about photography and dedicated to our craft, approaching every project with enthusiasm and energy."}
                  {value === "Integrity" && "We conduct ourselves with honesty, transparency, and integrity in all our interactions, maintaining the trust of our clients."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#D4AF37" }}>
              Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Advancement along with establishing sister companies in different sectors and enhancing capability, obtaining resources, hiring professionals, utilizing technology, and offering resources to meet the industry's needs for high-quality services that could be performed locally.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#D4AF37" }}>
              Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stand for quality and prompt delivery as part of our mission. Build an educational institution that will assist students, nurture and support them so they can discover their potential and chase their dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
