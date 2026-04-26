import Header from './components/Header';
import Hero from './components/Hero';
import TrustIcons from './components/TrustIcons';
import AboutSection from './components/AboutSection';
import CourtCategories from './components/CourtCategories';
import ExploreOurCourts from './components/ExploreOurCourts';
import GallerySection from './components/GallerySection';
import WhyRedClay from './components/WhyRedClay';
import FeaturedProjects from './components/FeaturedProjects';
import PartnerOpportunity from './components/PartnerOpportunity';
import Leadership from './components/Leadership';
import Resources from './components/Resources';
import ContractorSection from './components/ContractorSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourtCategories />
      
      <ExploreOurCourts />
      <Leadership />
      <GallerySection />
       <Footer />
    </div>
  );
}

export default App;
