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
    onError?: (errMessage: string) => void,
    options?: PositionOptions
  ) => void;
}

const DEFAULT_GEOLOCATION_OPTIONS: PositionOptions = {
  enableHighAccuracy: false,
  timeout: 15000,
  maximumAge: 300000,
};

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
      onError?: (errMessage: string) => void,
      options?: PositionOptions
    ) => {
      clearError();

      if (typeof navigator === 'undefined' || !navigator.geolocation) {
        const msg = 'Geolocation is not supported by your browser. Please enter details manually.';
        setError(msg);
        if (onError) onError(msg);
        return;
      }

      setLoading(true);

      const mergedOptions: PositionOptions = {
        ...DEFAULT_GEOLOCATION_OPTIONS,
        ...options,
      };

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
            msg = 'Location request timed out. Please click "Use My Location" to try again or enter details manually.';
          } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
            msg = 'Location position is currently unavailable. Please enter details manually.';
          }
          setError(msg);
          setLoading(false);
          if (onError) onError(msg);
        },
        mergedOptions
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
