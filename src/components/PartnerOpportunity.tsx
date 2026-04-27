import React, { useEffect, useRef, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Props = {
  beforeSrc?: string;
  afterSrc?: string;
  alt?: string;
};

export default function PartnerOpportunity({
  beforeSrc = '/pictures/hardcore.png',
  afterSrc = '/pictures/usahero1.jpg',
  alt = 'Before and after',
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState({
    before: beforeSrc,
    after: afterSrc,
  });

  useEffect(() => {
    const loadWebsiteImages = async () => {
      const settingsRef = doc(db, 'websiteSettings', 'partnerOpportunity');
      const settingsSnap = await getDoc(settingsRef);

      if (!settingsSnap.exists()) return;

      const data = settingsSnap.data();
      setImages({
        before: typeof data.beforeImageUrl === 'string' ? data.beforeImageUrl : beforeSrc,
        after: typeof data.afterImageUrl === 'string' ? data.afterImageUrl : afterSrc,
      });
    };

    loadWebsiteImages();
  }, [beforeSrc, afterSrc]);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));

    setPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-5xl">
          Explore our Work 
        </h2>
              <div className="mb-1 text-center">
    
          <p className="mx-auto max-w-3xl text-xl text-gray-700">
            From authentic red clay to hard courts, pickleball, and padel
            facilities, we build courts that exceed expectations.
          </p>
        </div>
        <p className="mb-6 text-center text-sm  tracking-wide text-red-600 md:text-base">
          Move the mouse left to right to see the evolution
        </p>

        <div
          ref={containerRef}
          role="slider"
          aria-label="Before and after image comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative h-[420px] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-lg md:h-[560px]"
        >
          {/* AFTER image (background) */}
          <img src={images.after} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

          {/* BEFORE image (overlay) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img src={images.before} alt={alt} className="h-full w-screen max-w-none object-cover" />
            <div className="pointer-events-none absolute left-4 top-4 rounded bg-black/70 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white md:left-6 md:top-6">
              Before
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 overflow-hidden" style={{ left: `${position}%` }}>
            <div className="absolute right-4 top-4 rounded bg-black/70 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white md:right-6 md:top-6">
              After
            </div>
          </div>

          {/* Slider line */}
          <div className="absolute top-0 h-full w-[3px] bg-white shadow-lg" style={{ left: `${position}%`, transform: 'translateX(-50%)' }} />

          {/* Handle (circle) */}
          <div
            className="absolute top-1/2 h-11 w-11 rounded-full border-2 border-white bg-white/95 shadow-lg"
            style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
          >
            <span className="absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1.5 -translate-y-1/2 rounded-full bg-gray-700" />
            <span className="absolute left-1/2 top-1/2 h-4 w-[2px] translate-x-1 -translate-y-1/2 rounded-full bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
