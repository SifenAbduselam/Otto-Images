import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] flex flex-col">
      <div className="flex-1 px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C8A35F] mb-8">Terms and Conditions</h1>
        <p className="mb-4 font-semibold">Effective Date: January 1st, 2025</p>

        <p className="mb-4 text-gray-800">
          Welcome to AnjeloPictures.com. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">1. Services Offered</h2>
        <p className="text-gray-800">
          Anjelo Pictures provides professional photography services, including but not limited to event photography, portrait sessions, and commercial shoots. Detailed descriptions of services are available on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">2. Booking and Payment</h2>
        <p className="text-gray-800">
          A non-refundable deposit of 50% is required to secure your booking. Payments can be made via cash or bank deposit.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">3. Cancellation and Rescheduling</h2>
        <p className="text-gray-800">
          Cancellations made within 48 hours of the scheduled session may forfeit the deposit. Rescheduling is subject to availability and must be requested at least 48 hours in advance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">4. Intellectual Property</h2>
        <p className="text-gray-800">
          All photographs taken by Anjelo Pictures are the intellectual property of Anjelo Pictures. Clients receive a license for personal use of the images. Commercial use requires prior written consent and may be subject to additional fees.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">5. Image Delivery</h2>
        <p className="text-gray-800">
          Edited images will be delivered within 7 business days. Raw files are not provided unless previously agreed upon.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">6. Limitation of Liability</h2>
        <p className="text-gray-800">
          Anjelo Pictures is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">7. Governing Law</h2>
        <p className="text-gray-800">
          These terms are governed by the laws of the Constitution of the Federal Democratic Republic of Ethiopia, without regard to its conflict of law principles.
        </p>
      </div>

      <Footer />
    </div>
  );
}
