'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { scrollToSection } from '../lib/utils';

const full =
  'B.Tech Computer Engineering student building toward a career in AI Engineering. Focused on Python, machine learning, and turning models into useful applications. Open to AI/ML internships.';

export default function TerminalHero() {
  const [typed, setTyped] = useState('');
  const [bootComplete, setBootComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion) {
      const immediate = setTimeout(() => {
        setTyped(full);
        setBootComplete(true);
      }, 0);
      return () => clearTimeout(immediate);
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setBootComplete(true);
      }
    }, 15);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const shouldPin = !prefersReducedMotion && !bootComplete;

  return (
    <section id="home" className={`pt-8 pb-4 ${shouldPin ? 'min-h-[110vh]' : ''}`}>
      {/* Console Window */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0.98, y: 10 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`${shouldPin ? 'sticky top-16' : ''} bg-[#12151c] text-[#e2e8f0] border border-line rounded-none shadow-none overflow-hidden font-mono text-xs md:text-sm`}
      >
        {/* Terminal Header */}
        <div className="bg-[#181b24] px-4 py-2.5 border-b border-line flex items-center justify-between select-none">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-2.5 h-2.5 bg-coral shrink-0 rounded-none" />
            <span className="text-[11px] text-slate font-medium truncate">~/akash/intro.sh Bash</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Page number chevron */}
            <div className="flex items-center space-x-1.5 text-slate text-[10px]">
              <span>&lt;</span>
              <span className="text-slate/80">1/1</span>
              <span>&gt;</span>
            </div>

            {/* Utility icons */}
            <div className="flex items-center space-x-2 text-slate/60">
              <svg className="w-3.5 h-3.5 hover:text-ink cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg className="w-3.5 h-3.5 hover:text-ink cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <svg className="w-3.5 h-3.5 hover:text-ink cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Terminal Content Box */}
        <div className="p-5 sm:p-6 md:p-10 space-y-5">
          {/* Status Tag */}
          <div className="inline-block text-[10px] font-bold text-emerald-400 tracking-wider border border-emerald-400/40 bg-emerald-400/5 px-2 py-0.5 rounded-none select-none">
            [ STATUS: ONLINE ]
          </div>

          {/* Heading Name */}
          <div className="space-y-1.5">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-coral tracking-wide font-sans break-words">
              Akash Debbarma
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-ink break-words">
              | Aspiring AI Engineer | Python &amp; ML
            </h2>
          </div>

          {/* Code description block */}
          <div className="border border-line bg-paper/30 p-4 sm:p-5 rounded-none leading-relaxed text-slate select-text break-words">
            <span>&gt; {typed}</span>
            <span
              aria-hidden
              className="text-coral ml-0.5 animate-cursor-blink motion-reduce:animate-none font-bold select-none"
            >
              _
            </span>
          </div>
        </div>
      </motion.div>

      {/* Solid & Ghost Action Buttons below */}
      <div className="mt-6 flex flex-wrap gap-4 select-none">
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-ink hover:bg-ink/80 text-paper px-5 py-2 rounded-none text-xs font-mono font-bold tracking-wide transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5 min-h-11"
        >
          <span>VIEW PROJECTS</span>
          <span>→</span>
        </button>
        <button
          onClick={() => scrollToSection('resume')}
          className="border border-line hover:border-coral hover:text-coral px-5 py-2 rounded-none text-xs font-mono font-bold tracking-wide text-ink cursor-pointer transition-all duration-150 inline-flex items-center gap-1.5 min-h-11"
        >
          <span>DOWNLOAD RESUME</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>
    </section>
  );
}
