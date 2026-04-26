import { BookOpen, Wrench, LayoutGrid as Layout, Building, CheckCircle, FileText } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Why Red Clay Courts Matter',
      description: 'Discover the history, benefits, and unique characteristics of authentic red clay tennis surfaces',
      category: 'Guide'
    },
    {
      icon: Wrench,
      title: 'Red Clay Maintenance Basics',
      description: 'Essential care and maintenance practices to keep your red clay court in championship condition',
      category: 'Maintenance'
    },
    {
      icon: Layout,
      title: 'Court Planning and Design Guide',
      description: 'Comprehensive guide to designing and planning your red clay tennis court project',
      category: 'Planning'
    },
    {
      icon: Building,
      title: 'Benefits for Clubs and Resorts',
      description: 'How red clay courts can elevate your facility and attract discerning players',
      category: 'Business'
    },
    {
      icon: CheckCircle,
      title: 'Choosing the Right Surface',
      description: 'Compare court surfaces and understand why red clay might be the perfect choice',
      category: 'Guide'
    },
    {
      icon: FileText,
      title: 'Red Clay Court Specifications',
      description: 'Technical specifications and requirements for professional red clay court construction',
      category: 'Technical'
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Insights, Guides & Industry Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert knowledge and practical guidance for red clay court planning, construction, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#B31942] transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#B31942] rounded-lg flex items-center justify-center group-hover:bg-[#0A3161] transition-colors">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-[#B31942] border border-[#B31942]">
                  {resource.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B31942] transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {resource.description}
              </p>

              <button className="text-[#B31942] font-semibold group-hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
