// src/components/Hero.jsx

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  heroImagesLeft,
  heroIntervalMs,
} from "../config/media";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const listener = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", listener);

    return () => mq.removeEventListener?.("change", listener);
  }, []);

  return reduced;
}

/* =========================================================
   CINEMATIC IMAGE PANEL (Images set to Black & White)
========================================================= */

function CyclingPanel({
  images,
  intervalMs,
  className = "",
  reducedMotion,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (reducedMotion || !images || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [images, intervalMs, reducedMotion]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          draggable="false"
          /* 'grayscale' forces the image to black and white */
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110"
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 1.8,
              ease: "easeInOut",
            },
            scale: {
              duration: (intervalMs || 5000) / 1000 + 1.8,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>

      {/* Cinematic tint overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const navigate = useNavigate();
  const reducedMotion = usePrefersReducedMotion();

  // Slow, smooth slide animation variants from left
  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Slow, smooth slide animation variants from right
  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cyclingImages = heroImagesLeft?.length > 0 ? heroImagesLeft : ["/placeholder.jpg"];

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* =====================================================
          RESPONSIVE HERO SECTION
      ===================================================== */}
      <section className="relative w-full pt-16 lg:pt-20 min-h-[80vh] lg:h-[88svh] flex flex-col lg:flex-row overflow-hidden">
        
        {/* -----------------------------------------------------
            MOBILE: IMAGES ON TOP / DESKTOP: RIGHT COLUMN
        ----------------------------------------------------- */}
        <div className="w-full h-[40vh] lg:h-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2">
          <CyclingPanel
            images={cyclingImages}
            intervalMs={heroIntervalMs?.left || 5000}
            reducedMotion={reducedMotion}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        {/* -----------------------------------------------------
            MOBILE: TEXT ON BOTTOM / DESKTOP: LEFT COLUMN
        ----------------------------------------------------- */}
        <div className="w-full lg:w-1/2 min-h-[40vh] lg:h-full flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-6 lg:py-8 z-20 bg-black order-2 lg:order-1">
          
          {/* Top small tag sliding in slowly from left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
            className="hidden lg:flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/60"
          >
            <span className="h-px w-6 bg-white/40" />
            <span>Otto Images / Photography & Cinematography</span>
          </motion.div>

          {/* Main Content with classic serif typography */}
          <div className="my-auto overflow-hidden py-2">
            
            {/* Headline part 1 - slides in slowly from left */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
              transition={{ delay: 0.15, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-white text-xl sm:text-3xl lg:text-[2.6rem] xl:text-[3rem] leading-[1.15] tracking-tight"
            >
              When memories blur and the day feels like a dream,
            </motion.h1>

            {/* Headline part 2 - slides in slowly from right */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromRight}
              transition={{ delay: 0.35, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 font-serif font-normal text-white/70 text-lg sm:text-2xl lg:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] tracking-tight"
            >
              these photos bring your story back to life.
            </motion.div>

            {/* Book Now button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
              transition={{ delay: 0.55, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6"
            >
              <button
                onClick={() => navigate("/book-now")}
                className="group inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white font-medium border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
              >
                <span>Book Now</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom branding detail */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
            transition={{ delay: 0.75, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[9px] uppercase tracking-[0.2em] text-white/40 pt-2 lg:pt-0"
          >
            Otto Images © {new Date().getFullYear()}
          </motion.div>
        </div>

      </section>

      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}
      <section className="relative bg-black px-6 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.35em] text-white/45"
          >
            The Otto Images Approach
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-6 font-serif text-2xl leading-relaxed text-white sm:text-3xl md:text-4xl"
          >
            We don't simply take photographs.
            <br />
            <span className="text-white/45">We preserve the feeling behind them.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-sm md:text-base leading-8 text-white/50"
          >
            At Otto Images, every frame is created with intention. From intimate portraits to celebrations and cinematic productions, we create imagery that remains meaningful long after the moment has passed.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/book-now")}
            className="mt-8 border border-white/30 px-8 py-3.5 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white transition-colors duration-300"
          >
            Start Your Story
          </motion.button>
        </div>
      </section>
    </main>
  );
}