import { ArrowRight } from 'lucide-react';

const courtTypes = [
  {
    title: 'American RedClay',
    subtitle: 'Tennis Courts',
    description:
      'Experience the authentic beauty and performance of genuine red clay courts. The surface that defines championship tennis.',
    features: [
      'Authentic red clay surface',
      'Superior ball control',
      'Reduced joint impact',
      'Championship-quality play'
    ],
    image: '/pictures/redconst1.png',
    accent: '#B31942'
  },
  {
    title: 'Hard Court',
    subtitle: 'Tennis Courts',
    description:
      'Professional-grade hard courts with Pro Cushion technology, crack repair, and premium acrylic coatings.',
    features: [
      'Pro Cushion system',
      'Expert crack repair',
      'Premium acrylic coatings',
      'Low maintenance'
    ],
    image: '/pictures/hardcore.png',
    accent: '#2563eb'
  },
  {
    title: 'Pickleball Courts',
    subtitle: 'Multiple Surface Options',
    description:
      'Custom pickleball courts available in American RedClay, Hard Court, or Pro Cushion surfaces.',
    features: [
      'American RedClay option',
      'Hard court surfaces',
      'Pro Cushion technology',
      'Regulation dimensions'
    ],
    image: '/pictures/pickleball.png',
    accent: '#059669'
  },
  {
    title: 'Padel Courts',
    subtitle: 'Modern Club Facilities',
    description:
      'Custom padel courts designed for clubs, resorts, and private facilities with durable construction and a premium finish.',
    features: [
      'Padel court planning',
      'Premium enclosure systems',
      'Durable play surfaces',
      'Club-ready layouts'
    ],
    image: '/pictures/padel.png',
    accent: '#7c3aed'
  }
];

export default function ExploreOurCourts() {
  return (
    <section
      id="explore-courts"
      className="bg-[#0A3161] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Explore Our Courts
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-white/80">
            From authentic red clay to hard courts, pickleball, and padel
            facilities, we build courts that exceed expectations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courtTypes.map((court, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={court.image}
                  alt={court.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="mb-1 text-sm font-semibold text-white/90">
                    {court.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {court.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-6 leading-relaxed text-gray-600">
                  {court.description}
                </p>

                <ul className="mb-6 space-y-3">
                  {court.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="mr-2 h-6 w-6 flex-shrink-0 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  style={{ backgroundColor: court.accent }}
                  className="group/btn flex w-full items-center justify-center rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-white/80">
            Not sure which surface is right for you? Let our experts guide you.
          </p>
          <button className="rounded-lg bg-[#B31942] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#8B1538]">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
