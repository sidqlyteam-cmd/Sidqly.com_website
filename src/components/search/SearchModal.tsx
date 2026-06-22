import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Box, BookOpen, FileText, HelpCircle, Shield, LayoutList, Target } from 'lucide-react';
import { performSearch } from '../../data/searchIndex';
import type { SearchResult } from '../../data/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Module': return <Box size={16} />;
    case 'Resource': return <BookOpen size={16} />;
    case 'Blog': return <FileText size={16} />;
    case 'FAQ': return <HelpCircle size={16} />;
    case 'Solution': return <Target size={16} />;
    case 'Compare': return <LayoutList size={16} />;
    case 'Trust':
    case 'Legal': return <Shield size={16} />;
    default: return <Search size={16} />;
  }
};

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setResults(performSearch(query));

      if (query.length > 2 && typeof window !== 'undefined' && typeof (window as unknown as { gtag: (...args: unknown[]) => void }).gtag === 'function') {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'site_search_used', { search_term: query });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  if (!isOpen) return null;

  const handleResultClick = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-sidqly-navy/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Site Search"
      >
        <div className="relative border-b border-gray-100 p-4">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input
            ref={inputRef}
            type="text"
            className="w-full pl-14 pr-12 py-4 bg-transparent text-xl text-sidqly-navy placeholder-gray-400 outline-none focus:ring-0"
            placeholder="Search modules, workflows, resources, and FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={onClose}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 hide-scrollbar">
          {query.trim().length > 0 && query.trim().length < 2 && (
             <div className="p-8 text-center text-gray-500">
               Please enter at least 2 characters to search.
             </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="p-12 text-center">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-lg font-bold text-sidqly-navy mb-2">No results found for "{query}"</p>
              <p className="text-gray-500">Try searching for "Zakat", "Proof", "Modules", or "Pricing".</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Results</div>
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result.url)}
                  className="w-full text-left p-4 rounded-xl hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors group border border-transparent focus:border-sidqly-green-soft flex gap-4"
                >
                   <div className="mt-1 w-8 h-8 rounded-full bg-sidqly-green-soft/20 text-sidqly-green-deep flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {getTypeIcon(result.type)}
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                         <span className="font-bold text-sidqly-navy group-hover:text-sidqly-green-emerald transition-colors">{result.title}</span>
                         <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">{result.type}</span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-1">{result.description}</p>
                   </div>
                </button>
              ))}
            </div>
          )}

          {query.trim() === '' && (
            <div className="p-6">
              <div className="px-2 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Popular Searches</div>
              <div className="flex flex-wrap gap-2">
                 {['Proof Trust Engine', 'Zakat', 'Manual Payment Review', 'Pricing', 'Compare'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors"
                    >
                      {term}
                    </button>
                 ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 border-t border-gray-100 text-center text-xs text-gray-500">
           Use <kbd className="font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600 shadow-sm mx-1">esc</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
