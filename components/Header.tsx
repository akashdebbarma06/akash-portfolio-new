'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

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
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const nextActive = visibleEntries[0].target.id;
        setActive(nextActive);
        history.replaceState(null, '', `#${nextActive}`);
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  function go(id: string) {
    setActive(id);
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={`sticky top-0 z-30 border-b border-line transition-all duration-300 ${scrolled ? 'bg-[#0E1015]/80 backdrop-blur-md' : 'bg-[#151821]'}`}>
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Left Logo Tag */}
        <div className="flex items-center shrink-0 select-none">
          <div className="font-mono text-[10px] font-bold text-redtag tracking-wider border border-redtag/40 bg-redtag/10 px-2 py-0.5 rounded-none uppercase">
            DEV_ENVIRONMENT
          </div>
        </div>

        {/* Center Tabs */}
        <ul className="hidden sm:flex h-full items-center justify-center -mb-[1px]">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <li key={t.id} className="h-full flex items-center">
                <button
                  onClick={() => go(t.id)}
                  className={`h-full px-4 text-xs font-sans transition-all duration-150 flex items-center gap-1.5 select-none cursor-pointer text-slate hover:text-ink border-b-2 rounded-none focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2 ${
                    isActive
                      ? 'border-coral text-white font-bold bg-[#1a1d27]/40'
                      : 'border-transparent hover:border-line/45'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive ? <span className="w-1.5 h-1.5 rounded-full bg-coral" aria-hidden /> : null}
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Settings Icons */}
        <div className="flex items-center space-x-3 shrink-0 text-slate">
          <button
            ref={menuButtonRef}
            type="button"
            className="sm:hidden min-h-11 min-w-11 inline-flex items-center justify-center hover:text-ink cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2"
            title="Toggle navigation menu"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          {/* Settings icon */}
          <button className="hidden sm:block hover:text-ink cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2" title="Settings">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          {/* Split layout icon */}
          <button className="hidden sm:block hover:text-ink cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2" title="Split Layout">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="3" x2="12" y2="21"></line>
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation-menu"
          ref={mobileMenuRef}
          className="sm:hidden border-t border-line bg-paper-dim px-4 py-3"
        >
          <ul className="space-y-2">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => go(t.id)}
                    className={`w-full min-h-11 px-3 py-2 text-left text-xs font-sans flex items-center gap-2 border rounded-none transition-colors ${
                      isActive
                        ? 'border-coral text-ink bg-[#1a1d27]/50 font-bold'
                        : 'border-line text-slate hover:text-ink hover:border-slate/60'
                    } focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive ? <span className="w-1.5 h-1.5 rounded-full bg-coral" aria-hidden /> : null}
                    <span>{t.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
