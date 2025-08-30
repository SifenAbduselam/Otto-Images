// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // Keep the gold/yellow color animation for headings and button
  const textAnimation = {
    hidden: { opacity: 0, scale: 0.95, color: "#C8A35F" },
    visible: {
      opacity: 1,
      scale: [0.95, 1, 0.98],
      color: ["#C8A35F", "#FFD700", "#C8A35F"], // ← Gold to yellow animation
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <main className="pb-16 bg-black">
      {/* Single Full-Width Hero Image – Taller to Reduce Cropping */}
      <div className="relative w-full h-[120vh] md:h-[130vh] lg:h-[150vh] overflow-hidden">
        <img
          src="/images/w233.png"
          alt="Wedding"
          className="w-full h-full object-cover object-top"
        />
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
          CAPTURING MOMENTS AND CRAFTING MEMORIES
        </motion.h2>

        {/* ✅ This Paragraph: White Text — Overrides Animated Color */}
        <motion.p
          className="text-lg leading-relaxed mb-1 text-white"
          style={{ color: "white" }} // 🔴 Force white to override animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textAnimation}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          At Otto Images, we specialize in transforming fleeting moments into timeless memories. 
          We are dedicated to delivering high-quality photography services that tell your unique story.
          We approach each project with creativity and professionalism, ensuring every detail is captured beautifully.
        </motion.p>
      </section>

      
      <section className="w-full">
        
        <div className="text-center px-6">
        

          <motion.p
            className="text-lg max-w-3xl mx-auto text-gray-300 mb-14 -mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textAnimation}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Elevate your memories with our professional photo studio, where every
            click transforms your moments into timeless masterpieces.
          </motion.p>
          <motion.button
          className="border-2 border-[#C8A35F] text-white px-8 py-2 uppercase tracking-wider text-sm font-medium font-serif rounded-none transition-all duration-300 hover:border-[#C8A35F] hover:text-[#C8A35F] hover:scale-110 active:scale-95 -mt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textAnimation}
          transition={{ duration: 1.2, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/book-now")}
        >
          Book Now
        </motion.button>
        </div>
      </section>
    </main>
  );
}