import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#D4AF37" }}>
          Terms and Conditions
        </h1>
        <p className="mb-6 text-sm text-gray-300">Effective Date: August 25, 2025</p>

        {/* Intro */}
        <p className="mb-6 text-white leading-relaxed text-base">
          Welcome to <span className="font-semibold" style={{ color: "#D4AF37" }}>Otto Images</span>. 
          By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        {/* Sections */}
        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Services Offered</h2>
        <p className="text-white leading-relaxed text-base">
          Otto Images provides professional photography services, including but not limited to event photography, portrait sessions, and commercial shoots. 
          Detailed descriptions of services are available on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Booking and Payment</h2>
        <p className="text-white leading-relaxed text-base">
          A non-refundable deposit of 50% is required to secure your booking. Payments can be made via cash or bank deposit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Cancellations & Rescheduling</h2>
        <p className="text-white leading-relaxed text-base">
          Cancellations made at least 14 days before the event may qualify for a refund (excluding deposit). 
          Rescheduling is subject to availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Intellectual Property</h2>
        <p className="text-white leading-relaxed text-base">
          All photographs taken by Otto Images are the intellectual property of Otto Images. Clients receive a license for personal use of the images. 
          Commercial use requires prior written consent and may be subject to additional fees.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Image Delivery</h2>
        <p className="text-white leading-relaxed text-base">
          Edited images will be delivered within 7 business days. Raw files are not provided unless previously agreed upon.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Limitation of Liability</h2>
        <p className="text-white leading-relaxed text-base">
          Otto Images is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Governing Law</h2>
        <p className="text-white leading-relaxed text-base">
          These terms are governed by the laws of the Federal Democratic Republic of Ethiopia, without regard to its conflict of law principles.
        </p>
      </div>

      <Footer />
    </div>
  );
}
