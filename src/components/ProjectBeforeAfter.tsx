import { useEffect, useRef, useState } from 'react';

type Props = {
  beforeSrc?: string;
  afterSrc?: string;
  alt?: string;
};

export default function ProjectBeforeAfter({
  beforeSrc = '/pictures/galery4.png',
  afterSrc = '/pictures/galery5.png',
  alt = 'Project before and after',
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [percent, setPercent] = useState<number>(50);
  const dragging = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    function handleMove(clientX: number) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let p = ((clientX - rect.left) / rect.width) * 100;
      p = Math.max(0, Math.min(100, p));
      setPercent(p);
    }

    function onPointerMove(e: PointerEvent) {
      if (!dragging.current) return;
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => handleMove(e.clientX));
    }

    function onPointerUp() {
      dragging.current = false;
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  function startDrag(e: React.PointerEvent) {
    e.preventDefault();
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = e.clientX;
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPercent(p);
  }

  return (
    <section id="project-before-after" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Project — Before & After</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Drag the divider left/right to compare the old (left) and new (right) images.</p>
        </div>

        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="before-after relative w-full max-w-[700px] h-[400px] overflow-hidden cursor-ew-resize"
            onPointerDown={startDrag}
            role="img"
            aria-label={alt}
          >
            {/* After image as base */}
            <img src={afterSrc} alt={`${alt} — after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />

            {/* Before wrapper reveals on the left */}
            <div className="before-wrapper absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${percent}%` }}>
              <img src={beforeSrc} alt={`${alt} — before`} className="absolute top-0 left-0 h-full w-full object-cover" draggable={false} />
            </div>

            {/* Slider line */}
            <div className="slider-line absolute top-0 h-full -translate-x-1/2" style={{ left: `${percent}%` }}>
              <div className="h-full w-[4px] bg-white" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A3161] shadow-lg">
                  <div className="h-1 w-5 bg-[#0A3161]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
