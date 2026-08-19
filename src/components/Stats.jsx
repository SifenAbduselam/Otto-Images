// src/components/Stats.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storyImage, storyImageSecondary } from "../config/media";

export default function Stats() {
  const themes = [
    {
      title: "The Quiet Moments",
      desc: "Stillness before the storm, a breath held, a smile forming — we find beauty in what's almost missed.",
    },
    {
      title: "Who You Are",
      desc: "Not just how you look, but how you feel — your strength, grace, and truth, revealed in a single frame.",
    },
    {
      title: "Time Passing",
      desc: "The glow of pregnancy, the hands of a parent, the eyes of a child — we preserve what won't stay.",
    },
    {
      title: "Everyday Poetry",
      desc: "Light on skin, fabric in motion, laughter caught mid-air — life, not staged, but seen.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically cycle through themes continuously, respects hover pause
  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % themes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, themes.length]);

  // Fallback if secondary image isn't defined in config yet
  const secondImg = storyImageSecondary || storyImage;

  return (
    <section className="bg-black relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* =========================================================
            LEFT COLUMN: ASYMMETRICAL FLOATING IMAGES LAYOUT
            (Right image positioned higher, left image offset lower)
        ========================================================= */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[520px] flex items-center justify-center">
          
          {/* Background Ambient Glow for depth */}
          <div className="absolute w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left / Lower Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            whileInView={{ opacity: 1, y: 40, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 sm:left-4 bottom-0 w-[52%] sm:w-[48%] h-[320px] sm:h-[380px] overflow-hidden shadow-2xl z-10 border border-white/10"
          >
            <img
              src={storyImage}
              alt="Otto Images primary story capture"
              className="w-full h-full object-cover grayscale brightness-90 contrast-125 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right / Upper Image Container */}
          <motion.div
            initial={{ opacity: 0, y: -30, x: 20 }}
            whileInView={{ opacity: 1, y: -30, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute right-0 sm:right-6 top-0 w-[52%] sm:w-[48%] h-[320px] sm:h-[380px] overflow-hidden shadow-2xl z-20 border border-white/10"
          >
            <img
              src={secondImg}
              alt="Otto Images secondary cinematic capture"
              className="w-full h-full object-cover grayscale brightness-95 contrast-125 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: CONTINUOUSLY ROTATING THEMES TEXT
        ========================================================= */}
        <div 
          className="lg:col-span-6 lg:pl-10 mt-8 lg:mt-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.span
            className="block uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What We Capture
          </motion.span>

          {/* Rotating Text Content Card */}
          <div className="min-h-[180px] sm:min-h-[160px] relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="border-l-2 border-[#C8A35F] pl-6"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 tracking-wide">
                  {themes[activeIndex].title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                  {themes[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Progress Indicators */}
          <div className="flex items-center gap-3 mt-8">
            {themes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  activeIndex === idx ? "w-10 bg-[#C8A35F]" : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide to theme ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}