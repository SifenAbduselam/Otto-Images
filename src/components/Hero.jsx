
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
    if (reducedMotion || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
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
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.08,
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
              duration: intervalMs / 1000 + 1.8,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>

      {/* Subtle cinematic image treatment */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="bg-black text-white">

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}

      <section className="relative w-full h-[100svh] min-h-[620px] overflow-hidden">

        {/* -----------------------------------------------------
            TWO PANELS
            IMPORTANT:
            We keep the split on mobile too.
        ----------------------------------------------------- */}

        <div className="absolute inset-0 flex">

          {/* LEFT IMAGE */}
          <CyclingPanel
            images={heroImagesLeft}
            intervalMs={heroIntervalMs.left}
            reducedMotion={reducedMotion}
            className="w-1/2 h-full"
          />

          {/* RIGHT IMAGE */}
          <CyclingPanel
            images={heroImagesRight}
            intervalMs={heroIntervalMs.right}
            reducedMotion={reducedMotion}
            className="w-1/2 h-full"
          />
        </div>

        {/* -----------------------------------------------------
            CENTER DIVIDER
        ----------------------------------------------------- */}

        <div
          className="
            absolute
            top-0
            bottom-0
            left-1/2
            -translate-x-1/2
            w-px
            bg-white/20
            z-20
            pointer-events-none
          "
        />

        {/* -----------------------------------------------------
            GLOBAL CINEMATIC OVERLAY

            Stronger at the bottom where the text lives.
        ----------------------------------------------------- */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            z-10
            bg-gradient-to-b
            from-black/45
            via-black/10
            to-black/85
          "
        />

        {/* -----------------------------------------------------
            CENTER TEXT BACKDROP

            This gives the typography a controlled dark area
            without destroying the photography.
        ----------------------------------------------------- */}

        <div
          className="
            absolute
            left-0
            right-0
            bottom-0
            h-[58%]
            z-10
            pointer-events-none
            bg-gradient-to-t
            from-black/70
            via-black/30
            to-transparent
          "
        />

        {/* =====================================================
            EDITORIAL CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-30
            h-full
            flex
            flex-col
            items-center
            justify-end
            text-center
            px-5
            sm:px-8
            pb-24
            md:pb-28
          "
        >

          {/* Small label */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[9px]
              sm:text-[10px]
              md:text-xs
              uppercase
              tracking-[0.3em]
              text-white/80
            "
          >
            <span className="h-px w-8 sm:w-12 bg-white/50" />

            <span>
              Otto Images
            </span>

            <span className="text-white/40">
              /
            </span>

            <span>
              Photography & Cinematography
            </span>

            <span className="h-px w-8 sm:w-12 bg-white/50" />
          </motion.div>


          {/* Main headline */}

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              delay: 0.15,
            }}
            className="
              max-w-5xl
              font-serif
              font-normal
              text-white
              text-[2.4rem]
              leading-[0.98]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[5.8rem]
              tracking-[-0.025em]
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]
            "
          >
            Capturing moments.
            <br />

            <span className="text-white/75">
              Creating memories.
            </span>
          </motion.h1>


          {/* Supporting line */}

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              delay: 0.3,
            }}
            className="
              mt-5
              max-w-xl
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-white/85
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
            "
          >
            Professional photography and cinematography
            crafted around your story, your people, and your
            most meaningful moments.
          </motion.p>


          {/* =================================================
              BOOK NOW BUTTON
          ================================================= */}

          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              delay: 0.45,
            }}
            onClick={() => navigate("/book-now")}
            whileHover="hover"
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              mt-8
              flex
              items-center
              gap-4
              bg-white
              text-black
              px-7
              sm:px-9
              py-4
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              font-medium
              transition-all
              duration-300
              hover:bg-white/90
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >
            <span>
              Book Your Session
            </span>

            {/* Arrow */}

            <motion.span
              variants={{
                hover: {
                  x: 5,
                },
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="text-base leading-none"
            >
              →
            </motion.span>
          </motion.button>

        </div>


        {/* =====================================================
            LEFT SIDE INDEX
        ===================================================== */}

        <div
          className="
            absolute
            left-5
            sm:left-7
            md:left-10
            bottom-7
            z-30
            hidden
            sm:flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/60
          "
        >
          <span>
            01
          </span>

          <span className="h-px w-8 bg-white/40" />

          <span>
            Otto Images
          </span>
        </div>


        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="
            absolute
            right-5
            sm:right-7
            md:right-10
            bottom-7
            z-30
            flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/60
          "
        >
          <span className="hidden sm:block">
            Scroll
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-8
              w-5
              items-start
              justify-center
              rounded-full
              border
              border-white/40
              pt-1.5
            "
          >
            <span className="h-1 w-px bg-white/80" />
          </motion.span>
        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative bg-black px-6 py-24 md:py-32">

        <div className="mx-auto max-w-4xl text-center">

          {/* Section label */}

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/45
            "
          >
            The Otto Images Approach
          </motion.span>


          {/* Main copy */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              mt-7
              font-serif
              text-2xl
              leading-relaxed
              text-white
              sm:text-3xl
              md:text-4xl
            "
          >
            We don't simply take photographs.
            <br />

            <span className="text-white/45">
              We preserve the feeling behind them.
            </span>
          </motion.p>


          {/* Supporting text */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              md:text-base
              leading-8
              text-white/50
            "
          >
            At Otto Images, every frame is created with intention.
            From intimate portraits to celebrations and cinematic
            productions, we create imagery that remains meaningful
            long after the moment has passed.
          </motion.p>


          {/* Secondary CTA */}

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => navigate("/book-now")}
            className="
              mt-10
              border
              border-white/30
              px-8
              py-3.5
              text-[10px]
              md:text-xs
              uppercase
              tracking-[0.25em]
              text-white
              transition-colors
              duration-300
            "
          >
            Start Your Story
          </motion.button>

        </div>

      </section>

    </main>
  );
}

