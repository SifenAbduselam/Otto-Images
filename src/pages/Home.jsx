// src/components/Stats.jsx

import { motion } from "framer-motion";
import { storyImage, aboutSecondaryImage, heroImagesLeft } from "../config/media";

export default function Stats() {
  const offerings = [
    {
      num: "01.",
      title: "CINEMATIC PORTRAITS",
      desc: "Thoughtfully crafted sessions capturing your authentic presence through timeless imagery and profound light.",
    },
    {
      num: "02.",
      title: "EDITORIAL NARRATIVES",
      desc: "Deep storytelling frameworks designed to reflect your personal or brand evolution with striking precision.",
    },
    {
      num: "03.",
      title: "THE ARCHIVE",
      desc: "Curated motion and still packages crafted exclusively for those seeking an uncompromised aesthetic standard.",
    },
  ];

  // Pick a striking hero image dynamically for the scroll reveal backdrop
  const scrollBgImage = heroImagesLeft?.[2] || storyImage;

  return (
    <section className="bg-black text-white relative overflow-hidden py-16 md:py-24">
      
      {/* =========================================================
          SECTION 1: FOUNDER / INTRO (Asymmetrical Center Layout)
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 my-12 border-b border-white/10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Content with Staggered Entrance */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="block uppercase tracking-[0.3em] text-[10px] md:text-[11px] text-white/50 font-mono">
              MEET THE FOUNDER & CEO
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light text-white">
              I'm Name
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light max-w-md border-l border-white/20 pl-6">
              Your Paragraph text goes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id. Vitae aliquam risus vel ultricies aliquet. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </motion.div>

          {/* Right Column: Centered Asymmetrical Image Pair with Parallax Zoom */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative h-[450px] sm:h-[520px] flex items-center justify-center"
          >
            {/* Left / Lower Offset Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 24, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute left-2 sm:left-10 bottom-0 w-[48%] h-[340px] sm:h-[400px] overflow-hidden border border-white/15 z-10 shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={storyImage}
                alt="Editorial portrait showcase left"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>

            {/* Right / Upper Offset Image */}
            <motion.div
              initial={{ opacity: 0, y: -40, x: 20 }}
              whileInView={{ opacity: 1, y: -24, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
              className="absolute right-2 sm:right-10 top-0 w-[48%] h-[340px] sm:h-[400px] overflow-hidden border border-white/15 z-20 shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={aboutSecondaryImage}
                alt="Editorial portrait showcase right"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SECTION 2: SCROLL-REVEAL HOME BACKGROUND IMAGE BANNER
          (Fades and scales up dramatically as the user scrolls into view)
      ========================================================= */}
      <div className="relative h-[60vh] md:h-[75vh] w-full my-16 overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0.1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={scrollBgImage}
            alt="Home background visual reveal"
            className="w-full h-full object-cover grayscale brightness-40 contrast-125"
          />
        </motion.div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
        >
          <span className="uppercase tracking-[0.4em] text-[10px] text-white/70 block mb-3 font-mono">
            THE OTTO ARCHIVE
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-wider font-light leading-tight">
            Cinematic frames frozen in time.
          </h3>
        </motion.div>
      </div>

      {/* =========================================================
          SECTION 3: OFFERINGS (Spaced and Animated Layout)
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 my-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Offerings Heading & Link */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <span className="block uppercase tracking-[0.3em] text-[10px] text-white/50 font-mono">
              THE SIGNATURE
            </span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-wide font-light text-white">
              OFFERINGS
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light max-w-md">
              Your Paragraph text goes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id. Vitae aliquam risus vel ultricies aliquet. Quis ipsum suspendisse ultrices gravida.
            </p>
            <div className="pt-4">
              <motion.a
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                href="/offerings"
                className="inline-block uppercase tracking-[0.25em] text-[10px] font-medium text-white pb-2 border-b border-white/40 hover:border-white transition-colors duration-300"
              >
                + LINK TO OFFERINGS
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Staggered Offerings Item List */}
          <div className="space-y-12">
            {offerings.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/15 pb-10 group cursor-pointer"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-xs text-white/40 tracking-widest">{item.num}</span>
                  <motion.span 
                    whileHover={{ opacity: 1 }}
                    className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white transition-colors"
                  >
                    Details
                  </motion.span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-3 tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}