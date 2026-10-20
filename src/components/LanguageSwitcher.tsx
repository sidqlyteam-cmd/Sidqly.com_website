import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, type Language } from '../i18n/config';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  dropUp?: boolean;
}

const LANGUAGE_CODES: Language[] = ['en', 'ar', 'ur', 'fr', 'de'];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ dropUp = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentConfig = SUPPORTED_LANGUAGES[language] || SUPPORTED_LANGUAGES.en;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-sidqly-green-deep bg-slate-50 hover:bg-slate-100 rounded-xl transition-all border border-slate-200 shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('common.selectLanguage', 'Select Language')}
        data-testid="language-switcher-button"
      >
        <Globe
          size={16}
          className="text-sidqly-green-emerald flex-shrink-0"
        />

        <span className="truncate max-w-[80px] sm:max-w-none">
          {currentConfig.nativeName}
        </span>

        <ChevronDown
          size={12}
          className="opacity-60 flex-shrink-0"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            dropUp ? 'bottom-full mb-2' : 'top-full mt-2'
          } ltr:right-0 ltr:sm:right-auto ltr:sm:left-0 rtl:left-0 rtl:sm:left-auto rtl:sm:right-0 w-44 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 py-2 transform origin-top transition-all`}
          role="menu"
          aria-orientation="vertical"
        >
          {LANGUAGE_CODES.map((code) => {
            const config = SUPPORTED_LANGUAGES[code];
            const isSelected = code === language;

            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm text-left transition-colors font-medium ${
                  isSelected
                    ? 'bg-emerald-50 text-sidqly-green-deep font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-sidqly-green-deep'
                }`}
                role="menuitem"
                data-testid={`language-option-${code}`}
              >
                <div className="flex flex-col">
                  <span className="font-bold">{config.nativeName}</span>
                  <span className="text-[11px] text-slate-400">
                    {config.name}
                  </span>
                </div>

                {isSelected && (
                  <Check
                    size={16}
                    className="text-sidqly-green-emerald"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
