// src/components/Location.jsx
import { motion } from "framer-motion";

export default function Location() {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, color: "#D4AF37", transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, color: "#D4AF37", transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <section className="py-20 px-6 bg-[#F9F7F5]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-serif mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // triggers every time in view
          variants={headingVariants}
        >
          Stay Located
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg mb-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          Bole Edna Mall, the way to 22 Mazoriya, the first main left turn, Anat Building, Ground Floor
        </motion.p>

        {/* Google Map */}
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={mapVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.043852519136!2d38.77282561568458!3d9.015674992545836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164e6a66b2118565%3A0xc7455c5d66568007!2sAnat%20Building!5e0!3m2!1sen!2set!4v1723570929157!5m2!1sen!2set"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
