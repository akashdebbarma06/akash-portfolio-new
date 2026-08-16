'use client';

export default function StatusBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-6 bg-[#16171b] text-slate/75 border-t border-line/60 z-30 select-none text-[10px] font-mono flex items-center">
      <div className="w-full px-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center tracking-wider uppercase font-semibold text-slate/85">
          V1.0.0-STABLE // BRANCH: MAIN
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 select-none font-semibold text-slate/85">
          <div className="hover:text-ink transition-colors duration-150 cursor-pointer">
            SOURCE
          </div>
          
          <div className="flex items-center space-x-1 hover:text-ink transition-colors duration-150 cursor-pointer">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>LIVE_STATUS</span>
          </div>

          <div className="hover:text-ink transition-colors duration-150 cursor-pointer">
            PROJECT_COUNT: 3
          </div>
        </div>
      </div>
    </footer>
  );
}


