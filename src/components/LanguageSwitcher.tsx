import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, LANGUAGE_CODES } from '../i18n/config';
import type { Language } from '../i18n/config';

interface LanguageSwitcherProps {
  className?: string;
  dropUp?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', dropUp = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentConfig = SUPPORTED_LANGUAGES[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-sidqly-green-deep dark:text-gray-200 dark:hover:text-sidqly-green-soft bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition-all border border-gray-200/60 dark:border-white/10"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('common.selectLanguage', 'Select Language')}
        data-testid="language-switcher-button"
      >
        <Globe size={16} className="text-sidqly-green-deep dark:text-sidqly-green-soft flex-shrink-0" />
        <span className="truncate max-w-[80px] sm:max-w-none">{currentConfig.nativeName}</span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${dropUp ? 'bottom-full mb-2' : 'top-full mt-2'} right-0 sm:right-auto sm:left-0 w-44 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xl z-50 py-2 transform origin-top transition-all`}
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
                    ? 'bg-sidqly-ivory dark:bg-neutral-800 text-sidqly-green-deep dark:text-sidqly-green-soft font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800/60 hover:text-sidqly-green-deep'
                }`}
                role="menuitem"
                data-testid={`language-option-${code}`}
              >
                <div className="flex flex-col">
                  <span className="font-bold">{config.nativeName}</span>
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">{config.name}</span>
                </div>
                {isSelected && <Check size={16} className="text-sidqly-green-deep dark:text-sidqly-green-soft" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
