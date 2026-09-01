import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { DUA_CATEGORIES, type DuaCategory, type DuaItem } from '../../data/duasData';
import {
  getDuas,
  searchDuas,
  getDailyDua,
  getFavoriteDuaIds,
  toggleFavoriteDua,
} from '../../lib/duas';
import {
  Heart,
  Search,
  Copy,
  Share2,
  Check,
  Sparkles,
  Repeat,
} from 'lucide-react';

export const DuasAzkar: React.FC = () => {
  const { t, dir } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<DuaCategory | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'categories' | 'favorites'>('categories');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const dailyDua = getDailyDua();

  useEffect(() => {
    setFavoriteIds(getFavoriteDuaIds());
  }, []);

  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavoriteDua(id);
    setFavoriteIds(updated);
  };

  const handleCopy = (dua: DuaItem) => {
    const content = `${dua.title}\n\n${dua.arabic}\n\nTransliteration: ${dua.transliteration}\n\nTranslation: ${dua.translation}\n\nReference: ${dua.reference}`;
    navigator.clipboard.writeText(content);
    setCopiedId(dua.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (dua: DuaItem) => {
    const content = `${dua.title}\n\n${dua.arabic}\n\n${dua.translation}\n\nReference: ${dua.reference}`;
    if (navigator.share) {
      navigator.share({ title: dua.title, text: content }).catch(() => {});
    } else {
      navigator.clipboard.writeText(content);
      alert(t('islamicTools.duasAzkar.copied'));
    }
  };

  // Filter duas
  let displayedDuas: DuaItem[];
  if (activeTab === 'favorites') {
    const all = getDuas();
    displayedDuas = all.filter((d) => favoriteIds.includes(d.id));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      displayedDuas = displayedDuas.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.translation.toLowerCase().includes(q) ||
          d.transliteration.toLowerCase().includes(q)
      );
    }
  } else {
    displayedDuas = searchDuas(searchQuery, activeCategory);
  }

  return (
    <div className="bg-sidqly-ivory min-h-screen py-10 sm:py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-sidqly-green-deep dark:bg-emerald-900/30 dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Heart size={16} />
            <span>{t('islamicTools.duasAzkar.title')}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy dark:text-white mb-4">
            {t('islamicTools.duasAzkar.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            {t('islamicTools.duasAzkar.subtitle')}
          </p>
        </div>

        {/* Daily Featured Dua */}
        {dailyDua && (
          <div className="bg-gradient-to-r from-sidqly-navy to-emerald-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles size={16} />
              <span>{t('islamicTools.duasAzkar.dailyDuaTitle')}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">{dailyDua.title}</h2>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl mb-6 border border-white/10" dir="rtl">
              <p className="font-serif text-2xl sm:text-3xl text-emerald-100 leading-loose">
                {dailyDua.arabic}
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
              {dailyDua.translation}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-emerald-200">
              <span className="font-medium">
                {t('islamicTools.duasAzkar.reference')} {dailyDua.reference}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(dailyDua)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 font-semibold"
                >
                  {copiedId === dailyDua.id ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedId === dailyDua.id ? t('islamicTools.duasAzkar.copied') : t('islamicTools.duasAzkar.copyDua')}</span>
                </button>
                <button
                  onClick={() => handleShare(dailyDua)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <Share2 size={14} />
                  <span>{t('islamicTools.duasAzkar.shareDua')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('islamicTools.duasAzkar.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'categories'
                    ? 'bg-sidqly-navy text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                {t('islamicTools.duasAzkar.categoriesTab')}
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'favorites'
                    ? 'bg-sidqly-navy text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                <Heart size={16} className="text-red-400 fill-red-400" />
                <span>
                  {t('islamicTools.duasAzkar.favoritesTab')} ({favoriteIds.length})
                </span>
              </button>
            </div>
          </div>

          {/* Category Chips (if categories tab is active) */}
          {activeTab === 'categories' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-sidqly-green-deep text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                All Categories
              </button>
              {DUA_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-sidqly-green-deep text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {t(cat.labelKey as any)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Duas List Grid */}
        {displayedDuas.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-700">
            <Heart size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {activeTab === 'favorites'
                ? t('islamicTools.duasAzkar.noFavorites')
                : t('islamicTools.duasAzkar.noResults')}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {displayedDuas.map((dua) => {
              const fav = favoriteIds.includes(dua.id);

              return (
                <div
                  key={dua.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="font-bold text-lg text-sidqly-navy dark:text-white">
                        {dua.title}
                      </h3>
                      <button
                        onClick={() => handleToggleFavorite(dua.id)}
                        className={`p-2 rounded-full transition-colors ${
                          fav
                            ? 'text-red-500 bg-red-50 dark:bg-red-950/30'
                            : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
                        }`}
                        title="Favorite Dua"
                      >
                        <Heart size={18} className={fav ? 'fill-current' : ''} />
                      </button>
                    </div>

                    {/* Arabic Text */}
                    <div
                      className="bg-emerald-50/50 dark:bg-emerald-950/20 p-5 rounded-xl border border-emerald-100/50 dark:border-emerald-900/30 mb-4 text-right"
                      dir="rtl"
                    >
                      <p className="font-serif text-2xl text-sidqly-navy dark:text-emerald-200 leading-relaxed">
                        {dua.arabic}
                      </p>
                    </div>

                    {/* Transliteration */}
                    {dua.transliteration && (
                      <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-3">
                        {dua.transliteration}
                      </p>
                    )}

                    {/* Translation */}
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                      {dua.translation}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      {dua.repeatCount && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-md font-bold">
                          <Repeat size={12} />
                          <span>
                            {t('islamicTools.duasAzkar.repeatCount')} {dua.repeatCount}x
                          </span>
                        </span>
                      )}
                      <span className="truncate max-w-[160px]" title={dua.reference}>
                        {dua.reference}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(dua)}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="Copy Dua"
                      >
                        {copiedId === dua.id ? (
                          <Check size={16} className="text-emerald-600" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                      <button
                        onClick={() => handleShare(dua)}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="Share Dua"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
