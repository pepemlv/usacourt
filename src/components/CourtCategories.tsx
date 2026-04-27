import { ArrowRight, Phone } from 'lucide-react';

export default function CourtCategories() {
  const categories = [
    {
      title: 'Tennis Court Surfaces',
      description:
        'Red clay, green clay, and hard court tennis solutions built for performance, comfort, and long-term durability.',
      image: '/pictures/redconst1.png'
    },
    {
      title: 'Construction & Installation Solutions',
      description:
        'Complete support for new courts, resurfacing, upgrades, and custom project planning.',
      image: '/pictures/redconst3.png'
    },
    {
      title: 'Multi-Sport Court Projects',
      description:
        'From private estates to large facilities, we build basketball, pickleball, padel, and tennis courts tailored to your space.',
      image: '/pictures/galery5.png'
    },
    {
      title: 'Maintenance Guidance & Support',
      description:
        'Resources, tools, and expert direction to help protect the beauty and performance of your investment.',
      image: '/pictures/redconst2.png'
    }
  ];

  return (
    <section id="courts" className="py-24 bg-[#0A3161]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">
            Courts Built for More Than One Surface
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-white/80 md:text-lg">
            USA Court Builders creates custom court systems for red clay, green clay, hard court tennis, basketball, pickleball, and padel. From private homes to elite clubs and championship venues, we build spaces that look exceptional and play beautifully.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex items-center rounded-lg bg-[#B31942] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#8B1538]">
              <ArrowRight className="mr-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              Request a Quote
            </button>
            <button className="flex items-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-white hover:text-[#0A3161]">
              <Phone className="mr-3 h-5 w-5" />
              Speak to an Expert
            </button>
          </div>

       
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-96 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                <h3 className="w-fit rounded-lg bg-white/10 px-3 py-2 text-lg font-bold leading-snug backdrop-blur-sm md:text-xl">
                  {category.title}
                </h3>
                <p className="rounded-lg bg-white/20 px-3 py-2 text-xs leading-relaxed backdrop-blur-sm md:text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
