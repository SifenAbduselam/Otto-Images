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
  "tifrkoreta"
];
  const form = useRef();                                                                                                                                                                                                           
     const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const data = Object.fromEntries(
    formData.entries()
  );

  try {
    const response = await fetch("https://otto-backend-k6qx.onrender.com/send-booking", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-secret": "YOUR_SECRET_HERE"
  },
  body: JSON.stringify(data)
});

    if (response.ok) {
      toast.success(
        "Booking sent! We'll contact you soon.",
        { position: "top-center" }
      );

      e.target.reset();
    } else {
      toast.error(
        "Failed to send booking.",
        { position: "top-center" }
      );
    }

  } catch {
    toast.error(
      "Something went wrong.",
      { position: "top-center" }
    );
  }
};                                                                                            
   

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-[#FFD700] mb-8 text-center"
        >
          Book Now
        </motion.h1>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white text-gray-800 rounded-xl shadow-lg p-6 space-y-4 w-full max-w-3xl mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Service input as typeable text */}
          <select
  name="service"
  required
  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Service</option>

  {services.map((s) => (
    <option key={s} value={s}>
      {s}
    </option>
  ))}
</select>

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Send Request
          </button>
        </form>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}
