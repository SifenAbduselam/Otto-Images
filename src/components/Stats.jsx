// src/components/Stats.jsx
import { motion } from "framer-motion";

export default function Stats() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8, color: "#C8A35F" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: [0.8, 1.2, 1],        // subtle zoom in/out
      color: ["#C8A35F", "#FFD700", "#C8A35F"], // dim → intense → dim
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-[#F9F7F5] text-center relative">
      {/* Thin line separator */}
      <div className="w-full border-t border-gray-300 absolute top-0 left-0"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-12"
          initial={{ opacity: 0, y: 30, scale: 0.95, color: "#C8A35F" }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: [0.95, 1.05, 1], 
            color: ["#C8A35F", "#FFD700", "#C8A35F"] 
          }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          We let our work speak for itself
        </motion.h2>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#C8A35F]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {[
            { number: "3M+", label: "Photos" },
            { number: "3K+", label: "Weddings" },
            { number: "100+", label: "Awards" },
          ].map((stat, i) => (
            <motion.div key={i} className="flex flex-col items-center" variants={item}>
              <motion.span
                className="text-4xl md:text-5xl font-bold mb-2"
                animate={{ 
                  scale: [0.8, 1.2, 1], 
                  color: ["#C8A35F", "#FFD700", "#C8A35F"], 
                  transition: { duration: 0.8, ease: "easeInOut" } 
                }}
              >
                {stat.number}
              </motion.span>
              <motion.span
                className="text-lg md:text-xl text-gray-700"
                animate={{ 
                  color: ["#C8A35F", "#FFD700", "#C8A35F"], 
                  transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } 
                }}
              >
                {stat.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
