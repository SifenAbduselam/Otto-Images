import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { fetchImagesByCategory } from "../utils/fetchImages";

export default function CategoryPage() {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const urls = await fetchImagesByCategory(category);
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
    <div className="bg-black text-white pt-32 md:pt-40 px-6 min-h-screen">
      <div className="text-center mb-16">
        <span className="block uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-4">
          Otto Images
        </span>
        <motion.h1
          className="font-serif text-4xl md:text-5xl capitalize"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {category} Gallery
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto pb-8">
        {loading ? (
          <p className="text-gray-400 col-span-full text-center">Loading…</p>
        ) : images.length > 0 ? (
          images.map((url, index) => (
            <motion.div
              key={index}
              className="w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
            >
              <img
                src={url}
                alt={`${category}-${index}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No images yet for {category}.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
