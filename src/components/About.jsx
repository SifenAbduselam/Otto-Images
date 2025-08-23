// src/pages/About.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F7F5] text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#F9F7F5]">
        <div className="container flex items-center justify-between px-6 py-3">
          <div className="text-[#C8A35F] text-2xl font-serif">Anjelo Pictures</div>

          <div className="hidden md:flex space-x-12">
            <a href="/home" className="text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">Home</a>
            <a href="/about" className="text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">About</a>
            <a href="#packages" className="text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">Packages</a>
          </div>

          <button className="bg-transparent border border-gray-800 text-gray-800 px-8 py-2 uppercase tracking-wider text-sm font-medium hover:bg-gray-800 hover:text-white transition">
            Book Now
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#F9F7F5] border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <a href="/home" className="block text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">Home</a>
              <a href="/about" className="block text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">About</a>
              <a href="#packages" className="block text-gray-800 hover:text-[#C8A35F] uppercase tracking-wider text-sm font-medium transition">Packages</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="/images/w25.png"
          alt="Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-6">
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-16 px-6 bg-[#F9F7F5] text-black text-center">
        <h2 className="text-lg text-[#C8A35F] mb-2">Your memory with us</h2>
        <h1 className="text-5xl font-bold mb-4">Anjelo Pictures</h1>
        <p className="text-gray-600">About us</p>
      </section>

      {/* Refined Wedding Photography */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REFINED WEDDING PHOTOGRAPHY</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced Anjelo Pictures photographers will guide you gently through the process, and document your special day in a professional and unimposing manner, ensuring that you are completely at ease in front of the camera. In taking the time to establish a genuine rapport with our clientele, Anjelo Pictures photographers are able to delve deeply into your story, so that your wedding images reflect the absolute uniqueness and authenticity of your romance. Our professional and friendly photographers are adept at gently teasing out your natural, photogenic selves in order to capture candid imagery that radiates warmth and tenderness. AP photographers possess an innate talent for uncovering and capturing those intimate moments that are often lost in the overwhelming excitement of the day, masterfully evoking the narrative beneath the ecstatic smiles and stolen glances. As you and your wedding party lose yourselves in the celebrations, Anjelo Pictures photography is on hand to capture those moments of pure love and joy in imagery that is both refined and oozes classical elegance. What results is not simply an assortment of images documenting your special day, but a rich visual tapestry of candid moments attentively woven together frame by frame in celebration of your unique love story.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <img
              src="https://anjelopictures.com/wp-content/uploads/2024/05/1D6A0935-1-2048x1366.jpg"
              alt="Wedding"
              className="w-full h-auto object-cover max-h-[600px]"  // ← Fixed height & no border radius
            />
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div>
            <img
              src="https://anjelopictures.com/wp-content/uploads/2024/05/438A1823-scaled.jpg"
              alt="Detail"
              className="w-full h-auto object-cover max-h-[600px]"  // ← Fixed height & no border radius
            />
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">THE FOUNDER</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anjelo Pictures is a creative collective founded by Ermias Ejigu. Established originally as Ermias Ejigu Photography, Ermias has cultivated a reputation for capturing natural opulence and effortless beauty. By illuminating the grandeur of even the simplest detail, Ermias delivers exquisitely authentic wedding images for his clients. Throughout the journey, Ermias’s craft has continued to evolve, leading to the inception of Anjelo Pictures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Anjelo Pictures is a collective of industry leaders collaborating under Ermias’s expertise to provide artful, elegant and candid wedding imagery and video. Ermias personally trains and mentors all Anjelo Pictures photographers and videographers to ensure consistency in style and aesthetic, and to guarantee the highest standard of quality and professionalism. All images are meticulously edited by Ermias personally.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-[#F9F7F5] text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Core Values</h2>
          <p className="text-center text-gray-600 mb-12">
            Guiding principles for excellence. Discover our unwavering commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#C8A35F] mb-4">Creativity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in pushing the boundaries of creativity, capturing moments that inspire and evoke emotion through innovative approaches and artistic expression.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C8A35F] mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering the highest quality photography services, striving for excellence in every aspect of our work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C8A35F] mb-4">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                We are passionate about photography and dedicated to our craft, approaching every project with enthusiasm and energy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C8A35F] mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct ourselves with honesty, transparency, and integrity in all our interactions, maintaining the trust of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#C8A35F] mb-6">Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Advancement along with establishing sister companies in different sectors and enhancing capability, obtaining resources, hiring professionals, utilizing technology, and offering resources to meet the industry's needs for high-quality services that could be performed locally.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#C8A35F] mb-6">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Stand for quality and prompt delivery as part of our mission. Build an educational institution that will assist students, nurture and support them so they can discover their potential and chase their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}