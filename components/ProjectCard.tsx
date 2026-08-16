import type { Project } from '../types/project';
export default function ProjectCard({ project }: { project: Project }) {
  // Generate a mock file path based on project ID
  const ext = project.id === 'proj-1' ? 'ts' : project.id === 'proj-2' ? 'java' : 'py';
  const fileName = project.title.toLowerCase().split(':')[0].replace(/[-_.\s]+/g, '_');
  const filePath = `${fileName}.${ext}`;

  // Check if live or in progress
  const isLive = project.id !== 'proj-1'; // Mock live for proj-2 & proj-3

  return (
    <article className="border border-line bg-[#12151c] rounded-none overflow-hidden transition-all duration-150 hover:border-white hover:-translate-y-0.5 shadow-none hover:shadow-none flex flex-col h-full font-mono text-xs select-text">
      {/* File Header Tab */}
      <div className="bg-[#181b24] px-4 py-2 border-b border-line flex items-center justify-between text-slate/70 select-none">
        <div className="flex items-center space-x-1.5 min-w-0">
          <span className="w-1.5 h-1.5 bg-coral shrink-0 rounded-none" />
          <span className="truncate text-[11px]">{filePath}</span>
        </div>
        <div className="flex items-center space-x-1.5 text-slate text-[9px] shrink-0">
          <span>&lt;</span>
          <span className="text-slate/80">1/1</span>
          <span>&gt;</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-sm font-bold text-ink leading-snug font-sans tracking-wide">
            {project.title}
          </h3>

          {/* Status Badge */}
          <div>
            {isLive ? (
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-redtag bg-redtag/10 border border-redtag/35 px-2 py-0.5 rounded-none uppercase">
                <span className="w-1 h-1 bg-redtag rounded-none animate-pulse" />
                <span>Live</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate bg-paper/30 border border-line px-2 py-0.5 rounded-none uppercase">
                <span>In Progress</span>
              </span>
            )}
          </div>

          {/* Inner description container */}
          <div className="border border-line bg-paper/30 p-3.5 rounded-none text-slate font-sans leading-relaxed text-xs">
            {project.description}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center space-x-4 pt-3 border-t border-line/40 select-none">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-slate hover:text-ink inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>GITHUB</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-slate hover:text-ink inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>DEMO</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


