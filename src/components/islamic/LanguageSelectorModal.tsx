import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { LanguageCode } from '../../i18n/namazTypes';
import {
  NAMAZ_LANGUAGES_REGISTRY,
  searchNamazLanguages,
} from '../../data/namazLanguagesRegistry';
import { Search, Globe, Check, AlertCircle, X } from 'lucide-react';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguageCode: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedLanguageCode,
  onSelectLanguage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'verified' | 'rtl'>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredLanguages = useMemo(() => {
    let result = searchNamazLanguages(searchQuery);

    if (selectedCategory === 'verified') {
      result = result.filter((l) => l.verified);
    } else if (selectedCategory === 'rtl') {
      result = result.filter((l) => l.direction === 'rtl');
    }

    return result;
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-selector-title"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sidqly-green-emerald/10 text-sidqly-green-deep rounded-2xl">
              <Globe size={22} />
            </div>
            <div>
              <h2 id="language-selector-title" className="text-lg sm:text-xl font-bold text-sidqly-navy dark:text-white">
                Select Translation Language
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                140+ languages supported with verified human translations and dynamic packs.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close language selector"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-gray-50/80 dark:bg-gray-800/40 border-b border-gray-100 dark:border-gray-800 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by language, native name, or region (e.g., Turkish, Türkçe, Pashto)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-sidqly-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald/30 focus:border-sidqly-green-emerald"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-sidqly-navy text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100'
              }`}
            >
              All Languages ({NAMAZ_LANGUAGES_REGISTRY.length})
            </button>
            <button
              onClick={() => setSelectedCategory('verified')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'verified'
                  ? 'bg-sidqly-green-deep text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100'
              }`}
            >
              ✓ Verified Tier 1 (5)
            </button>
            <button
              onClick={() => setSelectedCategory('rtl')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'rtl'
                  ? 'bg-sidqly-green-deep text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100'
              }`}
            >
              RTL Scripts
            </button>
          </div>
        </div>

        {/* Language Grid / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredLanguages.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                No languages match "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-sidqly-green-deep font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredLanguages.map((lang) => {
                const isSelected = lang.code === selectedLanguageCode;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLanguage(lang.code);
                      onClose();
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-sidqly-green-emerald text-sidqly-navy dark:text-white shadow-sm'
                        : 'bg-white dark:bg-gray-800/60 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:border-sidqly-green-emerald/50 hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="shrink-0 w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-mono font-bold text-gray-600 dark:text-gray-300 uppercase">
                        {lang.code.slice(0, 3)}
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm truncate">{lang.nativeName}</span>
                          {lang.direction === 'rtl' && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200 font-mono font-bold">
                              RTL
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {lang.name} {lang.region ? `• ${lang.region}` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {lang.verified ? (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 font-bold">
                          Verified
                        </span>
                      ) : (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 font-medium">
                          Dynamic
                        </span>
                      )}
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-sidqly-green-deep text-white flex items-center justify-center">
                          <Check size={12} />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorModal;
