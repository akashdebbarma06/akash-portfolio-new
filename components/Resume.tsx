'use client';

export default function Resume() {
  const latexSource = `\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf-8]{inputenc}
\\usepackage{geometry}
\\geometry{margin=0.75in}

\\begin{document}
\\centerline{\\Huge \\bf Akash Debbarma}
\\centerline{Krishna Kishore Nagar, Tripura, IN | +91 6009636806}
\\centerline{akashdebbarma.cse@gmail.com | GitHub: akashdebbarma06}

\\subsection*{Education}
\\textbf{B.Tech in Computer Engineering} \\hfill Aug 2024 -- Aug 2028 \\\\
Techno College of Engineering Agartala \\\\
\\textbf{Higher Secondary, Science Stream} \\hfill May 2024 \\\\
Vivekananda Shishu Niketan

\\subsection*{Technical Skills}
\\textbf{Languages \& Core:} Python, HTML, Java, Data Structures \& Algorithms, DBMS \\\\
\\textbf{Specializations:} Machine Learning, Generative AI, Data Analysis \\\\
\\textbf{Tools:} Git, GitHub

\\subsection*{Certifications}
\\textbf{ISRO} - AI/ML for Geodata Analysis \\\\
\\textbf{Deloitte Australia} - Data Analytics \& Technology Job Simulations \\\\
\\textbf{Tata} - Data Visualisation Job Simulation \\\\
\\textbf{Other} - CSS with AI
\\end{document}`;

  return (
    <section id="resume" className="mt-2 scroll-mt-14">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink font-mono select-none">
        <span className="text-coral font-bold">#</span>
        <span>resume.pdf</span>
      </h2>

      <div className="border border-line bg-[#12151c] rounded-none overflow-hidden shadow-none flex flex-col">
        {/* Overleaf IDE Header Bar */}
        <div className="bg-[#181b24] px-4 py-2.5 border-b border-line flex items-center justify-between text-xs font-mono text-slate/75 select-none">
          <div className="flex items-center space-x-3">
            <span className="text-redtag font-bold font-sans">Overleaf</span>
            <span className="w-px h-3 bg-line" />
            <span className="truncate">main.tex</span>
          </div>

          <button
            onClick={() => alert('Resume PDF link/download is currently a placeholder and will be linked dynamically.')}
            className="bg-coral hover:bg-coral/95 text-paper px-3 py-1 rounded-none text-[11px] font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-none"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>RECOMPILE / DOWNLOAD</span>
          </button>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] divide-y md:divide-y-0 md:divide-x divide-line font-mono">
          
          {/* Left Panel: LaTeX Editor */}
          <div className="p-5 md:p-6 bg-[#12151c]/65 overflow-x-auto text-[11px] md:text-xs text-slate-300 leading-relaxed whitespace-pre font-mono scrollbar-thin">
            <div className="text-slate/40 select-none pb-2 text-[10px] uppercase border-b border-line/45 mb-3.5 tracking-wider font-bold">
              LaTeX Source Code Editor
            </div>
            {latexSource}
          </div>

          {/* Right Panel: Rendered PDF Sheet Mock */}
          <div className="p-6 md:p-8 bg-[#0e1015] overflow-y-auto flex flex-col justify-between text-xs select-text">
            <div>
              <div className="text-slate/40 select-none pb-2 text-[10px] uppercase border-b border-line/45 mb-4.5 tracking-wider font-bold">
                PDF Render Document Preview
              </div>

              {/* PDF Header Section */}
              <div className="text-center space-y-1 pb-4 border-b border-line/45">
                <h3 className="text-base font-bold text-ink font-sans">Akash Debbarma</h3>
                <p className="text-[10px] text-slate font-sans">
                  Krishna Kishore Nagar, Tripura, IN • +91 6009636806<br/>
                  akashdebbarma.cse@gmail.com • github.com/akashdebbarma06
                </p>
              </div>

              {/* PDF Body Sections */}
              <div className="mt-4 space-y-4 text-[11px]">
                {/* Education */}
                <div>
                  <h4 className="font-bold text-ink uppercase tracking-wide border-b border-line/30 pb-0.5 mb-1.5 font-sans">Education</h4>
                  
                  <div className="flex justify-between font-sans">
                    <span className="font-semibold text-ink">B.Tech in Computer Engineering</span>
                    <span className="text-slate italic">Aug 2024 – Aug 2028</span>
                  </div>
                  <div className="font-sans text-slate mt-0.5 mb-2">
                    Techno College of Engineering Agartala
                  </div>

                  <div className="flex justify-between font-sans">
                    <span className="font-semibold text-ink">Higher Secondary, Science Stream</span>
                    <span className="text-slate italic">May 2024</span>
                  </div>
                  <div className="font-sans text-slate mt-0.5">
                    Vivekananda Shishu Niketan
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-bold text-ink uppercase tracking-wide border-b border-line/30 pb-0.5 mb-1.5 font-sans">Technical Skills</h4>
                  <p className="leading-relaxed font-sans text-slate">
                    <strong className="text-ink font-medium">Languages & Core:</strong> Python, HTML, Java, Data Structures & Algorithms, DBMS <br />
                    <strong className="text-ink font-medium">Specializations:</strong> Machine Learning, Generative AI, Data Analysis <br />
                    <strong className="text-ink font-medium">Tools:</strong> Git, GitHub
                  </p>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-bold text-ink uppercase tracking-wide border-b border-line/30 pb-0.5 mb-1.5 font-sans">Certifications</h4>
                  <ul className="list-disc pl-4 space-y-1 font-sans text-slate">
                    <li><strong>ISRO:</strong> AI/ML for Geodata Analysis</li>
                    <li><strong>Deloitte Australia:</strong> Data Analytics & Technology Job Simulations</li>
                    <li><strong>Tata:</strong> Data Visualisation Job Simulation</li>
                    <li><strong>Other:</strong> CSS with AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/45 text-center font-sans">
              <button
                onClick={() => alert('Resume PDF link/download is currently a placeholder and will be linked dynamically.')}
                className="text-coral font-bold hover:underline inline-flex items-center gap-1 text-xs cursor-pointer"
              >
                <span>Download full resume PDF</span>
                <span aria-hidden>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
