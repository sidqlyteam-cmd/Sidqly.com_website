import React, { useState, useEffect } from 'react';
import { calculateQiblaDirection, type QiblaResult } from '../../lib/qibla';
import { Compass, MapPin, AlertCircle, Shield } from 'lucide-react';

const QiblaDirectionTool: React.FC = () => {
  const [qiblaResult, setQiblaResult] = useState<QiblaResult | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [usingCompass, setUsingCompass] = useState(false);

  // Fallback manual entry state
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');

  const requestCompassPermission = async () => {
    if (typeof (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        return permissionState === 'granted';
      } catch (err) {
        console.error('Error requesting compass permission:', err);
        return false;
      }
    }
    return true; // Non-iOS 13+ devices
  };

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Use webkitCompassHeading for iOS, or standard alpha for others
      let heading = null;
      if ('webkitCompassHeading' in event) {
        heading = (event as unknown as { webkitCompassHeading: number }).webkitCompassHeading;
      } else if (event.alpha !== null) {
        // This is a rough estimation for non-iOS devices.
        heading = 360 - event.alpha;
      }

      if (heading !== null) {
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
    setLoading(true);
    setError(null);
    setUsingCompass(false);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    const hasCompassPermission = await requestCompassPermission();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const result = calculateQiblaDirection(latitude, longitude);
        setQiblaResult(result);

        if (hasCompassPermission && window.DeviceOrientationEvent) {
            setUsingCompass(true);
        }

        setLoading(false);
      },
      () => {
        setError('Location permission denied or unavailable. You can enter coordinates manually.');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const handleManualCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setUsingCompass(false);

    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);

    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      setError('Please enter valid coordinates (-90 to 90 for latitude, -180 to 180 for longitude).');
      return;
    }

    setError(null);
    const result = calculateQiblaDirection(lat, lng);
    setQiblaResult(result);
  };

  // Calculate arrow rotation based on device heading if available, otherwise static bearing
  let arrowRotation = qiblaResult?.bearing || 0;
  if (usingCompass && deviceHeading !== null && qiblaResult) {
      arrowRotation = qiblaResult.bearing - deviceHeading;
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
      <div className="text-center mb-8">
         <div className="bg-sidqly-green-deep/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Compass className="text-sidqly-green-deep w-8 h-8" />
         </div>
         <h2 className="text-2xl font-bold text-sidqly-navy mb-2">Qibla Direction Tool</h2>
         <p className="text-gray-500 text-sm">Calculate approximate Qibla direction for operational planning.</p>
      </div>

      {!qiblaResult && (
        <div className="space-y-6">
           <button
             onClick={handleGetLocation}
             disabled={loading}
             className="w-full flex items-center justify-center gap-2 bg-sidqly-green-deep text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
           >
             <MapPin size={20} />
             {loading ? 'Requesting Location...' : 'Use My Location'}
           </button>

           <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-400">Or enter manually</span>
              </div>
           </div>

           <form onSubmit={handleManualCalculate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                    <input
                      type="text"
                      value={manualLat}
                      onChange={(e) => setManualLat(e.target.value)}
                      placeholder="e.g. 51.5074"
                      className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder="e.g. -0.1278"
                      className="w-full rounded-xl border-gray-200 border p-3 focus:ring-sidqly-green-emerald focus:border-sidqly-green-emerald"
                    />
                 </div>
              </div>
              <button
                 type="submit"
                 className="w-full bg-sidqly-ivory text-sidqly-navy px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200"
               >
                 Calculate Direction
               </button>
           </form>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-start gap-2">
           <AlertCircle size={16} className="shrink-0 mt-0.5" />
           <p>{error}</p>
        </div>
      )}

      {qiblaResult && (
        <div className="text-center mt-6">
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Approximate Qibla Direction</p>

           <div className="relative w-48 h-48 mx-auto mb-6 bg-sidqly-ivory rounded-full border-4 border-gray-100 flex items-center justify-center shadow-inner overflow-hidden">
             {/* Compass Ticks (rotate opposite to arrow to simulate compass card if live, otherwise static) */}
             <div
               className="absolute inset-2 border border-gray-200 rounded-full transition-transform duration-100 ease-out"
               style={{ transform: usingCompass && deviceHeading !== null ? `rotate(${-deviceHeading}deg)` : 'rotate(0deg)' }}
             >
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">N</span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">E</span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">S</span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">W</span>
             </div>

             {/* Arrow Container */}
             <div
                className="absolute inset-0 transition-transform duration-100 ease-out flex items-center justify-center"
                style={{ transform: `rotate(${arrowRotation}deg)` }}
             >
                {/* Arrow Head (pointing up relative to its rotated container) */}
                <div className="absolute top-4 text-sidqly-green-deep">
                   <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L24 20L12 15L0 20L12 0Z" fill="currentColor"/>
                      <rect x="10" y="15" width="4" height="25" fill="currentColor"/>
                   </svg>
                </div>
             </div>
           </div>

           <div className="text-5xl font-extrabold text-sidqly-navy mb-2">
             {qiblaResult.bearing}° <span className="text-xl text-gray-400 font-normal">from North</span>
           </div>

           {usingCompass && deviceHeading !== null && (
             <p className="text-sm text-sidqly-green-emerald font-semibold mb-4">
               Live compass active. Turn your device until the arrow points up.
             </p>
           )}

           <button
             onClick={() => { setQiblaResult(null); setUsingCompass(false); }}
             className="text-sm font-bold text-sidqly-green-deep hover:underline mt-4 block mx-auto"
           >
             Calculate for another location
           </button>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <Shield size={14} className="shrink-0 mt-0.5 text-sidqly-green-soft" />
            <p><strong>Privacy Note:</strong> Your location is used only in your browser to estimate Qibla direction. Sidqly does not store or track your location.</p>
         </div>
         <div className="flex items-start gap-2 text-xs text-gray-500">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-gray-400" />
            <p><strong>Accuracy Note:</strong> Qibla direction is approximate and may depend on device compass accuracy, location permission, and calibration. Confirm with local scholars, official authorities, or the organization’s authorized reviewers.</p>
         </div>
      </div>
    </div>
  );
};

export default QiblaDirectionTool;
