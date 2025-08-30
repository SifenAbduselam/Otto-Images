import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<CategoryPage />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
