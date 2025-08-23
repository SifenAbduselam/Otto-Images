// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const textAnimation = {
    hidden: { opacity: 0, scale: 0.95, color: "#C8A35F" },
    visible: {
      opacity: 1,
      scale: [0.95, 1, 0.98], // subtle zoom effect
      color: ["#C8A35F", "#FFD700", "#C8A35F"], // dim -> intense -> dim
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <main className="pb-16 bg-[#F9F7F5]">
      {/* Full-Width Image Row */}
      <div className="flex w-full h-auto overflow-hidden">
        <div className="flex-1">
          <img src="/images/w18.jpg" alt="Wedding" className="w-full h-auto object-cover" />
        </div>
        <div className="flex-1">
          <img src="/images/w2.jpg" alt="Mels" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Text Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-xl uppercase tracking-wider font-serif mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textAnimation}
        >
          TIMELESS WEDDING PHOTOGRAPHY & VIDEOGRAPHY
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textAnimation}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Anjelo Pictures is a creative studio founded by Ermias Ejigu, with a talent for capturing intimate moments often lost in the excitement of the day—revealing the story behind every smile and glance. As you celebrate, we preserve pure love and joy in refined imagery that exudes classic elegance.
        </motion.p>

        <motion.button
          className="border-b-2 border-gray-800 text-gray-800 px-8 py-2 uppercase tracking-wider text-sm font-medium font-serif rounded-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textAnimation}
          transition={{ duration: 1.2, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/book-now")} // Navigate to Book Now page
        >
          Book Now
        </motion.button>
      </section>

      {/* Silent Video */}
      <section className="w-full">
        <div className="relative overflow-hidden">
          <video
            src="/videos/weddinggg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[80vh] object-cover"
          />
        </div>
        <div className="text-center py-8 px-6">
          <motion.h3
            className="text-3xl md:text-4xl font-serif mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textAnimation}
          >
            Capturing Moments, Creating Memories.
          </motion.h3>

          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textAnimation}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Elevate your memories with our professional photo studio, where every click transforms your moments into timeless masterpieces.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
