// src/components/Hero.jsx

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showcaseVideos, videoIntervalMs } from "../config/media";

export default function Hero() {
  const navigate = useNavigate();
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
    if (!showcaseVideos || showcaseVideos.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % showcaseVideos.length);
    }, videoIntervalMs || 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRef.current?.play?.().catch(() => {});
  }, [index]);

  const currentVideos = showcaseVideos && showcaseVideos.length > 0 ? showcaseVideos : [
    "/videos/video-1.mp4",
    "/videos/video-1.mp4",
    "/videos/video-1.mp4",
    "/videos/video-1.mp4"
  ];

  return (
    <main className="relative w-full h-[100svh] bg-black text-white overflow-hidden">
      
      {/* =====================================================
          BACKGROUND VIDEO CAROUSEL LAYER
      ===================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <AnimatePresence mode="sync">
          <motion.video
            key={currentVideos[index % currentVideos.length]}
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110"
            src={currentVideos[index % currentVideos.length]}
            autoPlay
            muted
            loop={currentVideos.length === 1 || reducedMotion}
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            onEnded={() => {
              if (!reducedMotion && currentVideos.length > 1) {
                setIndex((i) => (i + 1) % currentVideos.length);
              }
            }}
          />
        </AnimatePresence>

        {/* Cinematic Overlays with deep bottom vignette */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* =====================================================
          SUBTLE LUXURY WATERMARK MONOGRAM (Center Background)
      ===================================================== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="font-serif text-[18vw] tracking-tighter text-white/20 select-none uppercase font-light"
        >
          OI
        </motion.div>
      </div>

      {/* =====================================================
          LAYOUT CONTAINER (CTA pushed lower)
      ===================================================== */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-10 md:pb-14 px-6 md:px-12 pointer-events-none">
        
        {/* LOWER PART: Minimalist Book Now Link */}
        <div className="flex flex-col items-center pointer-events-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            onClick={() => navigate("/book-now")}
            className="group inline-flex items-center gap-3 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-medium text-white/90 pb-1.5 border-b border-white/40 hover:border-white hover:text-white transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            <span>Book Your Session</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-[#C8A35F]">→</span>
          </motion.button>
        </div>

      </div>

      {/* SCROLL DOWN INDICATOR (Right) */}
      <div className="absolute right-6 md:right-10 bottom-12 hidden lg:flex flex-col items-center space-y-4 z-30 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-lr] text-white/50">Scroll Down</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-10 w-px bg-[#C8A35F]"
        />
      </div>

      {/* QUICK CONTACT (Bottom Left Mobile) */}
      <div className="absolute left-6 bottom-6 z-30 lg:hidden">
        <button
          onClick={() => navigate("/contact")}
          className="w-10 h-10 rounded-full bg-[#C8A35F] text-black flex items-center justify-center shadow-lg"
          aria-label="Contact"
        >
          📞
        </button>
      </div>

    </main>
  );
}