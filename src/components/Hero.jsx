// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  heroImagesLeft,
  heroImagesRight,
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

/**
 * A single panel that slowly crossfades + slow-zooms through a list of images.
 * Fully self-contained so left/right panels never sync to each other.
 */
function CyclingPanel({ images, intervalMs, className = "", reducedMotion }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [images.length, intervalMs, reducedMotion]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.6, ease: "easeInOut" },
            scale: { duration: intervalMs / 1000 + 1.6, ease: "linear" },
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const reducedMotion = usePrefersReducedMotion();

  const mobileImages = [...heroImagesLeft, ...heroImagesRight];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-black">
      {/* ===== Cinematic two-panel hero ===== */}
      <section className="relative w-full h-[100svh] overflow-hidden">
        {/* Desktop: two independent panels side by side */}
        <div className="hidden md:flex absolute inset-0">
          <CyclingPanel
            images={heroImagesLeft}
            intervalMs={heroIntervalMs.left}
            reducedMotion={reducedMotion}
            className="w-1/2 h-full"
          />
          <CyclingPanel
            images={heroImagesRight}
            intervalMs={heroIntervalMs.right}
            reducedMotion={reducedMotion}
            className="w-1/2 h-full"
          />
        </div>

        {/* Mobile: single cycling panel drawing from both arrays */}
        <div className="md:hidden absolute inset-0">
          <CyclingPanel
            images={mobileImages}
            intervalMs={heroIntervalMs.left}
            reducedMotion={reducedMotion}
            className="w-full h-full"
          />
        </div>

        {/* Legibility overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none" />

        {/* Editorial headline over the imagery */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-6 text-center">
          <motion.span
            className="uppercase tracking-[0.35em] text-[11px] md:text-xs text-[#C8A35F] mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Otto Images &middot; Photography &amp; Cinematography
          </motion.span>

          <motion.h1
            className="font-serif text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Capturing Moments and Crafting Memories
          </motion.h1>
        </div>
      </section>

      {/* ===== Supporting copy ===== */}
      <section className="py-20 md:py-28 px-6 text-center max-w-3xl mx-auto">
        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          At Otto Images, we specialize in transforming fleeting moments into
          timeless memories. We are dedicated to delivering high-quality
          photography services that tell your unique story. We approach each
          project with creativity and professionalism, ensuring every detail
          is captured beautifully.
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-400 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          Elevate your memories with our professional photo studio, where
          every click transforms your moments into timeless masterpieces.
        </motion.p>

        <motion.button
          className="mt-10 border border-[#C8A35F] text-white px-9 py-3 uppercase tracking-[0.2em] text-xs md:text-sm font-medium transition-all duration-300 hover:bg-[#C8A35F] hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/book-now")}
        >
          Book Now
        </motion.button>
      </section>
    </main>
  );
}
