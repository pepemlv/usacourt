export default function Leadership() {
  const partners = [
    { name: 'USA Court Builder', image: '/pictures/courtbuilder.jfif' },
    { name: 'American Sports ASBA Builder', image: '/pictures/americansba.png' },
    { name: 'Wilkison Partners', image: '/pictures/WilkisonLogo.jpg' }
  ];
  const leaders = [
    {
      name: 'Tim Wilkison',
      role: 'Strategic Partner',
      image: '/pictures/tim.png',
      bio: ''
    },
    {
      name: 'Mike Boston',
      role: 'Strategic Partner',
      image: '/pictures/mikeboston.png',
      bio: ''
    },
    {
      name: 'Kenny Simms',
      role: 'Operations Partner',
      image: '/pictures/head.png',
      bio: ''
    }
  ];

  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="mx-auto w-[92vw] md:w-[60vw] max-w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated group of builders, operators, and strategic partners focused on delivering premium court projects with care, experience, and long-term value.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="w-[calc(50%-0.5rem)] max-w-[260px] min-w-[150px] bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:w-[calc(50%-1rem)] min-[1250px]:w-[calc(25%-1.5rem)]"
            >
              <div className="bg-[#B31942] p-4 md:p-8 flex items-center justify-center">
                <div className="h-20 w-20 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-white/30 bg-white/20">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#B31942] text-sm md:text-base font-semibold mb-1">
                  {leader.role}
                </p>
                {leader.organization && (
                  <p className="text-xs md:text-sm text-gray-600 mb-3">
                    {leader.organization}
                  </p>
                )}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Trusted Partners
          </p>

          <div className="grid w-full grid-cols-3 gap-3 md:gap-6 rounded-2xl bg-white p-4 md:p-6 shadow-sm">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 md:h-32 md:w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white p-2 shadow-md">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-center text-[10px] md:text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
