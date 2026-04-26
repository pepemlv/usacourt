import { Heart, TrendingUp, Palette, History, Shield, Trophy } from 'lucide-react';

export default function WhyRedClay() {
  const benefits = [
    {
      icon: Heart,
      title: 'Softer on the Body',
      description: 'Reduces joint stress and allows for longer, more comfortable play sessions'
    },
    {
      icon: TrendingUp,
      title: 'Longer Rallies, More Strategy',
      description: 'The surface slows the ball, creating tactical and engaging matches'
    },
    {
      icon: Palette,
      title: 'Elegant and Iconic Appearance',
      description: 'The distinctive red clay creates a stunning visual aesthetic'
    },
    {
      icon: History,
      title: 'Rich History and Emotional Connection',
      description: 'Play on the same surface as generations of champions'
    },
    {
      icon: Trophy,
      title: 'Classic European-Style Play',
      description: 'Experience the authentic game played at Roland-Garros'
    },
    {
      icon: Shield,
      title: 'True Alternative for Authenticity',
      description: 'A genuine choice for clubs and players seeking the real experience'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-[#0A3161]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Real Red Clay Matters
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Red clay tennis is more than just a surface — it's an experience that transforms the way the game is played and enjoyed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 border-2 border-white/20 hover:border-white hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#B31942] rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#0A3161]">
            Red Clay vs. Synthetic Surfaces
          </h3>
          <p className="text-xl mb-8 text-gray-700">
            Discover why authentic red clay provides an unmatched playing experience that synthetic alternatives simply cannot replicate.
          </p>
          <button className="px-8 py-4 bg-[#B31942] text-white rounded-lg hover:bg-[#8B1538] transition-colors font-semibold text-lg">
            Compare Court Surfaces
          </button>
        </div>
      </div>
    </section>
  );
}
