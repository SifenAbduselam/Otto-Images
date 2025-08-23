import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] flex flex-col">
      <div className="flex-1 px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C8A35F] mb-8">Privacy Policy</h1>
        <p className="mb-4 font-semibold">Effective Date: January 1st, 2025</p>

        <p className="text-gray-800 mb-4">
          Anjelo Pictures is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">1. Information Collection</h2>
        <p className="text-gray-800">We may collect personal information, including:</p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping addresses</li>
          <li>Event details</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">2. Use of Information</h2>
        <p className="text-gray-800">Collected information is used to:</p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Provide and manage our services</li>
          <li>Process payments</li>
          <li>Communicate with you regarding your sessions</li>
          <li>Send promotional materials (with your consent)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">3. Data Sharing</h2>
        <p className="text-gray-800">
          We do not sell or rent your personal information. We may share data with third-party service providers solely for the purpose of delivering our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">4. Data Security</h2>
        <p className="text-gray-800">
          We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">5. Cookies and Tracking</h2>
        <p className="text-gray-800">
          Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">6. Your Rights</h2>
        <p className="text-gray-800">You have the right to:</p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        <p className="text-gray-800">
          For any privacy-related inquiries, please contact us at +251 91 139 1856 or anjelopictures@gmail.com
        </p>
      </div>

      <Footer />
    </div>
  );
}
