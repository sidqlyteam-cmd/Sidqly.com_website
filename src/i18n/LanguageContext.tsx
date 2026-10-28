import React, { createContext, useContext, useEffect, useMemo, useCallback, useState } from 'react';
import type { Language, Direction } from './config';
import { DEFAULT_LANGUAGE, isSupportedLanguage, getLanguageDir } from './config';
import { getUITranslations } from './translations';
import { getLocationTranslation as translateLocation } from './locations';
import type { LocationRecord } from '../data/locations/locationTypes';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string, defaultValue?: string) => string;
  getLocalizedPath: (path: string, targetLang?: Language) => string;
  getLocationTranslation: (record: LocationRecord) => LocationRecord;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function getRawPath(path: string): string {
  if (!path) return '/';

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;

  // Remove any supported language prefix before rebuilding a clean path.
  const langMatch = normalized.match(/^\/(ar|ur|fr|de)(\/|$)/);

  if (langMatch) {
    const stripped = normalized.replace(/^\/(ar|ur|fr|de)(\/|$)/, '/');
    return stripped === '' ? '/' : stripped;
  }

  return normalized;
}

export function buildLocalizedPath(
  rawPath: string,
  _targetLang?: Language
): string {
  if (!rawPath) return '/';

  if (
    rawPath.startsWith('http://') ||
    rawPath.startsWith('https://') ||
    rawPath.startsWith('mailto:') ||
    rawPath.startsWith('tel:') ||
    rawPath.startsWith('#')
  ) {
    return rawPath;
  }

  return getRawPath(rawPath);
}

/**
 * Detect the user's preferred supported language from browser settings.
 */
export function detectBrowserLanguage(): Language | null {
  if (typeof navigator === 'undefined') return null;

  const languages =
    navigator.languages ||
    (navigator.language ? [navigator.language] : []);

  for (const lang of languages) {
    if (!lang) continue;

    const code = lang.split('-')[0].toLowerCase();

    if (isSupportedLanguage(code)) {
      return code;
    }
  }

  return null;
}

/**
 * Return the user's manually saved language preference.
 */
export function getSavedLanguage(): Language | null {
  if (typeof localStorage === 'undefined') return null;

  const saved = localStorage.getItem('sidqly_lang');

  if (saved && isSupportedLanguage(saved)) {
    return saved as Language;
  }

  return null;
}

/**
 * Language preference priority:
 * 1. Saved manual preference
 * 2. Browser language
 * 3. English default
 */
export function getPreferredLanguage(): Language {
  const saved = getSavedLanguage();
  if (saved) return saved;

  const browserLang = detectBrowserLanguage();
  if (browserLang) return browserLang;

  return DEFAULT_LANGUAGE;
}

/**
 * Detect a language from the current URL if legacy /:lang prefix is present.
 */
export function getUrlLanguage(pathname: string): Language | null {
  const match = pathname.match(/^\/(ar|ur|fr|de)(\/|$)/);
  if (match && isSupportedLanguage(match[1])) {
    return match[1];
  }
  return null;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeLanguage, setActiveLanguage] = useState<Language>(() => {
    return getPreferredLanguage();
  });

  const activeDir = getLanguageDir(activeLanguage);

  /**
   * Keep the document language and direction synchronized.
   */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', activeLanguage);
      document.documentElement.setAttribute('dir', activeDir);
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sidqly_lang', activeLanguage);
    }
  }, [activeLanguage, activeDir]);

  /**
   * Manually change the language without changing the clean URL.
   */
  const setLanguage = useCallback(
    (newLang: Language) => {
      if (!isSupportedLanguage(newLang)) return;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('sidqly_lang', newLang);
      }
      setActiveLanguage(newLang);
    },
    []
  );

  /**
   * Resolve a translated UI string using dot notation.
   */
  const t = useCallback(
    (keyPath: string, defaultValue?: string): string => {
      const translations = getUITranslations(activeLanguage);
      const keys = keyPath.split('.');

      let result: any = translations;

      for (const k of keys) {
        if (
          result &&
          typeof result === 'object' &&
          k in result
        ) {
          result = result[k];
        } else {
          result = undefined;
          break;
        }
      }

      if (typeof result === 'string') {
        return result;
      }

      /**
       * Fallback to English when a translation is missing from
       * the currently active language.
       */
      if (activeLanguage !== DEFAULT_LANGUAGE) {
        const enDict = getUITranslations(DEFAULT_LANGUAGE);
        let enResult: any = enDict;

        for (const k of keys) {
          if (
            enResult &&
            typeof enResult === 'object' &&
            k in enResult
          ) {
            enResult = enResult[k];
          } else {
            enResult = undefined;
            break;
          }
        }

        if (typeof enResult === 'string') {
          return enResult;
        }
      }

      return defaultValue || keyPath;
    },
    [activeLanguage]
  );

  /**
   * Returns clean authoritative path without any language prefix.
   */
  const getLocalizedPath = useCallback(
    (path: string, _targetLang?: Language): string => {
      return getRawPath(path);
    },
    []
  );

  const getLocationTranslation = useCallback(
    (record: LocationRecord): LocationRecord => {
      return translateLocation(record, activeLanguage);
    },
    [activeLanguage]
  );

  const contextValue = useMemo(
    () => ({
      language: activeLanguage,
      dir: activeDir,
      setLanguage,
      t,
      getLocalizedPath,
      getLocationTranslation,
    }),
    [
      activeLanguage,
      activeDir,
      setLanguage,
      t,
      getLocalizedPath,
      getLocationTranslation,
    ]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
}
