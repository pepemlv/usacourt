import { Home, Hotel, Trophy, Users } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = [
    {
      icon: Home,
      title: 'Private Estate Court',
      description: 'Exclusive residential red clay tennis court designed for discerning homeowners seeking championship-level play',
      features: ['Custom design', 'Premium materials', 'Expert installation']
    },
    {
      icon: Hotel,
      title: 'Luxury Resort Red Clay Experience',
      description: 'Transform your resort into a destination with authentic European-style red clay tennis facilities',
      features: ['Multiple courts', 'Guest amenities', 'Tournament ready']
    },
    {
      icon: Trophy,
      title: 'Club-Level Competition Courts',
      description: 'Professional-grade red clay courts built to host tournaments and elevate member experiences',
      features: ['Competition standards', 'Spectator areas', 'Premium finish']
    },
    {
      icon: Users,
      title: 'Training & Development Facilities',
      description: 'Purpose-built red clay courts for academies, schools, and training programs',
      features: ['Durability focused', 'Multi-court layouts', 'Practice amenities']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Designed for Clubs, Communities, and Champions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project represents our commitment to bringing authentic red clay excellence to American tennis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-[#B31942] rounded-xl flex items-center justify-center mb-6">
                  <project.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#B31942] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 border-2 border-[#B31942] text-[#B31942] rounded-lg hover:bg-[#B31942] hover:text-white transition-all font-semibold">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-[#0A3161] text-white rounded-lg hover:bg-[#0A3161]/90 transition-colors font-semibold text-lg">
            View Project Vision
          </button>
        </div>
      </div>
    </section>
  );
}
