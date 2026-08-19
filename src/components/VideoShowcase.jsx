// src/components/VideoShowcase.jsx
// Large cinematic section that autoplays and rotates through a handful of
// local videos. Video sources live in src/config/media.js — swap the
// paths there, never in this component.
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { showcaseVideos, videoIntervalMs } from "../config/media";

export default function VideoShowcase() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  useEffect(() => {
    if (showcaseVideos.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % showcaseVideos.length);
    }, videoIntervalMs);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Ensure the newly-mounted <video> actually starts playing on
    // browsers that pause a swapped/re-keyed element.
    videoRef.current?.play?.().catch(() => {});
  }, [index]);

  return (
    <section className="relative w-full h-[70vh] md:h-screen bg-black overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.video
          key={showcaseVideos[index]}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={showcaseVideos[index]}
          autoPlay
          muted
          loop={showcaseVideos.length === 1 || reducedMotion}
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          onEnded={() => {
            if (!reducedMotion && showcaseVideos.length > 1) {
              setIndex((i) => (i + 1) % showcaseVideos.length);
            }
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          className="uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          In Motion
        </motion.span>
        <motion.h2
          className="font-serif text-white text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-snug"
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
