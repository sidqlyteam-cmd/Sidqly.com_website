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
    // 1. Generate Prompt
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

    // 2. Copy to clipboard
    navigator.clipboard.writeText(prompt).then(() => {
      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      // Track analytics if available
      if (typeof window !== 'undefined' && typeof (window as unknown as { gtag: (...args: unknown[]) => void }).gtag === 'function') {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'ai_prompt_copied', { action: selectedAction });
      }

      // 3. Open platform
      window.open(platformUrl, '_blank', 'noopener,noreferrer');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40">
        {/* Main Strip */}
        <div className="bg-sidqly-navy text-white border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">

          {/* Header Bar (Clickable) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
             <div className="flex items-center gap-3">
                <Bot className="text-sidqly-gold" size={20} />
                <span className="font-bold text-sm md:text-base hidden sm:inline">Explore this page with your preferred AI assistant</span>
                <span className="font-bold text-sm sm:hidden">Ask AI about this page</span>
             </div>
             <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                <span className="hidden md:inline">ChatGPT, Claude, Gemini & more</span>
                {isOpen ? <ChevronDown size={16} className="text-white" /> : <ChevronUp size={16} className="text-white" />}
             </div>
          </button>

          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-sidqly-navy/95 backdrop-blur-md border-t border-white/5 ${isOpen ? 'max-h-96 py-6' : 'max-h-0 py-0 border-t-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <p className="text-gray-300 text-sm mb-6 max-w-3xl">
                  Copy a ready-made prompt and open your favorite AI to understand this page faster. We never send your data; this only copies a local prompt to your clipboard.
               </p>

               <div className="grid md:grid-cols-2 gap-8 items-start">

                  {/* Action Selection */}
                  <div>
                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">1. What do you want to ask?</label>
                     <div className="flex flex-wrap gap-2">
                        {PROMPT_ACTIONS.map(action => (
                           <button
                             key={action}
                             onClick={() => setSelectedAction(action)}
                             className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${selectedAction === action ? 'bg-sidqly-gold/20 border-sidqly-gold text-sidqly-gold' : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'}`}
                           >
                             {action}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Platform Selection */}
                  <div>
                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">2. Choose your AI & Go</label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {AI_PLATFORMS.map(platform => (
                           <button
                             key={platform.id}
                             onClick={() => handleCopyAndOpen(platform.url)}
                             className="flex items-center justify-between px-4 py-2 bg-white text-sidqly-navy hover:bg-gray-100 rounded-lg text-sm font-bold transition-all group"
                           >
                              <span>{platform.name}</span>
                              <ExternalLink size={14} className="text-gray-400 group-hover:text-sidqly-green-emerald" />
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
         <div className="bg-sidqly-green-deep text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 border border-white/20">
            <CheckCircle2 size={18} className="text-sidqly-green-soft" />
            <span className="text-sm font-bold">Prompt copied. Paste it into your AI assistant to continue.</span>
         </div>
      </div>

      {/* Spacer to prevent footer strip from hiding content at the bottom of the page */}
      <div className="h-12 w-full"></div>
    </>
  );
};

export default AIFooterStrip;
