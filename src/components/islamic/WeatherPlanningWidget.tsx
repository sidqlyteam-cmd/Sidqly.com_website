import React, { useState } from 'react';
import { fetchWeatherEstimate, fetchWeatherByCoords, type WeatherEstimate } from '../../lib/weatherPlanning';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useLanguage } from '../../i18n/LanguageContext';
import { CloudSun, MapPin, Search, AlertCircle, Thermometer, Wind, Umbrella, Shield, RotateCcw } from 'lucide-react';

const WeatherPlanningWidget: React.FC = () => {
  const { t, dir } = useLanguage();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const { loading: geoLoading, error: geoError, clearError, getCurrentPosition } = useGeolocation();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!city.trim()) {
      setLocalError(t('islamicTools.weather.enterCityError'));
      return;
    }
    setLoading(true);
    setLocalError(null);
    try {
      const data = await fetchWeatherEstimate(city.trim());
      setWeatherData(data);
    } catch {
      setLocalError(t('islamicTools.weather.errorFallback'));
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    setLocalError(null);
    clearError();
    getCurrentPosition(async (coords) => {
      setLoading(true);
      try {
        const data = await fetchWeatherByCoords(coords.latitude, coords.longitude);
        setWeatherData(data);
        setCity(t('islamicTools.weather.currentLocationLabel'));
      } catch {
        setLocalError(t('islamicTools.weather.errorFallback'));
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    });
  };

  const handleReset = () => {
    setCity('');
    setWeatherData(null);
    setLocalError(null);
    clearError();
  };

  const activeError = localError || geoError;
  const isBusy = loading || geoLoading;

  const getRiskColor = (risk: string) => {
    if (risk === 'High') return 'bg-red-50 text-red-700 border-red-200';
    if (risk === 'Medium') return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-green-50 text-green-700 border-green-200';
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto" dir={dir}>
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CloudSun className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">{t('islamicTools.weather.title')}</h2>
         <p className="text-gray-500 text-sm">{t('islamicTools.weather.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
           <div className="flex-grow">
               <label className="sr-only">{t('islamicTools.city')}</label>
               <input
                 type="text"
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
                 placeholder={t('islamicTools.weather.enterCityPlaceholder')}
                 className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald text-start"
               />
           </div>

           <div className="flex gap-2">
               <button
                 type="submit"
                 disabled={isBusy}
                 className="flex-1 sm:flex-initial bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
               >
                 <Search size={18} />
                 <span>{isBusy ? t('islamicTools.loading') : t('islamicTools.weather.check')}</span>
               </button>
               <button
                 type="button"
                 onClick={handleUseLocation}
                 disabled={isBusy}
                 className="bg-sidqly-ivory text-sidqly-navy px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center disabled:opacity-50 min-h-[44px]"
                 title={t('islamicTools.useMyLocation')}
                 aria-label={t('islamicTools.useMyLocation')}
               >
                 <MapPin size={18} />
               </button>
               {(weatherData || activeError || city) && (
                 <button
                   type="button"
                   onClick={handleReset}
                   disabled={isBusy}
                   className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center disabled:opacity-50 min-h-[44px]"
                   title={t('islamicTools.reset')}
                   aria-label={t('islamicTools.reset')}
                 >
                   <RotateCcw size={18} />
                 </button>
               )}
           </div>
        </form>

        {activeError && (
          <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-start gap-2 border border-red-100">
             <AlertCircle size={16} className="shrink-0 mt-0.5" />
             <p className="flex-1">{activeError}</p>
          </div>
        )}

        {weatherData && (
          <div className="mt-8">
            <div className={`p-4 rounded-xl text-center mb-6 border ${getRiskColor(weatherData.riskLevel)}`}>
                 <p className="text-sm font-semibold mb-1">{t('islamicTools.weather.riskLevel')}</p>
                 <p className="text-2xl font-bold">{weatherData.riskLevel}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Thermometer className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">{t('islamicTools.weather.temperature')}</p>
                  <p className="text-xl font-bold text-sidqly-navy">{weatherData.temperatureC}°C</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Umbrella className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">{t('islamicTools.weather.condition')}</p>
                  <p className="text-lg font-bold text-sidqly-navy">{weatherData.condition}</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Wind className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">{t('islamicTools.weather.wind')}</p>
                  <p className="text-lg font-bold text-sidqly-navy">{weatherData.windSpeed} km/h</p>
               </div>
            </div>

            <div className="bg-sidqly-navy text-white p-6 rounded-2xl shadow-inner">
               <h3 className="font-bold mb-4 flex items-center gap-2">
                 <AlertCircle size={18} className="text-sidqly-green-soft shrink-0" />
                 <span>{t('islamicTools.weather.adviceTitle')}</span>
               </h3>
               <ul className="space-y-3">
                  {weatherData.advice.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                       <span className="text-sidqly-green-emerald mt-0.5 shrink-0">•</span>
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <Shield size={14} className="shrink-0 mt-0.5 text-sidqly-green-soft" />
            <p>{t('islamicTools.weather.privacyNote')}</p>
         </div>
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
            <p>{t('islamicTools.weather.disclaimer')}</p>
         </div>
      </div>
    </div>
  );
};

export default WeatherPlanningWidget;
