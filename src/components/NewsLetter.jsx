// src/components/TextSection.jsx
export default function TextSection() {
  return (
    <section className=" bg-[#F9F7F5] py-16 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-xl uppercase tracking-wider text-gray-800 mb-6">
        TIMELESS WEDDING PHOTOGRAPHY & VIDEOGRAPHY
      </h2>
      <p className="text-lg leading-relaxed mb-8">
        Anjelo Pictures is a creative studio founded by Ermias Ejigu, with a talent for capturing intimate moments often lost in the excitement of the day—revealing the story behind every smile and glance. As you celebrate, we preserve pure love and joy in refined imagery that exudes classic elegance.
      </p>
      <button
        href="#book"
        className="border-b border-gray-800 text-gray-800 px-8 py-2 uppercase tracking-wider text-sm font-medium hover:border-black hover:text-black transition"
      >
        Book Now
      </button>
    </section>
  );
}