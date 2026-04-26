import { Shield, Flag, Zap, Award, Wrench, Star } from 'lucide-react';

export default function TrustIcons() {
  const values = [
    {
      icon: Shield,
      title: 'Authentic Red Clay Experience',
      description: 'Genuine red clay surfaces that honor tradition'
    },
    {
      icon: Flag,
      title: 'American Vision',
      description: 'Bringing European heritage to American courts'
    },
    {
      icon: Zap,
      title: 'Built for Performance',
      description: 'Engineered for optimal play and durability'
    },
    {
      icon: Award,
      title: 'Crafted with Heritage',
      description: 'Time-tested techniques meet modern standards'
    },
    {
      icon: Wrench,
      title: 'Expert Court Solutions',
      description: 'Comprehensive support from design to maintenance'
    },
    {
      icon: Star,
      title: 'Commitment to Quality',
      description: 'Excellence in every detail, every project'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#B31942] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#0A3161] transition-colors">
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
