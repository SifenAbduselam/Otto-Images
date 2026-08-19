// src/components/VideoShowcase.jsx
// Editorial image rotator section that smoothly crossfades through 3 images.
// Image sources live in src/config/media.js — swap the paths there.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroImagesLeft, videoIntervalMs } from "../config/media";

export default function VideoShowcase() {
  // Use the first 3 images from heroImagesLeft as our rotating showcase images
  const showcaseImages = heroImagesLeft.slice(0, 3);
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (showcaseImages.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % showcaseImages.length);
    }, videoIntervalMs || 6000);
    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  return (
    <section className="relative w-full h-[70vh] md:h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={showcaseImages[index]}
          src={showcaseImages[index]}
          alt="Otto Images cinematic motion showcase"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          className="uppercase tracking-[0.35em] text-xs text-white/70 mb-4 font-mono"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          In Motion
        </motion.span>
        <motion.h2
          className="font-serif text-white text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-snug font-light tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Every story looks different in motion.
        </motion.h2>
      </div>
    </section>
  );
}