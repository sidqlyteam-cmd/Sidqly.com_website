import React, { createContext, useContext, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  // Remove any supported language prefix before rebuilding a localized path.
  const langMatch = normalized.match(/^\/(ar|ur|fr|de)(\/|$)/);

  if (langMatch) {
    const stripped = normalized.replace(/^\/(ar|ur|fr|de)(\/|$)/, '/');
    return stripped === '' ? '/' : stripped;
  }

  return normalized;
}

export function buildLocalizedPath(
  rawPath: string,
  targetLang: Language
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

  const cleanRaw = getRawPath(rawPath);

  // English is the default language and has no URL prefix.
  if (targetLang === DEFAULT_LANGUAGE) {
    return cleanRaw;
  }

  // Language homepage.
  if (cleanRaw === '/') {
    return `/${targetLang}`;
  }

  return `/${targetLang}${cleanRaw}`;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPathLanguage = useMemo<Language>(() => {
    const pathname = location.pathname;

    const match = pathname.match(/^\/(ar|ur|fr|de)(\/|$)/);

    if (match && isSupportedLanguage(match[1])) {
      return match[1];
    }

    return 'en';
  }, [location.pathname]);

  const activeLanguage = currentPathLanguage;
  const activeDir = getLanguageDir(activeLanguage);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', activeLanguage);
      document.documentElement.setAttribute('dir', activeDir);
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sidqly_lang', activeLanguage);
    }
  }, [activeLanguage, activeDir]);

  const setLanguage = useCallback(
    (newLang: Language) => {
      if (!isSupportedLanguage(newLang)) return;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('sidqly_lang', newLang);
      }

      const targetPath = buildLocalizedPath(location.pathname, newLang);

      if (targetPath !== location.pathname) {
        navigate(targetPath);
      }
    },
    [location.pathname, navigate]
  );

  const t = useCallback(
    (keyPath: string, defaultValue?: string): string => {
      const translations = getUITranslations(activeLanguage);
      const keys = keyPath.split('.');
      let result: any = translations;

      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          result = undefined;
          break;
        }
      }

      if (typeof result === 'string') {
        return result;
      }

      // Fallback to English dictionary if key is missing
      // in the active language.
      if (activeLanguage !== DEFAULT_LANGUAGE) {
        const enDict = getUITranslations(DEFAULT_LANGUAGE);
        let enResult: any = enDict;

        for (const k of keys) {
          if (enResult && typeof enResult === 'object' && k in enResult) {
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

  const getLocalizedPath = useCallback(
    (path: string, targetLang?: Language): string => {
      const lang = targetLang || activeLanguage;
      return buildLocalizedPath(path, lang);
    },
    [activeLanguage]
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}