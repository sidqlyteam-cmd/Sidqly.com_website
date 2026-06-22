import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Target } from 'lucide-react';
import { brand } from '../config/brand';

interface Section {
  id: string;
  label: string;
}

interface ReadingProgressSidebarProps {
  sections: Section[];
}

const ReadingProgressSidebar: React.FC<ReadingProgressSidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(scrollPercentage);

      // Determine active section
      const scrollPosition = window.scrollY + 150; // Offset for fixed headers

      let currentActive = sections[0]?.id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentActive = section.id;
        }
      }
      setActiveSection(currentActive || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for fixed nav
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:block sticky top-24 w-64 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar">

      {/* Overall Progress */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
           <span>Reading Progress</span>
           <span className="text-sidqly-green-deep">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
           <div
             className="bg-sidqly-green-emerald h-full transition-all duration-150 ease-out"
             style={{ width: `${progress}%` }}
           ></div>
        </div>
      </div>

      {/* Sections List */}
      <nav className="space-y-1 mb-8 relative">
        <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gray-100 z-0"></div>
        {sections.map((section) => {
           const isActive = activeSection === section.id;
           return (
             <button
               key={section.id}
               onClick={() => scrollToSection(section.id)}
               className={`w-full text-left pl-6 py-2 text-sm font-medium transition-colors relative z-10 block ${isActive ? 'text-sidqly-green-deep font-bold' : 'text-gray-500 hover:text-gray-900'}`}
             >
               <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-sidqly-green-emerald border-4 border-sidqly-green-soft' : 'bg-gray-200 hover:bg-gray-300'}`}></div>
               {section.label}
             </button>
           );
        })}
      </nav>

      {/* Mini CTA */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
         <Target className="text-sidqly-green-emerald mb-2" size={20} />
         <h4 className="font-bold text-sm text-sidqly-navy mb-1">Ready to upgrade?</h4>
         <p className="text-xs text-gray-600 mb-3">See how this works for your organization.</p>
         <a href={brand.links.calendly} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-sidqly-green-deep text-white text-xs font-bold py-2 rounded-lg hover:bg-sidqly-green-emerald transition-colors flex items-center justify-center gap-1">
            Book Demo <ArrowRight size={12} />
         </a>
      </div>

      {/* AI Helper Context */}
      <div className="text-xs text-gray-500 flex items-start gap-2 pt-4 border-t border-gray-100">
         <Bot size={14} className="shrink-0 mt-0.5 text-gray-400" />
         <span>Use the AI assistant at the bottom of the page to summarize this content.</span>
      </div>

    </div>
  );
};

export default ReadingProgressSidebar;
