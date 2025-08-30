import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#D4AF37" }}>
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-gray-300">Effective Date: August 25, 2025</p>

        <p className="text-white leading-relaxed text-base mb-6">
          Otto Images is committed to protecting your privacy while fostering industry growth and empowering our partners and employees. 
          We collect, use, and safeguard personal information responsibly to provide high-quality visual services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Information Collection</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          We may collect personal information such as name, email, phone number, billing details, and event-specific information to efficiently deliver our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Use of Information</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          Information is used to manage bookings, communicate updates, provide customer support, and enhance service quality. We prioritize your privacy while using data to improve experiences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Data Security & Sharing</h2>
        <p className="text-white leading-relaxed text-base mb-6">
          We implement strict security measures to protect your data. We do not sell your personal information and only share data with trusted service providers for operational purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Your Rights</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          You have the right to access, correct, or request deletion of your personal information and withdraw consent for its use. We are committed to transparency and ethical data handling.
        </p>
      </div>

      <Footer />
    </div>
  );
}
