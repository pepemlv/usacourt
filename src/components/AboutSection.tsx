import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Red Clay, Reimagined for America
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            USA Court Builder exists to restore the beauty, history, and unmatched playability of true red clay courts. We believe players, clubs, resorts, and communities in the United States deserve a real alternative — one rooted in tradition, quality, and passion for the game.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Our mission is simple: bring back the court surface that inspires movement, strategy, endurance, and emotion.
          </p>

          <button className="group inline-flex items-center px-8 py-4 bg-[#0A3161] text-white rounded-lg hover:bg-[#0A3161]/90 transition-all font-semibold text-lg">
            Learn About Our Vision
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
