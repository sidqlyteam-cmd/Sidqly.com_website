export const KAABA_COORDS = {
  lat: 21.4225,
  lng: 39.8262
};

export interface QiblaResult {
  bearing: number;
  cardinalDirection: string;
  userLat: number;
  userLng: number;
}

export interface CoordinateValidationResult {
  isValid: boolean;
  error?: string;
  lat?: number;
  lng?: number;
}

/**
 * Validates latitude and longitude coordinates.
 * - Latitude: -90 <= lat <= 90
 * - Longitude: -180 <= lng <= 180
 * Rejects empty input, whitespace, non-numeric values, NaN, Infinity, out-of-range values.
 */
export function validateCoordinates(latInput: unknown, lngInput: unknown): CoordinateValidationResult {
  if (latInput === undefined || latInput === null || lngInput === undefined || lngInput === null) {
    return { isValid: false, error: 'Coordinates are required.' };
  }

  const latStr = String(latInput).trim();
  const lngStr = String(lngInput).trim();

  if (latStr === '' || lngStr === '') {
    return { isValid: false, error: 'Coordinates cannot be empty or whitespace.' };
  }

  const lat = Number(latStr);
  const lng = Number(lngStr);

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Number.isNaN(lat) || Number.isNaN(lng)) {
    return { isValid: false, error: 'Coordinates must be valid numbers.' };
  }

  if (lat < -90 || lat > 90) {
    return { isValid: false, error: 'Latitude must be between -90 and 90 degrees.' };
  }

  if (lng < -180 || lng > 180) {
    return { isValid: false, error: 'Longitude must be between -180 and 180 degrees.' };
  }

  return { isValid: true, lat, lng };
}

/**
 * Returns a 16-point cardinal/intercardinal direction label for a bearing.
 */
export function getCardinalDirection(bearing: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const normalized = (bearing % 360 + 360) % 360;
  const index = Math.round(normalized / 22.5) % 16;
  return directions[index];
}

/**
 * Calculates the great-circle bearing from a given user location to the Kaaba in Mecca.
 * Formula:
 * θ = atan2( sin(Δλ) ⋅ cos(φ₂), cos(φ₁) ⋅ sin(φ₂) − sin(φ₁) ⋅ cos(φ₂) ⋅ cos(Δλ) )
 * where φ is latitude, λ is longitude, 1 is start point (user), 2 is end point (Kaaba)
 */
export const calculateQiblaDirection = (userLat: number, userLng: number): QiblaResult => {
  const validation = validateCoordinates(userLat, userLng);
  if (!validation.isValid || validation.lat === undefined || validation.lng === undefined) {
    throw new Error(validation.error || 'Invalid coordinates for Qibla calculation.');
  }

  const lat = validation.lat;
  const lng = validation.lng;

  const toRad = (deg: number) => deg * (Math.PI / 180);
  const toDeg = (rad: number) => rad * (180 / Math.PI);

  const phi1 = toRad(lat);
  const phi2 = toRad(KAABA_COORDS.lat);
  const deltaLambda = toRad(KAABA_COORDS.lng - lng);

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

  const bearingRad = Math.atan2(y, x);
  let bearingDeg = toDeg(bearingRad);

  // Normalize bearing to 0-360
  bearingDeg = (bearingDeg % 360 + 360) % 360;
  const roundedBearing = Math.round(bearingDeg) % 360;

  return {
    bearing: roundedBearing,
    cardinalDirection: getCardinalDirection(roundedBearing),
    userLat: lat,
    userLng: lng
  };
};
