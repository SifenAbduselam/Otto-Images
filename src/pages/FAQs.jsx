import Footer from "../components/Footer";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#D4AF37" }}>
          FAQs
        </h1>

        {/* FAQ Items */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               What types of photography services do you offer?
            </h2>
            <p className="text-white leading-relaxed">
              We specialize in photography and videography, including weddings, portraits, and commercial photography. 
              Please visit our Gallery page to see more.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
                 How do I book a session?
            </h2>
            <p className="text-white leading-relaxed">
              You can book a session by contacting us through our Contact page, 
              calling <span style={{ color: "#D4AF37" }}>+251 91 139 1856</span>, 
              or filling out the form on the Book Now page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               What is your pricing structure?
            </h2>
            <p className="text-white leading-relaxed">
              Our pricing varies based on the type and duration of the session.
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
              Absolutely. We require at least 48 hours’ notice for rescheduling.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               When will I receive my photos?
            </h2>
            <p className="text-white leading-relaxed">
              Edited images are typically delivered within 7 business days after the session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               Do you provide raw images?
            </h2>
            <p className="text-white leading-relaxed">
              We provide high-resolution edited images. Raw files are not included unless previously agreed upon.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               Do you travel for shoots?
            </h2>
            <p className="text-white leading-relaxed">
              Yes, we are available for travel. Additional fees may apply depending on the location.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#D4AF37" }}>
               How should I prepare for my session?
            </h2>
            <p className="text-white leading-relaxed">
              We recommend wearing comfortable clothing and discussing any specific ideas or themes with us beforehand.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
