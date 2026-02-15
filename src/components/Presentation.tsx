import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CoverSlide, OverviewSlide, ArchitectureSlide, Stage1TimelineSlide } from './slides/IntroSlides';
import { Stage1DeliverablesSlide, Stage2Slide, AutomationsSlide, Stage3Slide } from './slides/CoreSlides';
import { RoadmapSlide, TechStackSlide, BenefitsSlide, NextStepsSlide } from './slides/ClosingSlides';

const slides = [
  CoverSlide, OverviewSlide, ArchitectureSlide, Stage1TimelineSlide,
  Stage1DeliverablesSlide, Stage2Slide, AutomationsSlide, Stage3Slide,
  RoadmapSlide, TechStackSlide, BenefitsSlide, NextStepsSlide,
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

  const Slide = slides[current];

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden select-none">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(217_100%_55%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(255_70%_65%/0.06),transparent_50%)]" />

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
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                i === current
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"
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
