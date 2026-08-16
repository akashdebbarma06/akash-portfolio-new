'use client';
import { useState, useEffect } from 'react';
import { scrollToSection } from '../lib/utils';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h) setActive(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const sections = tabs.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function go(id: string) {
    setActive(id);
    scrollToSection(id);
  }

  return (
    <header className="sticky top-0 z-30 bg-paper-dim border-b border-line">
      <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Left Logo Tag */}
        <div className="flex items-center shrink-0 select-none">
          <div className="font-mono text-[10px] font-bold text-redtag tracking-wider border border-redtag/40 bg-redtag/10 px-2 py-0.5 rounded-none uppercase">
            DEV_ENVIRONMENT
          </div>
        </div>

        {/* Center Tabs */}
        <ul className="flex h-full items-center justify-center -mb-[1px]">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <li key={t.id} className="h-full flex items-center">
                <button
                  onClick={() => go(t.id)}
                  className={`h-full px-4 text-xs font-sans transition-all duration-150 flex items-center select-none focus:outline-none cursor-pointer text-slate hover:text-ink border-b-2 rounded-none ${
                    isActive
                      ? 'border-coral text-white font-bold bg-[#1a1d27]/40'
                      : 'border-transparent hover:border-line/45'
                  }`}
                >
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Settings Icons */}
        <div className="flex items-center space-x-3 shrink-0 text-slate">
          {/* Settings icon */}
          <button className="hover:text-ink cursor-pointer focus:outline-none transition-colors duration-150" title="Settings">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          {/* Split layout icon */}
          <button className="hover:text-ink cursor-pointer focus:outline-none transition-colors duration-150" title="Split Layout">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="3" x2="12" y2="21"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}


