import BeforeAfter from './BeforeAfter';

const galleryItems = [
  {
    title: 'Championship Detail',
    description: 'Close-up detail of premium finishing work, clean lines, and surface quality across our court installations.',
    type: 'video',
    src: '/pictures/redclay.mp4'
  },
  {
    title: 'Surface In Motion',
    description: 'A closer look at the texture, tone, and movement that bring each court surface to life.',
    type: 'image',
    src: '/pictures/galery1.png'
  },
  {
    title: 'Built For Play',
    description: 'Every project is designed to look sharp, perform reliably, and hold up to everyday play and training.',
    type: 'image',
     src: '/pictures/galery4.png'
  },
  {
    title: 'Crafted Finish',
    description: 'Precision grading and a consistent finish create a polished look across the full court.',
    type: 'image',
     src: '/pictures/galery5.png'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-gradient-to-br from-[#0A3161] via-[#18456F] to-[#8B3F22] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F3D3C2]">
            Gallery
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            See Our Work Up Close
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
           Explore the craftsmanship behind our courts. This gallery highlights installation details, materials, and finishing work across the surfaces we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                {item.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : item.title === 'Surface In Motion' ? (
                  <div className="h-full w-full">
                    <BeforeAfter beforeSrc="/pictures/galery4.png" afterSrc="/pictures/galery5.png" alt="Surface before and after" />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
