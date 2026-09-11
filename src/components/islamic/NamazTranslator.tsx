import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import type { LanguageCode, NamazTranslationPack } from '../../i18n/namazTypes';
import { getNamazLanguage } from '../../data/namazLanguagesRegistry';
import {
  loadNamazTranslationPack,
} from '../../lib/namazTranslationLoader';
import {
  getAllSalahSections,
  searchSalahRecitations,
  getItemTitle,
  getItemPrimaryTranslation,
  getWordTranslation,
  getVariantTranslation,
  getSectionName,
} from '../../lib/namazTranslator';
import type { SalahSectionCategory } from '../../data/namazTranslatorData';
import LanguageSelectorModal from './LanguageSelectorModal';
import {
  Search,
  BookOpen,
  Eye,
  EyeOff,
  Globe,
  Sparkles,
  Clock,
  Compass,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Layers,
} from 'lucide-react';

export const NamazTranslator: React.FC = () => {
  const { language: globalLang, dir: globalDir, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  // Selected Translator Language Code (URL query param -> saved preference -> global UI lang -> 'en')
  const initialLangCode = useMemo(() => {
    const urlLang = searchParams.get('lang');
    if (urlLang) return urlLang;
    return globalLang || 'en';
  }, [searchParams, globalLang]);

  const [selectedLangCode, setSelectedLangCode] = useState<LanguageCode>(initialLangCode);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Dynamic Translation Pack Loading State
  const [activePack, setActivePack] = useState<NamazTranslationPack | null>(null);
  const [isLoadingPack, setIsLoadingPack] = useState<boolean>(false);

  // Filters & UI Visibility
  const [selectedSection, setSelectedSection] = useState<SalahSectionCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showTransliteration, setShowTransliteration] = useState<boolean>(true);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [expandedWordBreakdown, setExpandedWordBreakdown] = useState<Record<string, boolean>>({});
  const [expandedVariants, setExpandedVariants] = useState<Record<string, boolean>>({});

  const activeLangMeta = useMemo(() => getNamazLanguage(selectedLangCode), [selectedLangCode]);
  const isContentRtl = activeLangMeta.direction === 'rtl';
  const contentDir = isContentRtl ? 'rtl' : 'ltr';

  // Load dynamic translation pack whenever language changes
  useEffect(() => {
    let isSubscribed = true;

    async function fetchPack() {
      setIsLoadingPack(true);
      const res = await loadNamazTranslationPack(selectedLangCode);
      if (isSubscribed) {
        setActivePack(res.pack);
        setIsLoadingPack(false);
      }
    }

    fetchPack();

    return () => {
      isSubscribed = false;
    };
  }, [selectedLangCode]);

  // Update language selection and sync query param cleanly
  const handleSelectLanguage = (code: LanguageCode) => {
    setSelectedLangCode(code);
    const newParams = new URLSearchParams(searchParams);
    if (code === globalLang) {
      newParams.delete('lang');
    } else {
      newParams.set('lang', code);
    }
    setSearchParams(newParams, { replace: true });
  };

  const sections = useMemo(() => getAllSalahSections(), []);

  const filteredItems = useMemo(() => {
    return searchSalahRecitations(searchQuery, selectedSection, activePack);
  }, [searchQuery, selectedSection, activePack]);

  const toggleWordBreakdown = (itemId: string) => {
    setExpandedWordBreakdown((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleVariants = (itemId: string) => {
    setExpandedVariants((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={globalDir}>
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sidqly-green-emerald/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sidqly-green-emerald/10 text-sidqly-green-deep font-semibold text-xs mb-3">
              <BookOpen size={14} />
              <span>{t('islamicTools.namazTranslator.verifiedDatasetBadge')}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-sidqly-navy mb-3">
              {t('islamicTools.namazTranslator.title')}
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              {t('islamicTools.namazTranslator.subtitle')}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to={globalLang === 'en' ? '/namaz-timings' : `/${globalLang}/namaz-timings`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sidqly-ivory text-sidqly-navy font-bold text-sm border border-gray-200 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep transition-all"
            >
              <Clock size={16} />
              <span>{t('islamicTools.namazTranslator.linkNamazTimings')}</span>
            </Link>
            <Link
              to={globalLang === 'en' ? '/qibla-direction' : `/${globalLang}/qibla-direction`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sidqly-ivory text-sidqly-navy font-bold text-sm border border-gray-200 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep transition-all"
            >
              <Compass size={16} />
              <span>{t('islamicTools.namazTranslator.linkQibla')}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 140+ Language Selector Bar & Status Badge */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Translate Salah Into:
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sidqly-ivory text-sidqly-navy font-bold text-sm border border-sidqly-green-emerald/30 hover:border-sidqly-green-emerald transition-all hover:shadow-sm"
            >
              <Globe size={18} className="text-sidqly-green-emerald" />
              <span>{activeLangMeta.nativeName} ({activeLangMeta.name})</span>
              {activeLangMeta.verified ? (
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Verified Tier 1
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
                  Dynamic Pack
                </span>
              )}
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs">
            {isLoadingPack ? (
              <span className="inline-flex items-center gap-1.5 text-sidqly-green-deep font-semibold">
                <Loader2 size={14} className="animate-spin" />
                <span>Loading {activeLangMeta.name} translation pack...</span>
              </span>
            ) : activeLangMeta.verified ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 font-medium">
                <CheckCircle2 size={14} />
                <span>Verified Scholarly Human Translation</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 font-medium">
                <AlertTriangle size={14} />
                <span>Informational Translation (Machine-Generated)</span>
              </span>
            )}
          </div>
        </div>

        {/* Control Bar: Search, Section Filter, Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('islamicTools.namazTranslator.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald/20 focus:border-sidqly-green-emerald text-sm text-sidqly-navy"
            />
          </div>

          {/* Section Selector */}
          <div className="md:col-span-4 relative">
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value as SalahSectionCategory | 'all')}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald/20 focus:border-sidqly-green-emerald text-sm text-sidqly-navy bg-white"
            >
              <option value="all">{t('islamicTools.namazTranslator.allSectionsOption')}</option>
              {sections.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {getSectionName(sec.id, selectedLangCode, activePack)}
                </option>
              ))}
            </select>
          </div>

          {/* Visibility Toggles */}
          <div className="md:col-span-3 flex items-center justify-end gap-2">
            <button
              onClick={() => setShowTransliteration(!showTransliteration)}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                showTransliteration
                  ? 'bg-sidqly-green-deep text-white border-sidqly-green-deep'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {showTransliteration ? <Eye size={14} /> : <EyeOff size={14} />}
              <span>{t('islamicTools.namazTranslator.toggleTransliteration')}</span>
            </button>

            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                showTranslation
                  ? 'bg-sidqly-green-deep text-white border-sidqly-green-deep'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {showTranslation ? <Eye size={14} /> : <EyeOff size={14} />}
              <span>{t('islamicTools.namazTranslator.toggleTranslation')}</span>
            </button>
          </div>
        </div>

        {/* Section Tabs Quick Scroll / Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedSection === 'all'
                ? 'bg-sidqly-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('islamicTools.namazTranslator.allSectionsOption')}
          </button>
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedSection === sec.id
                  ? 'bg-sidqly-green-deep text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {getSectionName(sec.id, selectedLangCode, activePack)}
            </button>
          ))}
        </div>
      </div>

      {/* Extended Language Machine Disclaimer Notice */}
      {!activeLangMeta.verified && activePack && (
        <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl mb-8 flex items-start gap-3">
          <Info className="text-amber-700 shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            {activePack.disclaimer ||
              `Translations for ${activeLangMeta.name} are generated for educational reference. The original Arabic text and transliteration remain the primary authoritative sources.`}
          </p>
        </div>
      )}

      {/* Recitation Content List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm my-8">
          <div className="w-16 h-16 bg-sidqly-ivory text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={28} />
          </div>
          <h3 className="text-lg font-bold text-sidqly-navy mb-2">
            {t('islamicTools.namazTranslator.noResultsTitle')}
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
            {t('islamicTools.namazTranslator.noResultsDesc')}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSection('all');
            }}
            className="px-5 py-2.5 bg-sidqly-green-deep text-white text-sm font-bold rounded-xl hover:bg-sidqly-green-emerald transition-colors"
          >
            {t('islamicTools.namazTranslator.clearFilters')}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredItems.map((item) => {
            const isBreakdownOpen = !!expandedWordBreakdown[item.id];
            const isVariantsOpen = !!expandedVariants[item.id];

            const translatedTitle = getItemTitle(item, selectedLangCode, activePack);
            const translatedPrimary = getItemPrimaryTranslation(item, selectedLangCode, activePack);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-sidqly-green-deep uppercase tracking-wider block mb-1">
                      {getSectionName(item.section, selectedLangCode, activePack)}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-sidqly-navy" dir={contentDir}>
                      {translatedTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-sidqly-ivory px-3 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-600 font-mono">
                    <Info size={14} className="text-sidqly-green-emerald shrink-0" />
                    <span>{item.sourceReference}</span>
                  </div>
                </div>

                {/* Primary Arabic Text */}
                <div className="my-6 text-right" dir="rtl">
                  <p className="font-arabic text-2xl sm:text-4xl text-sidqly-navy leading-loose font-medium select-all">
                    {item.primaryArabic}
                  </p>
                </div>

                {/* Primary Transliteration */}
                {showTransliteration && (
                  <div className="mb-4 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      {t('islamicTools.namazTranslator.transliterationLabel')}
                    </span>
                    <p className="text-gray-700 font-serif italic text-base sm:text-lg leading-relaxed">
                      {item.primaryTransliteration}
                    </p>
                  </div>
                )}

                {/* Primary Translation */}
                {showTranslation && (
                  <div className="mb-6 bg-sidqly-ivory p-4 rounded-2xl border border-gray-200/60">
                    <span className="text-xs font-bold text-sidqly-navy uppercase tracking-wider block mb-1">
                      {t('islamicTools.namazTranslator.translationLabel')} ({activeLangMeta.nativeName})
                    </span>
                    <p
                      className="text-sidqly-navy font-semibold text-base sm:text-lg leading-relaxed"
                      dir={contentDir}
                    >
                      {translatedPrimary}
                    </p>
                  </div>
                )}

                {/* Word-by-Word Breakdown Toggle & Table */}
                {item.wordBreakdown && item.wordBreakdown.length > 0 && (
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <button
                      onClick={() => toggleWordBreakdown(item.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-sidqly-green-deep hover:text-sidqly-green-emerald transition-colors"
                    >
                      <Sparkles size={14} />
                      <span>
                        {isBreakdownOpen
                          ? t('islamicTools.namazTranslator.hideWordBreakdown')
                          : t('islamicTools.namazTranslator.showWordBreakdown')}
                      </span>
                      {isBreakdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {isBreakdownOpen && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {item.wordBreakdown.map((wb, idx) => {
                          const translatedWord = getWordTranslation(
                            wb,
                            item.id,
                            idx,
                            selectedLangCode,
                            activePack
                          );

                          return (
                            <div
                              key={idx}
                              className="bg-gray-50 p-3 rounded-2xl border border-gray-200/60 text-center flex flex-col justify-between"
                            >
                              <p className="font-arabic text-xl text-sidqly-navy mb-1" dir="rtl">
                                {wb.arabic}
                              </p>
                              <p className="text-xs font-serif italic text-emerald-700 mb-1">
                                {wb.transliteration}
                              </p>
                              <p className="text-xs font-bold text-sidqly-navy" dir={contentDir}>
                                {translatedWord}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Sunnah Variants Toggle & Content */}
                {item.variants && item.variants.length > 0 && (
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <button
                      onClick={() => toggleVariants(item.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <Layers size={14} />
                      <span>
                        {isVariantsOpen
                          ? t('islamicTools.namazTranslator.hideVariants')
                          : `${t('islamicTools.namazTranslator.showVariants')} (${item.variants.length})`}
                      </span>
                      {isVariantsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {isVariantsOpen && (
                      <div className="mt-4 space-y-4">
                        {item.variants.map((variant, vIdx) => {
                          const variantInfo = getVariantTranslation(
                            variant,
                            item.id,
                            vIdx,
                            selectedLangCode,
                            activePack
                          );

                          return (
                            <div
                              key={variant.id}
                              className="bg-amber-50/40 p-4 sm:p-5 rounded-2xl border border-amber-200/60"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span className="text-xs font-bold text-amber-800" dir={contentDir}>
                                  {variantInfo.name}
                                </span>
                                <span className="text-[11px] font-mono bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md">
                                  {variant.sourceReference}
                                </span>
                              </div>

                              <p className="font-arabic text-xl text-sidqly-navy text-right mb-3" dir="rtl">
                                {variant.arabicText}
                              </p>

                              {showTransliteration && (
                                <p className="text-xs font-serif italic text-gray-700 mb-2">
                                  {variant.transliteration}
                                </p>
                              )}

                              {showTranslation && (
                                <p className="text-xs font-medium text-sidqly-navy" dir={contentDir}>
                                  {variantInfo.translation}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Educational & Scholarly Disclaimer */}
      <div className="mt-12 bg-sidqly-ivory rounded-3xl p-6 sm:p-8 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-sidqly-green-emerald/10 text-sidqly-green-deep rounded-2xl shrink-0 mt-1">
            <CheckCircle2 size={24} />
          </div>
          <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <h4 className="font-bold text-sidqly-navy text-base">
              {t('islamicTools.namazTranslator.disclaimerTitle')}
            </h4>
            <p>{t('islamicTools.namazTranslator.disclaimerText')}</p>
            <p className="text-xs text-gray-500 font-mono">
              {t('islamicTools.namazTranslator.sourcesNote')}
            </p>
          </div>
        </div>
      </div>

      {/* Accessible Language Selector Modal */}
      <LanguageSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedLanguageCode={selectedLangCode}
        onSelectLanguage={handleSelectLanguage}
      />
    </div>
  );
};

export default NamazTranslator;
