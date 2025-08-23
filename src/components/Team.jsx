// src/components/Team.jsx
export default function Team() {
  return (
    <section className="py-16 px-6">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-16 font-heading">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src="/images/ermias.jpg"
              alt="Ermias Ejigu"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading">Ermias Ejigu</h3>
            <p className="text-[#C8A35F] mb-2">Drone Operator and Video Editor</p>
            <p className="text-gray-300">6 Years with Anjelo Pictures</p>
            <p className="text-sm text-gray-400 mt-2">ermias.e@anjelopictures.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}