import { cn } from '@/lib/utils';
import { ReactNode, useState, useEffect } from 'react';

export const GlassCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('rounded-2xl glass p-6', className)}>
    {children}
  </div>
);

export const SlideWrapper = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('flex flex-col h-full px-6 md:px-16 py-10 md:py-14 relative overflow-y-auto', className)}>
    {children}
  </div>
);

export const SlideTitle = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="mb-5 md:mb-7 flex-shrink-0">
    <h2 className="text-2xl md:text-4xl font-bold font-serif text-foreground mb-2 leading-tight">{children}</h2>
    {subtitle && <p className="text-sm md:text-base text-muted-foreground">{subtitle}</p>}
  </div>
);

export const TimelineBadge = ({ children }: { children: ReactNode }) => (
  <span
    className="inline-flex px-2.5 py-0.5 rounded-md text-xs font-mono border"
    style={{ background: 'rgba(201,168,76,0.1)', color: '#c9a84c', borderColor: 'rgba(201,168,76,0.25)' }}
  >
    {children}
  </span>
);

/** Simple count-up hook — restarts every time component mounts */
export const useCountUp = (target: number, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setVal(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return val;
};
