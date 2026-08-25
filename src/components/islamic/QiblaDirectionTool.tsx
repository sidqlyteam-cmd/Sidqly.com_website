import React, { useState, useEffect } from 'react';
import { calculateQiblaDirection, validateCoordinates, type QiblaResult } from '../../lib/qibla';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useLanguage } from '../../i18n/LanguageContext';
import { Compass, MapPin, AlertCircle, Shield, RefreshCw } from 'lucide-react';

const QiblaDirectionTool: React.FC = () => {
  const { t } = useLanguage();
  const [qiblaResult, setQiblaResult] = useState<QiblaResult | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const [usingCompass, setUsingCompass] = useState(false);

  const { loading: geoLoading, error: geoError, clearError, getCurrentPosition } = useGeolocation();

  // Manual entry state
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');

  const requestCompassPermission = async (): Promise<boolean> => {
    if (typeof window === 'undefined') return false;

    // Check if DeviceOrientationEvent is supported
    if (!('DeviceOrientationEvent' in window)) {
      return false;
    }

    if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        return permissionState === 'granted';
      } catch (err) {
        console.error('Error requesting compass permission:', err);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let heading: number | null = null;
      if ('webkitCompassHeading' in event && typeof (event as unknown as { webkitCompassHeading: number }).webkitCompassHeading === 'number') {
        heading = (event as unknown as { webkitCompassHeading: number }).webkitCompassHeading;
      } else if (event.alpha !== null) {
        heading = (360 - event.alpha) % 360;
      }

      if (heading !== null && !isNaN(heading)) {
        setDeviceHeading(heading);
      }
    };

    if (usingCompass) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, [usingCompass]);

  const handleGetLocation = async () => {
    setLocalError(null);
    clearError();
    setUsingCompass(false);

    const hasCompassPermission = await requestCompassPermission();

    getCurrentPosition(
      (coords) => {
        try {
          const result = calculateQiblaDirection(coords.latitude, coords.longitude);
          setQiblaResult(result);

          if (hasCompassPermission && 'DeviceOrientationEvent' in window) {
            setUsingCompass(true);
          }
        } catch (err: any) {
          setLocalError(err.message || t('islamicTools.qibla.invalidCoordinates'));
        }
      }
    );
  };

  const handleManualCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setUsingCompass(false);
    clearError();

    const validation = validateCoordinates(manualLat, manualLng);
    if (!validation.isValid || validation.lat === undefined || validation.lng === undefined) {
      setLocalError(t('islamicTools.qibla.invalidCoordinates'));
      return;
    }

    setLocalError(null);
    try {
      const result = calculateQiblaDirection(validation.lat, validation.lng);
      setQiblaResult(result);
    } catch (err: any) {
      setLocalError(err.message || t('islamicTools.qibla.invalidCoordinates'));
    }
  };

  const handleReset = () => {
    setQiblaResult(null);
    setUsingCompass(false);
    setDeviceHeading(null);
    setManualLat('');
    setManualLng('');
    clearError();
    setLocalError(null);
  };

  const activeError = localError || (geoError ? (
    geoError.includes('denied') ? t('islamicTools.qibla.locationPermissionDenied') : t('islamicTools.qibla.unableToDetermineLocation')
  ) : null);

  let arrowRotation = qiblaResult?.bearing || 0;
  if (usingCompass && deviceHeading !== null && qiblaResult) {
    arrowRotation = (qiblaResult.bearing - deviceHeading + 360) % 360;
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto w-full">
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Compass className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">{t('islamicTools.qibla.title')}</h2>
         <p className="text-gray-500 text-sm">{t('islamicTools.qibla.subtitle')}</p>
      </div>

      {!qiblaResult && (
        <div className="space-y-6">
           <button
             onClick={handleGetLocation}
             disabled={geoLoading}
             className="w-full flex items-center justify-center gap-2 bg-sidqly-green-deep text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 text-base"
           >
             <MapPin size={20} />
             {geoLoading ? t('islamicTools.loading') : t('islamicTools.useMyLocation')}
           </button>

           <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-400">{t('islamicTools.qibla.orEnterManually')}</span>
              </div>
           </div>

           <form onSubmit={handleManualCalculate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.latitude')}</label>
                    <input
                      type="text"
                      value={manualLat}
                      onChange={(e) => setManualLat(e.target.value)}
                      placeholder="e.g. 31.5204"
                      className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald text-sm"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('islamicTools.longitude')}</label>
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder="e.g. 74.3587"
                      className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald text-sm"
                    />
                 </div>
              </div>
              <button
                 type="submit"
                 className="w-full bg-sidqly-ivory text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200 text-sm"
               >
                 {t('islamicTools.qibla.calculateDirection')}
               </button>
           </form>
        </div>
      )}

      {activeError && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-start gap-2">
           <AlertCircle size={16} className="shrink-0 mt-0.5" />
           <p>{activeError}</p>
        </div>
      )}

      {qiblaResult && (
        <div className="text-center mt-6 space-y-6">
           <div>
             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('islamicTools.qibla.qiblaBearing')}</p>
             <p className="text-xs text-gray-400">
               {t('islamicTools.latitude')}: {qiblaResult.userLat.toFixed(4)}, {t('islamicTools.longitude')}: {qiblaResult.userLng.toFixed(4)}
             </p>
           </div>

           <div className="relative w-48 h-48 mx-auto bg-sidqly-ivory rounded-full border-4 border-gray-100 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
             <div
               className="absolute inset-2 border border-gray-200 rounded-full transition-transform duration-100 ease-out"
               style={{ transform: usingCompass && deviceHeading !== null ? `rotate(${-deviceHeading}deg)` : 'rotate(0deg)' }}
             >
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">N</span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">E</span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">S</span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">W</span>
             </div>

             <div
                className="absolute inset-0 transition-transform duration-100 ease-out flex items-center justify-center"
                style={{ transform: `rotate(${arrowRotation}deg)` }}
             >
                <div className="absolute top-4 text-sidqly-green-deep">
                   <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L24 20L12 15L0 20L12 0Z" fill="currentColor"/>
                      <rect x="10" y="15" width="4" height="25" fill="currentColor"/>
                   </svg>
                </div>
             </div>
           </div>

           <div>
             <div className="text-4xl sm:text-5xl font-extrabold text-sidqly-navy mb-1">
               {qiblaResult.bearing}° <span className="text-lg text-gray-400 font-normal">{t('islamicTools.qibla.fromNorth')} ({qiblaResult.cardinalDirection})</span>
             </div>
           </div>

           {usingCompass && deviceHeading !== null ? (
             <p className="text-sm text-sidqly-green-emerald font-semibold">
               {t('islamicTools.qibla.liveCompassActive')}
             </p>
           ) : (
             <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
               {t('islamicTools.qibla.compassUnavailable')}
             </p>
           )}

           <button
             onClick={handleReset}
             className="inline-flex items-center gap-2 text-sm font-bold text-sidqly-green-deep hover:underline mt-4 mx-auto"
           >
             <RefreshCw size={14} />
             {t('islamicTools.qibla.recalculate')}
           </button>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <Shield size={14} className="shrink-0 mt-0.5 text-sidqly-green-soft" />
            <p>{t('islamicTools.qibla.privacyDisclaimer')}</p>
         </div>
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
            <p>{t('islamicTools.qibla.accuracyDisclaimer')}</p>
         </div>
      </div>
    </div>
  );
};

export default QiblaDirectionTool;
