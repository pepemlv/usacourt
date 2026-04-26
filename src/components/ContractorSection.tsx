import { HardHat, FileCheck, Phone, Download } from 'lucide-react';

export default function ContractorSection() {
  return (
    <section className="py-24 bg-[#0A3161]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
              <HardHat className="h-5 w-5 mr-2" />
              <span className="font-semibold">For Industry Professionals</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for Contractors and Industry Professionals
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Builders, installers, and project professionals can connect with USA Court Builder for specifications, planning support, surface guidance, and technical resources across tennis, basketball, pickleball, padel, and clay systems.
            </p>

            <p className="text-lg mb-10 opacity-80">
              Work with a team focused on practical coordination, quality construction, and long-term performance from concept through completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-[#0A3161] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
                <FileCheck className="h-5 w-5 mr-2" />
                Contractor Access
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0A3161] transition-all font-semibold text-lg flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Request Technical Info
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <FileCheck className="h-10 w-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Technical Specifications
              </h3>
              <p className="text-white/80 leading-relaxed">
                Access specifications, layout guidance, and installation standards for a range of court surfaces and sport-specific builds.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Phone className="h-10 w-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Project Support
              </h3>
              <p className="text-white/80 leading-relaxed">
                Get expert guidance throughout your project from planning through completion and maintenance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <HardHat className="h-10 w-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Professional Network
              </h3>
              <p className="text-white/80 leading-relaxed">
                Connect with a growing network of contractors and project partners focused on premium athletic court construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
