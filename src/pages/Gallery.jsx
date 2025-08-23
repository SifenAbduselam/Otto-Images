// src/pages/Gallery.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-20 px-6 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto py-16 flex-1">
        {/* Animated Gallery Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-extrabold text-center mb-6"
          style={{ color: "#FFD700" }}
        >
          Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg text-center mb-16 max-w-4xl mx-auto text-black"
        >
          Explore our curated collection of timeless moments captured with passion and artistry.
        </motion.p>

        {/* Gallery Sections */}
        {[
          {
            title: "Wedding Photography",
            desc: "Capture every moment of your wedding day with a package that suits your vision. Whether you need full-day coverage or a few key hours, our two professional photographers ensure every detail, glance, and emotion is beautifully preserved.",
            img: "/images/w28.png",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDc3MzY0ODUwODg0NjA5?story_media_id=3473819818948393356_35929405908&igsh=MW9xbjR1NWUwZzY5cQ==",
            reverse: false
          },
          {
            title: "Baby Shower",
            desc: "The baby shower is a moment of joy and anticipation. We capture the laughter, tears, and love shared among friends and family.",
            img: "/images/w31.png",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDY0Njg0NTE2NTYyMTAx?story_media_id=3374402901880451418_35929405908&igsh=cWdtcGZya3hiaWdr",
            reverse: true
          },
          {
            title: "Landscape",
            desc: "Experience the beauty of nature through our landscape photography, capturing breathtaking sceneries and timeless views.",
            img: "/images/w32.jpg",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MzA5NTE4OTU2MDA4NjYy?story_media_id=2901100831910744103_35929405908&igsh=MTBzd2l4djZsOW11bw==",
            reverse: false
          },
          {
            title: "Maternity",
            desc: "Maternity is a journey of transformation and beauty. We capture the grace, strength, and love of expectant mothers.",
            img: "/images/w20.jpg",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mjc1NzE4MjAyMTE5NTU1?story_media_id=3045479325104257020_35929405908&igsh=NHIwNnk5MDR4cHp3",
            reverse: true
          },
          {
            title: "Family",
            desc: "Family moments are timeless treasures. We capture the bonds, smiles, and warmth of being together.",
            img: "/images/w35.jpg",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE5OTk3NDczNDI4NTgz?story_media_id=2606255273678737740_35929405908&igsh=OTAxYXJ2OXVvOHJx",
            reverse: false
          },
          {
            title: "Studio Bridal",
            desc: "Studio bridal photography highlights elegance and timeless beauty. We make sure every detail shines.",
            img: "/images/w36.jpg",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTQxNjIyMDM5MDgwMzM5?story_media_id=2853430936842815377_35929405908&igsh=MWhiYWp4MWJpd2E3Nw==",
            reverse: true
          },
          {
            title: "Shimglna",
            desc: "Shimglna is a unique cultural experience. We capture the beauty of tradition and meaningful rituals.",
            img: "/images/w37.jpg",
            link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU2NjI1MDg2Mzc0ODI5?story_media_id=3652755674009768885_35929405908&igsh=MXhmbWZrN2k2Zmh1OA==",
            reverse: false
          }
        ].map((section, i) => (
          <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-24`}>
            <motion.div
              className={section.reverse ? "lg:order-2" : ""}
              initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-extrabold mb-6 text-[#FFD700]">{section.title}</h2>
              <p className="leading-relaxed mb-8 text-black">{section.desc}</p>
              <Link
                to={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] uppercase tracking-wider text-sm font-medium hover:text-black hover:scale-105 transition transform duration-300"
              >
                View More
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={`overflow-hidden shadow-lg ${section.reverse ? "lg:order-1" : ""}`}
            >
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-80 object-contain"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
