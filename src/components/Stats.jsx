// src/components/Stats.jsx
// Editorial "story/intro" section. Content preserved from the original —
// only the presentation has changed.
import { motion } from "framer-motion";
import { storyImage } from "../config/media";

export default function Stats() {
  const themes = [
    {
      title: "The Quiet Moments",
      desc: "Stillness before the storm, a breath held, a smile forming — we find beauty in what's almost missed.",
    },
    {
      title: "Who You Are",
      desc: "Not just how you look, but how you feel — your strength, grace, and truth, revealed in a single frame.",
    },
    {
      title: "Time Passing",
      desc: "The glow of pregnancy, the hands of a parent, the eyes of a child — we preserve what won't stay.",
    },
    {
      title: "Everyday Poetry",
      desc: "Light on skin, fabric in motion, laughter caught mid-air — life, not staged, but seen.",
    },
  ];

  return (
    <section className="bg-black relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Editorial image */}
        <motion.div
          className="relative h-[420px] md:h-[560px] overflow-hidden order-2 md:order-1"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src={storyImage}
            alt="Otto Images story"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <motion.span
            className="block uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            What We Capture
          </motion.span>

          <div className="space-y-10">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                className="border-l border-white/15 pl-6"
              >
                <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                  {theme.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{theme.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
