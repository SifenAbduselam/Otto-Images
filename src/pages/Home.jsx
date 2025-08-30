// src/pages/Home.jsx
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black"> {/* ✅ No <Navbar /> here */}
      <Hero />
      <Stats />
      <Portfolio />
      
      <Footer />   
    </main>
  );
}