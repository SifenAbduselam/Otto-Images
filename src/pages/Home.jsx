// src/pages/Home.jsx
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Location from "../components/Location";
import Newsletter from "../components/Newsletter";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main> {/* ✅ No <Navbar /> here */}
      <Hero />
      <Stats />
      <Portfolio />
      <Location />
      <Footer />   
    </main>
  );
}