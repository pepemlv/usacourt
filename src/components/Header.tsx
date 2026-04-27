import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

type HeaderProps = {
  onRequestQuote: () => void;
};

export default function Header({ onRequestQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0A3161] shadow-lg'
        : 'bg-[#0A3161]/90 backdrop-blur-sm shadow-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
       
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            
            <a href="#courts" className={`transition-colors font-medium ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
            }`}>
              Courts
            </a>
           
            <a href="#projects" className={`transition-colors font-medium ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
            }`}>
              Projects
            </a>
            <a href="#resources" className={`transition-colors font-medium ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
            }`}>
              Resources
            </a>
            <a href="#gallery" className={`transition-colors font-medium ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
            }`}>
              Gallery
            </a>
         
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className={`px-4 py-2 border rounded transition-all font-medium ${
              isScrolled
                ? 'text-white border-white hover:bg-white hover:text-[#0A3161]'
                : 'text-white border-white hover:bg-white hover:text-[#0A3161]'
            }`}>
             American Red Clay
            </button>
            <button onClick={onRequestQuote} className={`px-6 py-2 rounded transition-all font-medium ${
              isScrolled
                ? 'bg-white text-[#0A3161] hover:bg-gray-100'
                : 'bg-white text-[#0A3161] hover:bg-gray-100'
            }`}>
              Request a Quote
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button className="rounded border border-white px-2.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-white hover:text-[#0A3161] sm:px-4 sm:py-2 sm:text-sm">
              Contractor Access
            </button>
            <button onClick={onRequestQuote} className="rounded bg-white px-2.5 py-1.5 text-xs font-medium text-[#0A3161] transition-all hover:bg-gray-100 sm:px-4 sm:py-2 sm:text-sm">
              Quote
            </button>

            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${isScrolled ? 'border-white/20' : 'border-gray-200'}`}>
            <div className="flex flex-col space-y-4">
              <a href="#home" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Home
              </a>
              <a href="#courts" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Courts
              </a>
              <a href="#solutions" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Solutions
              </a>
              <a href="#projects" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Projects
              </a>
              <a href="#resources" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Resources
              </a>
              <a href="#gallery" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Gallery
              </a>
              <a href="#contact" className={`transition-colors font-medium ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#0A3161]'
              }`}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
