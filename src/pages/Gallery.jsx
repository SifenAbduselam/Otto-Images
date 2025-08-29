// src/pages/Gallery.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const folders = [
  "wedding",
  "shimglenna",
  "modeling",
  "maternity",
  "kids",
  "graduation",
  "family",
  "engagement",
  "cultural",
  "birthday"
];

export default function Gallery() {
  const [previewImages, setPreviewImages] = useState({});

  useEffect(() => {
    folders.forEach(async (folder) => {
      try {
        const res = await fetch(`https://otto-images.onrender.com/images/${folder}`);
        const urls = await res.json();
        setPreviewImages(prev => ({ ...prev, [folder]: urls[0] || null }));
      } catch (err) {
        console.error(`Error loading folder ${folder}:`, err);
      }
    });
  }, []);

  return (
    <div className="bg-black text-white pt-28 px-6">
      <motion.h1
        className="text-6xl font-bold text-center mb-12 text-[#C8A35F]"
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Gallery
      </motion.h1>

      <div className="flex flex-col gap-24">
        {folders.map((folder, index) => (
          <motion.div
            key={folder}
            className={`flex flex-col md:flex-row items-center justify-between gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {previewImages[folder] ? (
              <motion.img
                src={previewImages[folder]}
                alt={folder}
                className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7 }}
              />
            ) : (
              <motion.div className="w-full md:w-1/2 h-64 bg-gray-800 flex items-center justify-center text-gray-500 text-lg rounded-lg">
                Image Coming Soon
              </motion.div>
            )}

            <motion.div
              className="md:w-1/2 flex flex-col justify-center gap-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[#C8A35F] capitalize">{folder}</h2>
              <p className="text-white text-lg">
                Explore stunning {folder} moments captured beautifully.
              </p>
              <Link
                to={`/gallery/${folder}`}
                className="inline-block px-3 py-1 uppercase tracking-wider text-xs font-semibold border-2 border-[#C8A35F] text-white transition-all duration-300 active:scale-95 hover:border-[#C8A35F] hover:scale-105 rounded"
              >
                View More
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
