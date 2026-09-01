import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SURAHS_LIST } from '../../data/quranSurahsData';
import {
  fetchSurahDetail,
  searchQuran,
  getQuranBookmarks,
  saveQuranBookmark,
  removeQuranBookmark,
  isAyahBookmarked,
  getLastReadPosition,
  saveLastReadPosition,
  type SurahDetail,
  type QuranBookmark,
  type LastReadPosition,
} from '../../lib/quran';
import {
  BookOpen,
  Search,
  Bookmark,
  BookmarkCheck,
  Copy,
  Share2,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const QuranReader: React.FC = () => {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  // Navigation and state
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number | null>(null);
  const [surahDetail, setSurahDetail] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<
    Array<{ surahNumber: number; surahName: string; ayahNumberInSurah: number; text: string; translation: string }>
  >([]);
  const [searching, setSearching] = useState<boolean>(false);

  // Filter surahs list
  const [surahFilter, setSurahFilter] = useState<string>('');

  // Bookmarks & Last Read
  const [bookmarks, setBookmarks] = useState<QuranBookmark[]>([]);
  const [lastRead, setLastRead] = useState<LastReadPosition | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Tabs: 'browse' | 'bookmarks'
  const [activeTab, setActiveTab] = useState<'browse' | 'bookmarks'>('browse');

  useEffect(() => {
    setBookmarks(getQuranBookmarks());
    setLastRead(getLastReadPosition());
  }, []);

  const handleSelectSurah = async (surahNum: number, targetAyahNum?: number) => {
    setSelectedSurahNumber(surahNum);
    setLoading(true);
    setError(false);

    try {
      const detail = await fetchSurahDetail(surahNum);
      setSurahDetail(detail);

      // Save last read position
      const newPos: LastReadPosition = {
        surahNumber: surahNum,
        ayahNumberInSurah: targetAyahNum || 1,
        surahName: detail.englishName,
        timestamp: Date.now(),
      };
      saveLastReadPosition(newPos);
      setLastRead(newPos);

      // Scroll to top or ayah
      if (targetAyahNum) {
        setTimeout(() => {
          const el = document.getElementById(`ayah-${targetAyahNum}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearching(true);
    try {
      const results = await searchQuran(searchQuery);
      setSearchResults(results);
    } catch (err) {
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const handleToggleBookmark = (surahNum: number, ayahNum: number, surahName: string, textSnippet: string) => {
    if (isAyahBookmarked(surahNum, ayahNum)) {
      const updated = removeQuranBookmark(surahNum, ayahNum);
      setBookmarks(updated);
    } else {
      const updated = saveQuranBookmark({
        surahNumber: surahNum,
        ayahNumberInSurah: ayahNum,
        surahName,
        textSnippet,
        timestamp: Date.now(),
      });
      setBookmarks(updated);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (title: string, text: string) => {
    if (navigator.share) {
      navigator.share({ title, text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}\n\n${text}`);
      alert(t('islamicTools.quranReader.copied'));
    }
  };

  const filteredSurahs = SURAHS_LIST.filter(
    (s) =>
      s.englishName.toLowerCase().includes(surahFilter.toLowerCase()) ||
      s.name.includes(surahFilter) ||
      s.englishNameTranslation.toLowerCase().includes(surahFilter.toLowerCase()) ||
      s.number.toString() === surahFilter.trim()
  );

  return (
    <div className="bg-sidqly-ivory min-h-screen py-10 sm:py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-sidqly-green-deep dark:bg-emerald-900/30 dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <BookOpen size={16} />
            <span>{t('islamicTools.quranReader.title')}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy dark:text-white mb-4">
            {t('islamicTools.quranReader.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            {t('islamicTools.quranReader.subtitle')}
          </p>
        </div>

        {/* Global Controls & Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('islamicTools.quranReader.searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={searching}
                  className="bg-sidqly-green-deep text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shrink-0 disabled:opacity-50"
                >
                  {searching ? t('islamicTools.loading') : t('common.search')}
                </button>
              </form>
            </div>

            <div className="md:col-span-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveTab('browse')}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'browse'
                    ? 'bg-sidqly-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                {t('islamicTools.quranReader.surahList')}
              </button>
              <button
                onClick={() => setActiveTab('bookmarks')}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'bookmarks'
                    ? 'bg-sidqly-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                <Bookmark size={16} />
                <span>
                  {t('islamicTools.quranReader.bookmarks')} ({bookmarks.length})
                </span>
              </button>
            </div>
          </div>

          {/* Search Results Drawer */}
          {searchResults.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                  {t('islamicTools.quranReader.searchResults')} ({searchResults.length})
                </h3>
                <button
                  onClick={() => setSearchResults([])}
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400"
                >
                  Clear Results
                </button>
              </div>
              <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                {searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handleSelectSurah(res.surahNumber, res.ayahNumberInSurah);
                      setSearchResults([]);
                    }}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer transition-colors border border-gray-100 dark:border-gray-600"
                  >
                    <div className="flex justify-between items-center text-xs font-semibold text-sidqly-green-deep dark:text-emerald-400 mb-1">
                      <span>
                        Surah {res.surahName} ({res.surahNumber}:{res.ayahNumberInSurah})
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-200 font-serif leading-relaxed" dir="rtl">
                      {res.text}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{res.translation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Last Read Position Bar */}
          {lastRead && !selectedSurahNumber && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-xl">
              <div className="flex items-center gap-2 text-xs text-sidqly-navy dark:text-emerald-300 font-medium">
                <Sparkles size={16} className="text-sidqly-green-deep shrink-0" />
                <span>
                  {t('islamicTools.quranReader.lastRead')}: Surah {lastRead.surahName} ({lastRead.surahNumber}:
                  {lastRead.ayahNumberInSurah})
                </span>
              </div>
              <button
                onClick={() => handleSelectSurah(lastRead.surahNumber, lastRead.ayahNumberInSurah)}
                className="text-xs font-bold text-sidqly-green-deep hover:underline flex items-center gap-1"
              >
                <span>Continue Reading</span>
                <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>
          )}
        </div>

        {/* Content View */}
        {selectedSurahNumber ? (
          /* Ayah Reader View */
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
              <button
                onClick={() => {
                  setSelectedSurahNumber(null);
                  setSurahDetail(null);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft size={16} className={isRtl ? 'rotate-180' : ''} />
                <span>{t('islamicTools.quranReader.backToSurahs')}</span>
              </button>

              {surahDetail && (
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-sidqly-navy dark:text-white" dir="rtl">
                    {surahDetail.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {surahDetail.englishName} ({surahDetail.englishNameTranslation}) • {surahDetail.numberOfAyahs}{' '}
                    {t('islamicTools.quranReader.ayahsCount')} •{' '}
                    {surahDetail.revelationType === 'Meccan'
                      ? t('islamicTools.quranReader.meccan')
                      : t('islamicTools.quranReader.medinan')}
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  disabled={selectedSurahNumber <= 1}
                  onClick={() => handleSelectSurah(selectedSurahNumber - 1)}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 disabled:opacity-40 text-gray-700 dark:text-gray-200"
                  title="Previous Surah"
                >
                  <ArrowLeft size={16} className={isRtl ? 'rotate-180' : ''} />
                </button>
                <button
                  disabled={selectedSurahNumber >= 114}
                  onClick={() => handleSelectSurah(selectedSurahNumber + 1)}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 disabled:opacity-40 text-gray-700 dark:text-gray-200"
                  title="Next Surah"
                >
                  <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-gray-500">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-sidqly-green-deep border-t-transparent mb-4"></div>
                <p className="text-sm font-medium">{t('islamicTools.quranReader.loadingSurah')}</p>
              </div>
            ) : error ? (
              <div className="py-16 text-center text-red-500">
                <p className="font-semibold mb-3">{t('islamicTools.quranReader.errorLoading')}</p>
                <button
                  onClick={() => handleSelectSurah(selectedSurahNumber)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-sm font-semibold hover:bg-red-200 transition-colors"
                >
                  {t('islamicTools.retry')}
                </button>
              </div>
            ) : surahDetail ? (
              <div className="space-y-8">
                {/* Bismillah Banner for non-Tawbah */}
                {surahDetail.number !== 9 && surahDetail.number !== 1 && (
                  <div className="text-center py-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100/50 dark:border-emerald-900/30">
                    <span className="font-serif text-2xl sm:text-3xl text-sidqly-navy dark:text-emerald-300">
                      بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </span>
                  </div>
                )}

                {/* Ayah List */}
                {surahDetail.ayahs.map((ayah) => {
                  const bookmarked = isAyahBookmarked(surahDetail.number, ayah.numberInSurah);

                  return (
                    <div
                      key={ayah.numberInSurah}
                      id={`ayah-${ayah.numberInSurah}`}
                      className="p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all bg-gray-50/50 dark:bg-gray-800/80 group"
                    >
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/60 dark:border-gray-700">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sidqly-green-deep text-white text-xs font-bold shadow-sm">
                          {ayah.numberInSurah}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() =>
                              handleToggleBookmark(
                                surahDetail.number,
                                ayah.numberInSurah,
                                surahDetail.englishName,
                                ayah.text
                              )
                            }
                            className={`p-2 rounded-lg transition-colors ${
                              bookmarked
                                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/30'
                                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200/50'
                            }`}
                            title="Bookmark Ayah"
                          >
                            {bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                          </button>
                          <button
                            onClick={() =>
                              handleCopy(
                                `${ayah.text}\n${ayah.translation} (Quran ${surahDetail.englishName} ${surahDetail.number}:${ayah.numberInSurah})`,
                                `ayah-${ayah.numberInSurah}`
                              )
                            }
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-200/50 transition-colors"
                            title="Copy Ayah"
                          >
                            {copiedId === `ayah-${ayah.numberInSurah}` ? (
                              <Check size={18} className="text-emerald-600" />
                            ) : (
                              <Copy size={18} />
                            )}
                          </button>
                          <button
                            onClick={() =>
                              handleShare(
                                `Quran ${surahDetail.englishName} ${surahDetail.number}:${ayah.numberInSurah}`,
                                `${ayah.text}\n\n${ayah.translation}`
                              )
                            }
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-200/50 transition-colors"
                            title="Share Ayah"
                          >
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Arabic Quran Text */}
                      <div className="mb-4 text-right" dir="rtl">
                        <p className="font-serif text-2xl sm:text-3xl text-sidqly-navy dark:text-white leading-[2.2] tracking-wide">
                          {ayah.text}
                        </p>
                      </div>

                      {/* Translation */}
                      <div className="text-left text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        <p>{ayah.translation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : activeTab === 'bookmarks' ? (
          /* Bookmarks View */
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sidqly-navy dark:text-white mb-6">
              {t('islamicTools.quranReader.bookmarks')} ({bookmarks.length})
            </h2>

            {bookmarks.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Bookmark size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="text-sm font-medium">{t('islamicTools.quranReader.noBookmarks')}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {bookmarks.map((bm, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-sidqly-green-deep dark:text-emerald-400">
                          Surah {bm.surahName} ({bm.surahNumber}:{bm.ayahNumberInSurah})
                        </span>
                        <button
                          onClick={() => {
                            const updated = removeQuranBookmark(bm.surahNumber, bm.ayahNumberInSurah);
                            setBookmarks(updated);
                          }}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm font-serif text-gray-800 dark:text-gray-200 line-clamp-2" dir="rtl">
                        {bm.textSnippet}
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectSurah(bm.surahNumber, bm.ayahNumberInSurah)}
                      className="mt-4 text-xs font-bold text-sidqly-green-deep hover:underline self-start flex items-center gap-1"
                    >
                      <span>Jump to Ayah</span>
                      <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Surahs Directory Grid View */
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-sidqly-navy dark:text-white">
                {t('islamicTools.quranReader.surahList')}
              </h2>
              <div className="w-full sm:w-64">
                <input
                  type="text"
                  value={surahFilter}
                  onChange={(e) => setSurahFilter(e.target.value)}
                  placeholder="Filter Surahs by name or number..."
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sidqly-green-emerald"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSurahs.map((surah) => (
                <div
                  key={surah.number}
                  onClick={() => handleSelectSurah(surah.number)}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-sidqly-green-emerald dark:hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 text-gray-700 dark:text-gray-300 group-hover:text-sidqly-green-deep dark:group-hover:text-emerald-400 font-bold text-xs flex items-center justify-center transition-colors">
                      {surah.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-sidqly-navy dark:text-white group-hover:text-sidqly-green-deep dark:group-hover:text-emerald-400 transition-colors">
                        {surah.englishName}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {surah.englishNameTranslation} • {surah.numberOfAyahs} ayahs
                      </p>
                    </div>
                  </div>
                  <div className="text-right" dir="rtl">
                    <span className="font-serif font-bold text-base text-gray-800 dark:text-gray-200">
                      {surah.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
