// src/components/Hero.jsx

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Array of your 5 background videos
const heroVideos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
  "/videos/video-5.mp4",
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Handle automatic video switching when one video finishes playing
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  // Force play video reference when index updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <main className="relative w-full h-[100svh] bg-black text-white overflow-hidden flex items-center justify-center">
      
      {/* =====================================================
          BACKGROUND VIDEO CAROUSEL CONTAINER
      ===================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            ref={videoRef}
            src={heroVideos[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110"
          />
        </AnimatePresence>

        {/* Cinematic Dark & Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* =====================================================
          LEFT SIDE: VERTICAL SOCIAL ICONS (Inspired by design)
      ===================================================== */}
      <div className="absolute left-6 md:left-10 bottom-12 hidden lg:flex flex-col items-center space-y-6 z-30 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-lr] mb-2 text-white/50">
          Follow Us
        </span>
        <span className="h-12 w-px bg-white/30 mb-2" />
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A35F] transition-colors text-xs">
          IG
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A35F] transition-colors text-xs">
          FB
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A35F] transition-colors text-xs">
          YT
        </a>
      </div>

      {/* =====================================================
          CENTER CONTENT (New Editorial Inspiration)
      ===================================================== */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
        
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8A35F] font-semibold mb-4"
        >
          Otto Images / Cinematic Storytelling
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase leading-[1.1] drop-shadow-lg"
        >
          Timestepped Romance <br />
          <span className="text-white/80 font-light italic lowercase text-2xl sm:text-4xl md:text-5xl">
            & cinematic soul
          </span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-xs sm:text-sm md:text-base text-white/70 max-w-xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Crafting timeless visual heirlooms from your most cherished moments. Preserving genuine emotion with fine art elegance.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex justify-center items-center gap-6"
        >
          <button
            onClick={() => navigate("/book-now")}
            className="px-8 py-3.5 uppercase tracking-[0.25em] text-xs font-medium border border-white text-white bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black shadow-xl"
          >
            Book Your Session
          </button>
        </motion.div>
      </div>

      {/* =====================================================
          RIGHT SIDE: SCROLL DOWN INDICATOR
      ===================================================== */}
      <div className="absolute right-6 md:right-10 bottom-12 hidden lg:flex flex-col items-center space-y-4 z-30 text-white/60">
        <span className="text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-lr] text-white/50">
          Scroll Down
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-10 w-px bg-[#C8A35F]"
        />
      </div>

      {/* =====================================================
          BOTTOM LEFT: FLOATING QUICK CONTACT BUTTON (Like reference)
      ===================================================== */}
      <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 z-30 lg:hidden">
        <button
          onClick={() => navigate("/contact")}
          className="w-12 h-12 rounded-full bg-[#C8A35F] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Contact Us"
        >
          📞
        </button>
      </div>

    </main>
  );
}