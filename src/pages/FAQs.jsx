import Footer from "../components/Footer";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#D4AF37" }}>
          FAQs
        </h1>

        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              What types of photography services do you offer?
            </h2>
            <p className="text-white leading-relaxed">
              We offer modeling, weddings, bridal showers, maternity shoots, events, and commercial photography. 
              Our team ensures every project is creative, high-quality, and timeless.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              How do I book a session?
            </h2>
            <p className="text-white leading-relaxed">
              Contact us through our Contact page, call <span style={{ color: "#D4AF37" }}>+251 91 139 1856</span>, 
              or fill out the Book Now form on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              What is your pricing structure?
            </h2>
            <p className="text-white leading-relaxed">
              Pricing varies depending on session type and duration. Contact us for a quote.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              Do you require a deposit?
            </h2>
            <p className="text-white leading-relaxed">
              Yes, a 50% deposit is required to secure your booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              Can I reschedule my session?
            </h2>
            <p className="text-white leading-relaxed">
              Yes, we require at least 48 hours’ notice for rescheduling.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              When will I receive my photos?
            </h2>
            <p className="text-white leading-relaxed">
              Edited images are delivered within 7 business days after the session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              Do you provide raw images?
            </h2>
            <p className="text-white leading-relaxed">
              We provide high-resolution edited images. Raw files are provided only if agreed beforehand.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              Do you travel for shoots?
            </h2>
            <p className="text-white leading-relaxed">
              Yes, travel is available. Additional fees may apply depending on location.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
              How should I prepare for my session?
            </h2>
            <p className="text-white leading-relaxed">
              Wear comfortable clothing and discuss any specific ideas or themes with us beforehand.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
