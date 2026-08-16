'use client';
import { useState } from 'react';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const contactData = [
    { key: 'email', value: 'akashdebbarma.cse@gmail.com', href: 'mailto:akashdebbarma.cse@gmail.com' },
    { key: 'phone', value: '+91 6009636806', href: 'tel:+916009636806' },
    { key: 'github', value: 'akashdebbarma06', href: 'https://github.com/akashdebbarma06' },
    { key: 'linkedin', value: 'akashdebbarma06', href: 'https://www.linkedin.com/in/akashdebbarma06/' },
    { key: 'leetcode', value: 'akashdebbarma06', href: 'https://leetcode.com/u/akashdebbarma06/' },
    { key: 'instagram', value: 'akashiislive01', href: 'https://www.instagram.com/akashiislive01' },
  ];

  function copyToClipboard(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  return (
    <section id="contact" className="mt-2 mb-12 scroll-mt-14">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink font-mono select-none">
        <span className="text-coral font-bold">#</span>
        <span>contact.yaml</span>
      </h2>

      <div className="border border-line bg-[#12151c] rounded-none overflow-hidden shadow-none font-mono text-xs md:text-sm">
        {/* YAML File Header */}
        <div className="bg-[#181b24] px-4 py-2 border-b border-line flex items-center justify-between text-slate/70 select-none">
          <span>workspace/contact.yaml</span>
          <span className="text-[10px]">yaml • 10 lines</span>
        </div>

        {/* YAML Content Panel */}
        <div className="p-6 md:p-8 space-y-4 select-text">
          <div className="text-slate/40 italic mb-2">
            # Feel free to copy these fields or open links directly.
          </div>

          <div className="leading-relaxed">
            <span className="text-redtag font-semibold">contact</span>:
          </div>

          <div className="pl-4 space-y-2.5">
            {contactData.map((item) => (
              <div key={item.key} className="flex flex-wrap items-center group">
                <span className="text-coral font-semibold mr-1.5">{item.key}</span>:
                
                {/* Clickable Value */}
                <a
                  href={item.href}
                  target={item.key !== 'email' ? '_blank' : undefined}
                  rel={item.key !== 'email' ? 'noreferrer' : undefined}
                  className="text-ink hover:underline ml-1.5 truncate max-w-[250px] sm:max-w-md font-sans text-xs"
                >
                  "{item.value}"
                </a>

                {/* Utility Buttons */}
                <div className="inline-flex items-center ml-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-150 space-x-2">
                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(item.value, item.key)}
                    className="p-1 rounded-none hover:bg-paper border border-transparent hover:border-line/45 text-slate hover:text-ink cursor-pointer focus:outline-none"
                    title="Copy value"
                  >
                    {copiedKey === item.key ? (
                      <span className="text-[10px] text-emerald-400 font-sans font-semibold px-1">Copied!</span>
                    ) : (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
