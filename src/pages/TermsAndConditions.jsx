import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#D4AF37" }}>
          Terms and Conditions
        </h1>
        <p className="mb-6 text-sm text-gray-300">Effective Date: August 25, 2025</p>

        <p className="mb-6 text-white leading-relaxed text-base">
          Welcome to Otto Images. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Services Offered</h2>
        <p className="text-white leading-relaxed text-base">
          Otto Images offers modeling photography, wedding coverage, bridal showers, maternity shoots, and other visual services. 
          Our team ensures high-quality, creative, and timeless results for every project.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Booking and Payment</h2>
        <p className="text-white leading-relaxed text-base">

          A 50% non-refundable deposit is required to secure your booking. Full payments can be made via cash or bank transfer.

        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Cancellations & Rescheduling</h2>
        <p className="text-white leading-relaxed text-base">

          Cancellations made at least 14 days before the event may be eligible for a partial refund (deposit excluded). Rescheduling depends on availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Intellectual Property & Image Delivery</h2>
        <p className="text-white leading-relaxed text-base">
          All images are the intellectual property of Otto Images. Clients receive personal-use licenses; commercial use requires written consent. Edited images are delivered within 7 business days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Limitation of Liability & Governing Law</h2>
        <p className="text-white leading-relaxed text-base">
          Otto Images is not liable for indirect or consequential damages. All terms are governed by Ethiopian law.

         
        </p>
      </div>

      <Footer />
    </div>
  );
}
