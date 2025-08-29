// src/pages/CategoryPage.jsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/images/${category}`);
        const urls = await res.json();
        setImages(urls);
      } catch (err) {
        console.error(`Error loading folder ${category}:`, err);
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, [category]);

  return (
    <div className="bg-black text-white pt-28 px-6 min-h-screen">
      <motion.h1
        className="text-5xl font-bold text-[#C8A35F] capitalize text-center mb-16"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {category} Gallery
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-white col-span-full text-center">Loading…</p>
        ) : images.length > 0 ? (
          images.map((url, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={url}
                alt={`${category}-${index}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))
        ) : (
          <p className="text-white col-span-full text-center">
            No images yet for {category}.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
