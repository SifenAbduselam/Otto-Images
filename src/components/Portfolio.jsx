// src/components/Portfolio.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const randomWidth = () => 150 + Math.floor(Math.random() * 150);

  useEffect(() => {
    let animationId;
    let scrollPosition = 0;
    const speed = 0.7;

    const animate = () => {
      const container = sliderRef1.current;
      if (!container) return;

      scrollPosition += speed;
      container.scrollLeft = scrollPosition;

      if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    let animationId;
    let scrollPosition = 0;
    const speed = 0.7;

    const animate = () => {
      const container = sliderRef2.current;
      if (!container) return;

      if (scrollPosition === 0) scrollPosition = container.scrollWidth / 2;

      scrollPosition -= speed;
      container.scrollLeft = scrollPosition;

      if (scrollPosition <= 0) scrollPosition = container.scrollWidth / 2;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const topImages = [
    "/images/w28.jpg", "/images/w16.jpg", "/images/w14.jpg", "/images/w11.jpg",
    "/images/w27.jpg", "/images/w15.jpg", "/images/w12.jpg", "/images/w9.jpg",
    "/images/w3.jpg", "/images/w1.jpg"
  ];

  const bottomImages = [
    "/images/w28.jpg", "/images/w16.jpg", "/images/w14.jpg", "/images/w11.jpg",
    "/images/w27.jpg", "/images/w15.jpg", "/images/w12.jpg", "/images/w9.jpg",
    "/images/w3.jpg", "/images/w1.jpg"
  ];

  const fullTop = [...Array(4)].flatMap(() => topImages);
  const fullBottom = [...Array(4)].flatMap(() => bottomImages);

  const headingVariants = {
    hidden: { opacity: 0, y: 30, color: "#C8A35F" },
    visible: { 
      opacity: 1, 
      y: 0, 
      color: "#D4AF37", // elegant gold shade
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-black py-16 px-0 relative">
      {/* Top horizontal line */}
      <div className="w-full border-t border-white mb-6"></div>

      {/* Heading with animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-center mb-12 mt-12 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={headingVariants}
      >
        OUR WORKS
      </motion.h2>

      {/* Top Row */}
      <div
        ref={sliderRef1}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ height: "200px" }}
      >
        {fullTop.map((src, i) => (
          <img
            key={`top-${i}`}
            src={src}
            alt="Popular Work"
            className="h-full object-cover flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ width: `${randomWidth()}px` }}
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div
        ref={sliderRef2}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide mt-4"
        style={{ height: "200px" }}
      >
        {fullBottom.map((src, i) => (
          <img
            key={`bottom-${i}`}
            src={src}
            alt="Popular Work"
            className="h-full object-cover flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ width: `${randomWidth()}px` }}
          />
        ))}
      </div>

      {/* Bottom horizontal line */}
      <div className="w-full border-t border-white mt-12"></div>
    </section>
  );
}
