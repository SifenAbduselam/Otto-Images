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
   CINEMATIC IMAGE PANEL 
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
          /* 
            NOTE: 
            - Use "object-cover" if you want the image to completely fill the box (may crop edges).
            - Use "object-contain" if you want the full image to show without any cropping at all.
          */
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
              duration: 1.5,
              ease: "easeInOut",
            },
            scale: {
              duration: (intervalMs || 5000) / 1000 + 1.5,
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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cyclingImages = heroImagesLeft?.length > 0 ? heroImagesLeft : ["/placeholder.jpg"];

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* =====================================================
          RESPONSIVE HERO SECTION
          Mobile: Stacked (Images top 50vh, Text bottom 50vh)
          Desktop: 50/50 Side-by-side full screen (lg:h-screen)
      ===================================================== */}
      <section className="relative w-full min-h-[100svh] lg:h-screen flex flex-col lg:flex-row overflow-hidden">
        
        {/* -----------------------------------------------------
            MOBILE: IMAGES ON TOP / DESKTOP: RIGHT COLUMN
        ----------------------------------------------------- */}
        <div className="w-full h-[50vh] lg:h-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2">
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
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-full flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-10 lg:py-16 z-20 bg-black order-2 lg:order-1">
          
          {/* Top small tag / metadata */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hidden lg:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60"
          >
            <span className="h-px w-8 bg-white/40" />
            <span>Otto Images / Photography & Cinematography</span>
          </motion.div>

          {/* Main Heading & Paragraph */}
          <div className="my-auto">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="font-serif font-normal text-white text-2xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.08] tracking-tight"
            >
              CAPTURING THE <br />
              ELEGANCE AND <br />
              ROMANCE OF YOUR <br />
              MOST SPECIAL DAY
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 max-w-md text-xs sm:text-sm leading-relaxed text-white/70 font-light"
            >
              Professional photography and cinematography crafted around your story, your people, and your most meaningful moments.
            </motion.p>

            {/* Action Link / Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="mt-6 sm:mt-8"
            >
              <button
                onClick={() => navigate("/book-now")}
                className="group inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white font-medium border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
              >
                <span>Contact Us</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom branding detail */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="text-[9px] uppercase tracking-[0.2em] text-white/40 pt-4 lg:pt-0"
          >
            Otto Images © {new Date().getFullYear()}
          </motion.div>
        </div>

      </section>

      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}
      <section className="relative bg-black px-6 py-24 md:py-32 border-t border-white/10">
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
            className="mt-7 font-serif text-2xl leading-relaxed text-white sm:text-3xl md:text-4xl"
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
            className="mx-auto mt-7 max-w-2xl text-sm md:text-base leading-8 text-white/50"
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
            className="mt-10 border border-white/30 px-8 py-3.5 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white transition-colors duration-300"
          >
            Start Your Story
          </motion.button>
        </div>
      </section>
    </main>
  );
}