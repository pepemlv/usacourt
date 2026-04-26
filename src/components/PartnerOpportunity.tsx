import { Handshake, TrendingUp, Globe, Award } from 'lucide-react';

export default function PartnerOpportunity() {

  const opportunities = [
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: 'Be part of the red clay renaissance in American tennis'
    },
    {
      icon: Globe,
      title: 'National Reach',
      description: 'Access to clubs, resorts, and facilities coast to coast'
    },
    {
      icon: Award,
      title: 'Premium Positioning',
      description: 'Lead the category in quality, heritage, and innovation'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnership',
      description: 'Collaborative approach to building excellence together'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              A Strong Opportunity for Manufacturing Partners
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              USA Court Builder is building a new American standard for authentic red clay courts. We are seeking contractor in the court business.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              This partnership opportunity is about more than materials, it is about leading a category with heritage, beauty, and long-term demand.
            </p>

            <div className="flex flex-col gap-5">
              <button className="w-fit px-8 py-4 bg-[#B31942] text-white rounded-lg hover:bg-[#8B1538] transition-colors font-semibold text-lg">
                Partner With Us
              </button>

             
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-[#F5F1ED] p-6 rounded-xl border-2 border-gray-200 hover:border-[#B31942] transition-all"
              >
                <div className="w-12 h-12 bg-[#0A3161] rounded-lg flex items-center justify-center mb-4">
                  <opportunity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
