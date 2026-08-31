import React, { useState, useEffect } from 'react';
import { fetchNamazTimingsByCity, fetchNamazTimingsByCoords, reverseGeocodeCoords, CALCULATION_METHODS, getNextPrayer, type NamazTimings } from '../../lib/namazTimings';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useLanguage } from '../../i18n/LanguageContext';
import { MapPin, Search, Clock, AlertCircle, Shield, RotateCcw } from 'lucide-react';

const NamazTimingWidget: React.FC = () => {
  const { t, dir } = useLanguage();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [method, setMethod] = useState(1);
  const [activeCoords, setActiveCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [lastFetchMode, setLastFetchMode] = useState<'coords' | 'city' | null>(null);
  const [timingsData, setTimingsData] = useState<NamazTimings | null>(null);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);

  const { loading: geoLoading, error: geoError, clearError, getCurrentPosition } = useGeolocation();

  const fetchTimings = async (fetcher: () => Promise<NamazTimings>) => {
    setLoading(true);
    setLocalError(null);
    clearError();
    try {
      const data = await fetcher();
      setTimingsData(data);
      setNextPrayer(getNextPrayer(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLocalError(err.message);
      } else {
        setLocalError(t('islamicTools.unableToCalculate', 'Unable to calculate prayer times for this location. Please check the city and country and try again.'));
      }
      setTimingsData(null);
      setNextPrayer(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    const trimmedCountry = country.trim();

    if (!trimmedCity || !trimmedCountry) {
      setLocalError(t('islamicTools.namaz.enterCityCountry', 'Please enter both city and country.'));
      return;
    }
    setActiveCoords(null);
    setLastFetchMode('city');
    fetchTimings(() => fetchNamazTimingsByCity(trimmedCity, trimmedCountry, method));
  };

  const handleUseLocation = () => {
    setLocalError(null);
    clearError();
    getCurrentPosition(async (coords) => {
      const lat = coords.latitude;
      const lng = coords.longitude;
      setActiveCoords({ lat, lng });
      setLastFetchMode('coords');

      fetchTimings(() => fetchNamazTimingsByCoords(lat, lng, method));

      // Reverse geocode to populate input fields if available
      const geoInfo = await reverseGeocodeCoords(lat, lng);
      if (geoInfo) {
        if (geoInfo.city) setCity(geoInfo.city);
        if (geoInfo.country) setCountry(geoInfo.country);
      }
    });
  };

  const handleReset = () => {
    setCity('');
    setCountry('');
    setMethod(1);
    setActiveCoords(null);
    setLastFetchMode(null);
    setTimingsData(null);
    setNextPrayer(null);
    setLocalError(null);
    clearError();
  };

  // Re-fetch when method changes if we already have data
  useEffect(() => {
    if (timingsData) {
      if (lastFetchMode === 'coords' && activeCoords) {
        fetchTimings(() => fetchNamazTimingsByCoords(activeCoords.lat, activeCoords.lng, method));
      } else if (city.trim() && country.trim()) {
        fetchTimings(() => fetchNamazTimingsByCity(city.trim(), country.trim(), method));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  const activeError = localError || geoError;
  const isBusy = loading || geoLoading;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto" dir={dir}>
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Clock className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">{t('islamicTools.namaz.title', 'Namaz Timings')}</h2>
         <p className="text-gray-500 text-sm">{t('islamicTools.namaz.subtitle', 'Calculate prayer times for planning.')}</p>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleSearch} className="space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.city', 'City')}</label>
                 <input
                   type="text"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   placeholder="e.g. Lahore"
                   className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                 />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.country', 'Country')}</label>
                 <input
                   type="text"
                   value={country}
                   onChange={(e) => setCountry(e.target.value)}
                   placeholder="e.g. Pakistan"
                   className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                 />
              </div>
           </div>

           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.calculationMethod', 'Calculation Method')}</label>
             <select
               value={method}
               onChange={(e) => setMethod(Number(e.target.value))}
               className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
             >
               {CALCULATION_METHODS.map(m => (
                 <option key={m.id} value={m.id}>{m.name}</option>
               ))}
             </select>
           </div>

           <div className="flex flex-col sm:flex-row gap-3">
               <button
                 type="submit"
                 disabled={isBusy}
                 className="flex-1 bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
               >
                 <Search size={18} />
                 {isBusy ? t('islamicTools.loading', 'Loading...') : t('islamicTools.calculate', 'Calculate')}
               </button>
               <button
                 type="button"
                 onClick={handleUseLocation}
                 disabled={isBusy}
                 className="flex-1 bg-sidqly-ivory text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center gap-2 disabled:opacity-50"
               >
                 <MapPin size={18} />
                 {t('islamicTools.useMyLocation', 'Use My Location')}
               </button>
               {(timingsData || activeError || city || country) && (
                 <button
                   type="button"
                   onClick={handleReset}
                   disabled={isBusy}
                   className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                   title={t('islamicTools.reset', 'Reset')}
                 >
                   <RotateCcw size={18} />
                   <span className="sm:hidden md:inline">{t('islamicTools.reset', 'Reset')}</span>
                 </button>
               )}
           </div>
        </form>

        {activeError && (
          <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-start gap-2 border border-red-100">
             <AlertCircle size={16} className="shrink-0 mt-0.5" />
             <div className="flex-1">
               <p>{activeError}</p>
             </div>
          </div>
        )}

        {timingsData && (
          <div className="mt-8 border-t border-gray-100 pt-6">
            <div className="text-center mb-6">
                <p className="text-lg font-bold text-sidqly-navy">{timingsData.date.readable}</p>
                <p className="text-sm text-gray-500">{timingsData.date.hijri.date} {timingsData.date.hijri.month.en} {timingsData.date.hijri.year}</p>
                <p className="text-xs text-gray-400 mt-1">Timezone: {timingsData.timezone} | Method: {timingsData.meta.method.name}</p>
            </div>

            {nextPrayer && (
              <div className="mb-6 bg-sidqly-green-soft/30 border border-sidqly-green-emerald/30 p-4 rounded-xl text-center">
                 <p className="text-sm font-semibold text-sidqly-green-deep">{t('islamicTools.namaz.nextPrayer', 'Next Prayer')}</p>
                 <p className="text-xl font-bold text-sidqly-navy">{nextPrayer.name} at {nextPrayer.time}</p>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Fajr', time: timingsData.Fajr },
                { name: 'Sunrise', time: timingsData.Sunrise },
                { name: 'Dhuhr', time: timingsData.Dhuhr },
                { name: 'Asr', time: timingsData.Asr },
                { name: 'Maghrib', time: timingsData.Maghrib },
                { name: 'Isha', time: timingsData.Isha },
              ].map(prayer => (
                <div key={prayer.name} className={`p-4 rounded-xl text-center border ${nextPrayer?.name === prayer.name ? 'border-sidqly-green-emerald bg-sidqly-green-emerald/5' : 'border-gray-100 bg-gray-50'}`}>
                  <p className="text-sm font-medium text-gray-500 mb-1">{prayer.name}</p>
                  <p className="text-lg font-bold text-sidqly-navy">{prayer.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <Shield size={14} className="shrink-0 mt-0.5 text-sidqly-green-soft" />
            <p>{t('islamicTools.privacyNotice')}</p>
         </div>
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
            <p>{t('islamicTools.calendar.planningDisclaimer')}</p>
         </div>
      </div>
    </div>
  );
};

export default NamazTimingWidget;
