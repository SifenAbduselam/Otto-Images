// src/components/Hero.jsx

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
    }
  }, [currentVideoIndex]);

  return (
    <main className="relative w-full h-[100svh] bg-black text-white overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            ref={videoRef}
            src={heroVideos[currentVideoIndex]}
            autoPlay muted playsInline
            onEnded={handleVideoEnded}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      {/* Layout Container */}
      <div className="relative z-20 h-full flex flex-col justify-between py-12 px-6 md:px-12">
        
        {/* UPPER PART: Branding / Logo Text */}
        <div className="flex flex-col items-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Otto Images / Cinematic Storytelling
          </motion.div>
        </div>

        {/* LOWER PART: Book Now Button */}
        <div className="flex flex-col items-center pb-10">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={() => navigate("/book-now")}
            className="px-6 py-2 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-medium border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          >
            Book Your Session
          </motion.button>
        </div>

      </div>

      {/* SCROLL DOWN INDICATOR (Right) */}
      <div className="absolute right-6 md:right-10 bottom-12 hidden lg:flex flex-col items-center space-y-4 z-30">
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
        >
          📞
        </button>
      </div>

    </main>
  );
}