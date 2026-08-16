export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (el) {
    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
  }
  history.replaceState(null, '', `#${id}`);
}
