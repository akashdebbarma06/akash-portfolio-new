'use client';

export default function Skills() {
  const groups = [
    {
      title: 'LANGUAGES',
      items: ['TypeScript', 'Python', 'Go', 'SQL', 'C++'],
    },
    {
      title: 'FRAMEWORKS',
      items: ['React / Next.js', 'FastAPI', 'PyTorch', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'TOOLS & DEVOPS',
      items: ['Docker', 'Git', 'AWS', 'Linux', 'Redis', 'Pinecone'],
    },
  ];

  return (
    <section id="skills" className="mt-2 scroll-mt-14">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink font-mono select-none">
        <span className="text-coral font-bold">#</span>
        <span>Skills_Matrix</span>
      </h2>

      {/* Grid of 3 categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="border border-line bg-[#12151c] rounded-none p-8 flex flex-col justify-start space-y-4"
          >
            {/* Category Header */}
            <div className="text-[10px] font-bold text-slate/75 uppercase tracking-wider border-b border-line/60 pb-2 select-none">
              {g.title}
            </div>

            {/* Badges container */}
            <div className="flex flex-wrap gap-2 pt-1.5">
              {g.items.map((item) => (
                <div
                  key={item}
                  className="bg-paper border border-line text-ink text-xs font-mono px-3.5 py-1.5 rounded-none hover:border-coral/40 transition-colors duration-150 select-text"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
