// src/components/Stats.jsx
import { motion } from "framer-motion";

export default function Stats() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8, color: "#FFF" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: [0.8, 1.1, 1],
      color: ["#C8A35F", "#FFD700", "#C8A35F"], 
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-[#0a0501] text-center relative">
      {/* Thin line separator */}
      <div className="w-full border-t border-gray-300 absolute top-0 left-0"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-12 text-[#C8A35F]"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: [0.95, 1.05, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          What We Capture
        </motion.h2>

        {/* Universal Photography Themes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#C8A35F] max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {[
            { 
              title: "The Quiet Moments", 
              desc: "Stillness before the storm, a breath held, a smile forming — we find beauty in what’s almost missed." 
            },
            { 
              title: "Who You Are", 
              desc: "Not just how you look, but how you feel — your strength, grace, and truth, revealed in a single frame." 
            },
            { 
              title: "Time Passing", 
              desc: "The glow of pregnancy, the hands of a parent, the eyes of a child — we preserve what won’t stay." 
            },
            { 
              title: "Everyday Poetry", 
              desc: "Light on skin, fabric in motion, laughter caught mid-air — life, not staged, but seen." 
            },
          ].map((theme, i) => (
            <motion.div key={i} className="flex flex-col items-center p-4" variants={item}>
              <motion.h3 className="text-2xl font-bold mb-3">{theme.title}</motion.h3>
              <motion.p className="text-gray-300 text-lg leading-relaxed">{theme.desc}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}