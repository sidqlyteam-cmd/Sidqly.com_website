import { useState, useCallback } from 'react';

export interface GeolocationCoords {
  latitude: number;
  longitude: number;
}

export interface UseGeolocationReturn {
  loading: boolean;
  error: string | null;
  coords: GeolocationCoords | null;
  setError: (error: string | null) => void;
  clearError: () => void;
  getCurrentPosition: (
    onSuccess?: (coords: GeolocationCoords) => void,
    onError?: (errMessage: string) => void
  ) => void;
}

export function useGeolocation(): UseGeolocationReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coords, setCoords] = useState<GeolocationCoords | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getCurrentPosition = useCallback(
    (
      onSuccess?: (coords: GeolocationCoords) => void,
      onError?: (errMessage: string) => void
    ) => {
      clearError();

      if (typeof navigator === 'undefined' || !navigator.geolocation) {
        const msg = 'Geolocation is not supported by your browser.';
        setError(msg);
        if (onError) onError(msg);
        return;
      }

      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCoords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setCoords(newCoords);
          setLoading(false);
          setError(null);
          if (onSuccess) onSuccess(newCoords);
        },
        (geoError) => {
          let msg = 'Unable to retrieve location. Please enter details manually.';
          if (geoError.code === geoError.PERMISSION_DENIED) {
            msg = 'Location permission denied. Please enter details manually.';
          } else if (geoError.code === geoError.TIMEOUT) {
            msg = 'Location request timed out. Please try again.';
          } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
            msg = 'Location position is currently unavailable.';
          }
          setError(msg);
          setLoading(false);
          if (onError) onError(msg);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    },
    [clearError]
  );

  return {
    loading,
    error,
    coords,
    setError,
    clearError,
    getCurrentPosition,
  };
}
