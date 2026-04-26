import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-[#B31942] mb-4">
              USA COURT BUILDER
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium court design and construction for red clay, green clay, hard court tennis, basketball, pickleball, and padel projects across the United States.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@usacourtbuilder.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                info@usacourtbuilder.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                (123) 456-7890
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>United States</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courts" className="text-gray-400 hover:text-white transition-colors">
                  Tennis Courts
                </a>
              </li>
              <li>
                <a href="#courts" className="text-gray-400 hover:text-white transition-colors">
                  Multi-Sport Courts
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Facility Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contractor Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="text-gray-400 hover:text-white transition-colors">
                  Project Guides
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-white transition-colors">
                  Planning Help
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-white transition-colors">
                  Surface Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Partner Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} USA Court Builder. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm italic">
              Built with Heritage. Designed for Performance. USA Court Builder.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
