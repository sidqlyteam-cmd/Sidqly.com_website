import React, { useState } from 'react';
import { Bot, ExternalLink, CheckCircle2, ChevronUp, ChevronDown } from 'lucide-react';

const AI_PLATFORMS = [
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { id: 'claude', name: 'Claude', url: 'https://claude.ai/' },
  { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com/' },
  { id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai/' },
  { id: 'copilot', name: 'Copilot', url: 'https://copilot.microsoft.com/' },
  { id: 'grok', name: 'Grok', url: 'https://grok.com/' }
];

const PROMPT_ACTIONS = [
  "Summarize this page",
  "Explain this module",
  "Help me choose",
  "Create action plan",
  "Compare with manual workflows",
  "Questions to ask before demo"
];

const AIFooterStrip: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(PROMPT_ACTIONS[0]);
  const [showToast, setShowToast] = useState(false);

  const handleCopyAndOpen = (platformUrl: string) => {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'No description provided.';

    const prompt = `I am viewing a page on the Sidqly website.

Brand context:
Sidqly is a premium Islamic operating platform for verified giving, manual payment review, proof approval, donor-safe impact updates, protected recipient dignity, Zakat fund separation, Sadaqah/Sadqa campaigns, Qurbani/Udhiya operations, Ramadan/Ramzan meals and ration packs, charity request intake, vendor fulfillment, volunteer coordination, corporate CSR/Zakat reporting, receipts, certificates, QR/code verification, audit-ready records, and board-ready reports.

Page title:
${pageTitle}

Page URL:
${pageUrl}

Page description:
${metaDesc}

Task:
${selectedAction}

Please explain this clearly and practically. Keep recipient dignity, donor trust, manual review, and audit-ready records in mind. Also tell me what next step I should take.`;

    navigator.clipboard.writeText(prompt).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      if (typeof window !== 'undefined' && typeof (window as unknown as { gtag: (...args: unknown[]) => void }).gtag === 'function') {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'ai_prompt_copied', { action: selectedAction });
      }

      window.open(platformUrl, '_blank', 'noopener,noreferrer');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-full overflow-hidden">
        {/* Main Strip in Clean Light/White Theme */}
        <div className="bg-white/95 backdrop-blur-md text-slate-800 border-t border-slate-200 shadow-[0_-4px_25px_rgba(0,0,0,0.06)]">

          {/* Header Bar */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
          >
             <div className="flex items-center gap-3">
                <Bot className="text-sidqly-green-emerald" size={20} />
                <span className="font-bold text-sm md:text-base text-slate-900 hidden sm:inline">Explore this page with your preferred AI assistant</span>
                <span className="font-bold text-sm text-slate-900 sm:hidden">Ask AI about this page</span>
             </div>
             <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="hidden md:inline">ChatGPT, Claude, Gemini, Perplexity</span>
                {isOpen ? <ChevronDown size={16} className="text-slate-700" /> : <ChevronUp size={16} className="text-slate-700" />}
             </div>
          </button>

          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/95 border-t border-slate-200 ${isOpen ? 'max-h-96 py-6' : 'max-h-0 py-0 border-t-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <p className="text-slate-600 text-sm mb-6 max-w-3xl">
                  Copy a ready-made prompt and open your favorite AI to understand this page faster. We never send your data; this only copies a local prompt to your clipboard.
               </p>

               <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Action Selection */}
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">1. What do you want to ask?</label>
                     <div className="flex flex-wrap gap-2">
                        {PROMPT_ACTIONS.map(action => (
                           <button
                             key={action}
                             onClick={() => setSelectedAction(action)}
                             className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${selectedAction === action ? 'bg-emerald-50 border-emerald-400 text-sidqly-green-deep shadow-xs' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                           >
                             {action}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Platform Selection */}
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">2. Choose your AI & Go</label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {AI_PLATFORMS.map(platform => (
                           <button
                             key={platform.id}
                             onClick={() => handleCopyAndOpen(platform.url)}
                             className="flex items-center justify-between px-3.5 py-2.5 bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-sidqly-green-deep rounded-xl text-xs sm:text-sm font-bold text-slate-800 transition-all shadow-xs group cursor-pointer"
                           >
                              <span>{platform.name}</span>
                              <ExternalLink size={14} className="text-slate-400 group-hover:text-sidqly-green-emerald transition-colors" />
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
         <div className="bg-sidqly-green-deep text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20">
            <CheckCircle2 size={18} className="text-sidqly-green-soft" />
            <span className="text-sm font-bold">Prompt copied. Paste it into your AI assistant to continue.</span>
         </div>
      </div>

      <div className="h-12 w-full"></div>
    </>
  );
};

export default AIFooterStrip;
