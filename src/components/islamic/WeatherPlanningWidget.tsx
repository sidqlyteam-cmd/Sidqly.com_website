import React, { useState } from 'react';
import { fetchWeatherEstimate, fetchWeatherByCoords, type WeatherEstimate } from '../../lib/weatherPlanning';
import { CloudSun, MapPin, Search, AlertCircle, Thermometer, Wind, Umbrella, Shield } from 'lucide-react';

const WeatherPlanningWidget: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) {
      setError('Please enter a city.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherEstimate(city);
      setWeatherData(data);
    } catch {
      setError('Weather estimate is temporarily unavailable. Please check your local weather service before distribution.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
            const data = await fetchWeatherByCoords(latitude, longitude);
            setWeatherData(data);
            setCity('Current Location');
        } catch {
            setError('Weather estimate is temporarily unavailable. Please check your local weather service before distribution.');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
      },
      () => {
        setError('Location permission denied. Please enter city manually.');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const getRiskColor = (risk: string) => {
      if (risk === 'High') return 'bg-red-50 text-red-700 border-red-200';
      if (risk === 'Medium') return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      return 'bg-green-50 text-green-700 border-green-200';
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CloudSun className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">Weather-Aware Distribution</h2>
         <p className="text-gray-500 text-sm">Plan open-air distributions and charity operations safely.</p>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
           <div className="flex-grow">
               <label className="sr-only">City</label>
               <input
                 type="text"
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
                 placeholder="Enter city (e.g. Dhaka, Cairo, London)"
                 className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
               />
           </div>

           <div className="flex gap-2">
               <button
                 type="submit"
                 disabled={loading}
                 className="bg-sidqly-green-deep text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
               >
                 <Search size={18} />
                 Check
               </button>
               <button
                 type="button"
                 onClick={handleUseLocation}
                 disabled={loading}
                 className="bg-sidqly-ivory text-sidqly-navy px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center disabled:opacity-50"
                 title="Use my location"
               >
                 <MapPin size={18} />
               </button>
           </div>
        </form>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-start gap-2 border border-red-100">
             <AlertCircle size={16} className="shrink-0 mt-0.5" />
             <p>{error}</p>
          </div>
        )}

        {weatherData && (
          <div className="mt-8">
            <div className={`p-4 rounded-xl text-center mb-6 border ${getRiskColor(weatherData.riskLevel)}`}>
                 <p className="text-sm font-semibold mb-1">Distribution Risk Level</p>
                 <p className="text-2xl font-bold">{weatherData.riskLevel}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Thermometer className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">Temperature</p>
                  <p className="text-xl font-bold text-sidqly-navy">{weatherData.temperatureC}°C</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Umbrella className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">Condition</p>
                  <p className="text-lg font-bold text-sidqly-navy">{weatherData.condition}</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <Wind className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500 mb-1">Wind</p>
                  <p className="text-lg font-bold text-sidqly-navy">{weatherData.windSpeed} km/h</p>
               </div>
            </div>

            <div className="bg-sidqly-navy text-white p-6 rounded-2xl shadow-inner">
               <h3 className="font-bold mb-4 flex items-center gap-2">
                 <AlertCircle size={18} className="text-sidqly-green-soft" />
                 Charity Operation Advice
               </h3>
               <ul className="space-y-3">
                  {weatherData.advice.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                       <span className="text-sidqly-green-emerald mt-0.5">•</span>
                       {item}
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
            <p><strong>Privacy Note:</strong> Your location is used only in your browser to check the weather. Sidqly does not store or track your location.</p>
         </div>
      </div>
    </div>
  );
};

export default WeatherPlanningWidget;
