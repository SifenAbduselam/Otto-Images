// src/pages/BookNow.jsx
import { useRef } from "react";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function BookNow() {
  const services = [
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
    "tifrkoreta",
  ];
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    if (!data.first_name || !data.last_name || !data.phone || !data.service) {
      toast.error("Please fill required fields");
      return;
    }

    try {
      const response = await fetch(
        "https://otto-backend-k6qx.onrender.com/send-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-secret": "otto_secure_8392_kd93jsl",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Booking sent! We'll contact you soon.", {
          position: "top-center",
        });
        e.target.reset();
      } else {
        toast.error("Failed to send booking.", { position: "top-center" });
      }
    } catch {
      toast.error("Something went wrong.", { position: "top-center" });
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/25 text-white placeholder-gray-500 py-3 px-1 focus:outline-none focus:border-[#C8A35F] transition-colors duration-300";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 flex flex-col items-center px-6 pt-36 pb-20">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.35em] text-xs text-[#C8A35F] mb-4"
        >
          Otto Images
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-white text-center mb-4"
        >
          Book Now
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-400 text-center max-w-md mb-14"
        >
          Tell us about your story and we'll get back to you to confirm the
          details.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="w-full max-w-2xl space-y-8 border border-white/10 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className={inputClass}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className={inputClass}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className={inputClass}
              required
            />
          </div>

          <select
            name="service"
            required
            defaultValue=""
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled className="bg-black">
              Select Service
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-black capitalize">
                {s}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className={`${inputClass} resize-none`}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 border border-[#C8A35F] text-white uppercase tracking-[0.25em] text-sm transition-all duration-300 hover:bg-[#C8A35F] hover:text-black"
          >
            Send Request
          </motion.button>
        </motion.form>
      </div>

      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}
