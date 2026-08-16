'use client';
import { useEffect, useState } from 'react';

function formatClock(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function StatusBar({ projectCount }: { projectCount: number }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-6 md:mt-8 md:sticky md:bottom-0 bg-[#16171b] text-slate/85 border-t border-line/60 z-20 select-none text-[10px] font-mono">
      <div className="w-full max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 tracking-wider uppercase font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-coral rounded-full" aria-hidden />
          <span>Branch: main</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <span suppressHydrationWarning>Time: {formatClock(now)}</span>
          <span>Projects: {projectCount}</span>
        </div>
      </div>
    </footer>
  );
}
