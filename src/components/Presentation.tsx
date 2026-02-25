import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CoverSlide, ProblemSlide, CostSlide, SolutionSlide } from './slides/IntroSlides';
import { FluxoASlide, FluxoBSlide, CRMSlide, TrafficDataSlide } from './slides/CoreSlides';
import { ReactivationSlide, InvestmentSlide, NextStepsSlide } from './slides/ClosingSlides';

const slides = [
  CoverSlide,
  ProblemSlide,
  CostSlide,
  SolutionSlide,
  FluxoASlide,
  FluxoBSlide,
  CRMSlide,
  TrafficDataSlide,
  ReactivationSlide,
  InvestmentSlide,
  NextStepsSlide,
];

export const Presentation = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useCallback((dir: number) => {
    setCurrent(prev => Math.max(0, Math.min(slides.length - 1, prev + dir)));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); navigate(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); navigate(-1); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);

  // Touch / swipe support
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [navigate]);

  const Slide = slides[current];

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden select-none">
      {/* Ambient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, rgba(30,58,95,0.12) 0%, transparent 50%)',
        }}
      />

      {/* Slide content */}
      <div key={current} className="absolute inset-0 animate-fade-in">
        <Slide />
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={() => navigate(-1)}
          disabled={current === 0}
          className="p-2 rounded-full glass hover:bg-muted/50 transition disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                i === current
                  ? 'w-8 bg-primary'
                  : 'w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40'
              )}
            />
          ))}
        </div>

        <button
          onClick={() => navigate(1)}
          disabled={current === slides.length - 1}
          className="p-2 rounded-full glass hover:bg-muted/50 transition disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-5 right-6 text-xs text-muted-foreground font-mono z-50 glass rounded-full px-3 py-1.5">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};
