import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-[#B31942] relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Bring Real Red Clay Back to the Court
        </h2>

        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Whether you are planning a private court, a club renovation, a resort experience, or a large-scale facility, USA Court Builder is ready to help you build something exceptional.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-10 py-5 bg-white text-[#B31942] rounded-lg hover:bg-gray-100 transition-all font-bold text-xl flex items-center shadow-2xl">
            <ArrowRight className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            Request a Quote
          </button>
          <a href="tel:7046261734" className="px-10 py-5 bg-transparent border-3 border-white text-white rounded-lg hover:bg-white hover:text-[#B31942] transition-all font-bold text-xl flex items-center shadow-2xl">
            <Phone className="mr-3 h-6 w-6" />
            Speak to an Expert
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-white/80 text-lg">Years Combined Experience</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80 text-lg">Authentic Red Clay</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-white/80 text-lg">Commitment to Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
