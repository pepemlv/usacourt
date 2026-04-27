import { useEffect, useRef, useState } from 'react';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
};

export default function BeforeAfter({ beforeSrc, afterSrc, alt = 'Before and After' }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<number>(50); // percent
  const dragging = useRef(false);

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = (e as TouchEvent).touches ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      // prevent scrolling on touch while dragging
      try {
        if ((e as TouchEvent).cancelable) (e as TouchEvent).preventDefault();
      } catch {}
      let p = ((clientX - rect.left) / rect.width) * 100;
      p = Math.max(0, Math.min(100, p));
      setPos(p);
    }

    function onUp() {
      dragging.current = false;
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  function startDrag(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    dragging.current = true;
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = (e as React.TouchEvent).touches ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPos(p);
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none touch-none h-full w-full cursor-ew-resize"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      role="img"
      aria-label={alt}
    >
      {/* base is the AFTER image so the overlay reveals the BEFORE image on the left */}
      <img src={afterSrc} alt={`${alt} - after`} className="h-full w-full object-cover" draggable={false} onDragStart={(e)=>e.preventDefault()} />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img src={beforeSrc} alt={`${alt} - before`} className="h-full w-full object-cover" draggable={false} onDragStart={(e)=>e.preventDefault()} />
      </div>

      <div
        className="absolute top-0 h-full -translate-x-1/2"
        style={{ left: `${pos}%` }}
      >
        <div className="h-full w-[2px] bg-white/90" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0A3161] shadow-lg">
            <div className="h-1 w-5 bg-[#0A3161]" />
          </div>
        </div>
      </div>
    </div>
  );
}
