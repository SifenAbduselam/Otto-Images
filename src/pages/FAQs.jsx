import Footer from "../components/Footer";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] flex flex-col">
      <div className="flex-1 px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C8A35F] mb-8">FAQs</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">1. What types of photography services do you offer?</h2>
        <p className="text-gray-800">
          We specialize in photography and videography, e.g., wedding, portrait, and commercial photography. Please visit our Gallery page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">2. How do I book a session?</h2>
        <p className="text-gray-800">
          You can book a session by contacting us through our Contact page, by calling us at +251 91 139 1856, or by filling out the form on the Book Now page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">3. What is your pricing structure?</h2>
        <p className="text-gray-800">Our pricing varies based on the type and duration of the session.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">4. Do you require a deposit?</h2>
        <p className="text-gray-800">Yes, a 50% deposit is required to secure your booking.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">5. Can I reschedule my session?</h2>
        <p className="text-gray-800">Absolutely. We require at least 48 hours’ notice for rescheduling.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">6. When will I receive my photos?</h2>
        <p className="text-gray-800">Edited images are typically delivered within 7 business days after the session.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">7. Do you provide raw images?</h2>
        <p className="text-gray-800">We provide high-resolution edited images. Raw files are not included unless previously agreed upon.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">8. Do you travel for shoots?</h2>
        <p className="text-gray-800">Yes, we are available for travel. Additional fees may apply depending on the location.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">9. How should I prepare for my session?</h2>
        <p className="text-gray-800">We recommend wearing comfortable clothing and discussing any specific ideas or themes with us beforehand.</p>
      </div>

      <Footer />
    </div>
  );
}
