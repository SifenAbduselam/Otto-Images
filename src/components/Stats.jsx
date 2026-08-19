// src/components/Stats.jsx

import { motion } from "framer-motion";
import { storyImage } from "../config/media";

export default function Stats() {
  const leftOfferings = [
    {
      num: "01.",
      title: "CINEMATIC PORTRAITS",
      desc: "Thoughtfully crafted sessions capturing your authentic presence through timeless imagery and profound light.",
    },
    {
      num: "02.",
      title: "EDITORIAL NARRATIVES",
      desc: "Deep storytelling frameworks designed to reflect your personal or brand evolution with striking precision.",
    },
  ];

  const rightOfferings = [
    {
      num: "03.",
      title: "THE ARCHIVE",
      desc: "Curated motion and still packages crafted exclusively for those seeking an uncompromised aesthetic standard.",
    },
    {
      num: "04.",
      title: "BESPOKE VISION",
      desc: "Tailored visual direction built from the ground up to match your absolute creative standards.",
    },
  ];

  return (
    <section className="bg-black text-white relative overflow-hidden py-24 md:py-36">
      
      {/* =========================================================
          SECTION: CENTERED SINGLE IMAGE WITH SURROUNDING TEXT
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="block uppercase tracking-[0.4em] text-[10px] text-white/50 font-mono mb-3"
          >
            What We Offer & Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl tracking-wide font-light text-white"
          >
            The Editorial Standard
          </motion.h2>
        </div>

        {/* 3-Column Layout: Left Text | Center Single Image | Right Text */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Offerings Text with Slower Motion */}
          <div className="lg:col-span-4 space-y-12">
            {leftOfferings.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/15 pb-8 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-white/40 tracking-widest">{item.num}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white mb-2 tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Single Centered Image */}
          <div className="lg:col-span-4 relative flex items-center justify-center my-8 lg:my-0">
            {/* Background Ambient Glow */}
            <div className="absolute w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] overflow-hidden border border-white/20 shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={storyImage}
                alt="Editorial standard showcase"
                className="w-full h-auto object-contain grayscale contrast-125"
              />
            </motion.div>
          </div>

          {/* Right Column: Offerings Text with Slower Motion */}
          <div className="lg:col-span-4 space-y-12">
            {rightOfferings.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/15 pb-8 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-white/40 tracking-widest">{item.num}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white mb-2 tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}