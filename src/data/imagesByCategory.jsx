import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { fetchImagesByCategory } from "../utils/fetchImages";

export default function CategoryPage() {
  const { category } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const urls = await fetchImagesByCategory(category); // fetch by folder/tag
      setImages(urls);
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
        {images.length > 0 ? (
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



// // src/data/imagesByCategory.js
// export const imagesByCategory = {
//   wedding: [
    
//   ],
//   engagement: [
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355929/5860734247399176683_xouget.jpg"
//   ],
//   birthday: [
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219846/w10_bo2ai7.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219829/w13_gml3zw.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219836/w7_bt53ro.jpg"


//   ],
//   shimgilna: ["https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355536/w9_bjjw7c.jpg"],
//   graduation: [
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437401/2U9A7798_r5gov8.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437437/2U9A7745_xl1aoh.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437457/2U9A7590_dyrqm4.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437544/2U9A8157_mhgdmu.jpg",
//      "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437526/2U9A7702_krnetd.jpg"

//   ],
//   kids: ["https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355588/022A3013_lk3h8b.jpg"],
//   maternity: ["https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219725/w23_rgpspm.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219746/w22_wvtlyy.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219757/w6_qlvnhk.jpg",
// "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756356089/YAYA1812_acxbl6.jpg",
// "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219753/w14_nxlk2t.jpg"
//   ],
//   family: ["https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355550/w4_wfx6or.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355554/w1_rs13bc.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355577/651A3961_et6gfi.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355546/w5_uerdzf.jpg"
//   ],
//   modeling: [],
  
//   cultural: [
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437813/5860534278016842260_p0dsze.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437846/5860866081420327416_ftfjon.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355411/DSC08617_niwfb7.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355443/w20_guubde.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355381/DSC06018_gwayox.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355389/DSC06081_shc8xf.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756219943/DSC08518-2_b4vkcs.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756355403/DSC08455_ke3gdx.jpg",
//     "https://res.cloudinary.com/dax6ac5zh/image/upload/v1756437817/5860853458511444525_vyyrhm.jpg"
//   ],
//   events: [],
// };
