import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-[Poppins]">
      <div className="flex-1 px-6 py-20 max-w-3xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#D4AF37" }}>
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-gray-300">Effective Date: January 1st, 2025</p>

        {/* Intro */}
        <p className="text-white leading-relaxed text-base mb-6">
          Otto Images is committed to protecting your privacy. 
          This policy outlines how we collect, use, and safeguard your personal information.
        </p>

        {/* Sections */}
        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Information Collection</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          We may collect personal information, including:
        </p>
        <ul className="list-disc list-inside text-white text-base mb-6 text-left mx-auto max-w-md">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping addresses</li>
          <li>Event details</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Use of Information</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          Collected information is used to:
        </p>
        <ul className="list-disc list-inside text-white text-base mb-6 text-left mx-auto max-w-md">
          <li>Provide and manage our services</li>
          <li>Process payments</li>
          <li>Communicate with you regarding your sessions</li>
          <li>Send promotional materials (with your consent)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Data Sharing</h2>
        <p className="text-white leading-relaxed text-base mb-6">
          We do not sell or rent your personal information. We may share data with third-party service providers solely for the purpose of delivering our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Data Security</h2>
        <p className="text-white leading-relaxed text-base mb-6">
          We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Cookies and Tracking</h2>
        <p className="text-white leading-relaxed text-base mb-6">
          Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "#D4AF37" }}> Your Rights</h2>
        <p className="text-white leading-relaxed text-base mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-white text-base mb-6 text-left mx-auto max-w-md">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        {/* Contact */}
        <p className="text-white leading-relaxed text-base">
          For any privacy-related inquiries, please contact us at 
          <br />
          <span style={{ color: "#D4AF37" }}>+251 91 139 1856</span> or{" "}
          <span style={{ color: "#D4AF37" }}>ottoimages@gmail.com</span>
        </p>
      </div>

      <Footer />
    </div>
  );
}
