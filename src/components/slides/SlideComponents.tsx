import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const GlassCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl glass p-6", className)}>
    {children}
  </div>
);

export const SlideWrapper = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("flex flex-col h-full px-6 md:px-16 py-10 md:py-14 relative overflow-y-auto", className)}>
    {children}
  </div>
);

export const SlideTitle = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="mb-6 md:mb-8 flex-shrink-0">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{children}</h2>
    {subtitle && <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>}
  </div>
);

export const TimelineBadge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex px-2.5 py-0.5 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20">
    {children}
  </span>
);
