// src/components/Stats.jsx

import { motion } from "framer-motion";
import { storyImage, aboutSecondaryImage } from "../config/media";

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
          SECTION: CENTERED ASYMMETRICAL IMAGES (SMALLER) WITH TEXT SURROUNDING
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block uppercase tracking-[0.4em] text-[10px] text-white/50 font-mono mb-3"
          >
            What We Offer & Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl tracking-wide font-light text-white"
          >
            The Editorial Standard
          </motion.h2>
        </div>

        {/* 3-Column Layout: Left Text | Center Smaller Images | Right Text */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Offerings Text */}
          <div className="lg:col-span-4 space-y-12">
            {leftOfferings.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/15 pb-8 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-white/40 tracking-widest">{item.num}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white mb-2 tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Even Smaller Centered Asymmetrical Images */}
          <div className="lg:col-span-4 relative h-[320px] sm:h-[380px] flex items-center justify-center my-8 lg:my-0">
            {/* Background Ambient Glow */}
            <div className="absolute w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            {/* Left / Lower Smaller Image */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-8 bottom-6 w-[40%][width:42%] h-[200px] sm:h-[250px] overflow-hidden border border-white/20 z-10 shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                src={storyImage}
                alt="Editorial artwork left"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>

            {/* Right / Upper Smaller Image */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: -12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute right-8 top-6 w-[40%][width:42%] h-[200px] sm:h-[250px] overflow-hidden border border-white/20 z-20 shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                src={aboutSecondaryImage}
                alt="Editorial artwork right"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>
          </div>

          {/* Right Column: Offerings Text */}
          <div className="lg:col-span-4 space-y-12">
            {rightOfferings.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/15 pb-8 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-white/40 tracking-widest">{item.num}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white mb-2 tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
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