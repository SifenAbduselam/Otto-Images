import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { fetchImagesByCategory } from "../utils/fetchImages";

// Updated folders array including all your Cloudinary categories
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
  "birthday",
  "enshoshula",
  "landscape",
  "mels",
  "kirstna",
  "kusla",
  "tekil",
  "genfo",
  "tifrkoreta"
];

export default function Gallery() {
  const [previewImages, setPreviewImages] = useState({});

  useEffect(() => {
    const loadPreviews = async () => {
      const previewMap = {};

      for (const folder of folders) {
        try {
          const urls = await fetchImagesByCategory(folder);
          previewMap[folder] = urls[0] || null; // Use first image as preview
        } catch (err) {
          console.error(`Failed to load preview for ${folder}:`, err);
          previewMap[folder] = null;
        }
      }

      setPreviewImages(previewMap);
    };

    loadPreviews();
  }, []);

  return (
    <div className="bg-black text-white pt-32 md:pt-40 px-6">
      <div className="text-center mb-20 md:mb-28">
        <motion.span
          className="block uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Otto Images
        </motion.span>
        <motion.h1
          className="font-serif text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Gallery
        </motion.h1>
      </div>

      <div className="flex flex-col gap-28 md:gap-36 max-w-6xl mx-auto pb-8">
        {folders.map((folder, index) => (
          <motion.div
            key={folder}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {previewImages[folder] ? (
              <motion.img
                src={previewImages[folder]}
                alt={folder}
                className="w-full md:w-1/2 h-[340px] md:h-[440px] object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9 }}
              />
            ) : (
              <div className="w-full md:w-1/2 h-[340px] md:h-[440px] bg-white/5 flex items-center justify-center text-gray-500 text-lg">
                No Preview Available
              </div>
            )}

            <motion.div
              className="md:w-1/2 flex flex-col gap-5"
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="uppercase tracking-[0.25em] text-xs text-[#C8A35F]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl capitalize">{folder}</h2>
              <p className="text-gray-400 leading-relaxed">
                Explore stunning {folder} moments captured beautifully.
              </p>
              <Link
                to={`/gallery/${folder}`}
                className="inline-block w-fit mt-2 px-6 py-2 uppercase tracking-[0.2em] text-xs font-medium border border-[#C8A35F] text-white transition-all duration-300 hover:bg-[#C8A35F] hover:text-black"
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
