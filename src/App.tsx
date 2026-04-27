import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourtCategories from './components/CourtCategories';
import ExploreOurCourts from './components/ExploreOurCourts';
import GallerySection from './components/GallerySection';
import PartnerOpportunity from './components/PartnerOpportunity';
import Leadership from './components/Leadership';
import QuoteModal from './components/QuoteModal';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(() => window.location.hash === '#admin');

  useEffect(() => {
    const handleHashChange = () => setIsAdminPage(window.location.hash === '#admin');

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      {isAdminPage ? (
        <AdminDashboard />
      ) : (
        <>
          <Header onRequestQuote={() => setIsQuoteOpen(true)} />
          <Hero />
          <CourtCategories onRequestQuote={() => setIsQuoteOpen(true)} />
          <PartnerOpportunity beforeSrc={'/pictures/hardcore.png'} afterSrc={'/pictures/usahero1.jpg'} />
          <ExploreOurCourts onRequestQuote={() => setIsQuoteOpen(true)} />
          <GallerySection />
          <Leadership />



          <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
