import { describe, it, expect } from 'vitest';
import { calculateQiblaDirection, validateCoordinates, getCardinalDirection } from '../qibla';

describe('Qibla Direction Calculation & Validation', () => {
  describe('validateCoordinates', () => {
    it('accepts valid latitude and longitude within limits', () => {
      expect(validateCoordinates(31.5204, 74.3587)).toEqual({ isValid: true, lat: 31.5204, lng: 74.3587 });
      expect(validateCoordinates(-90, -180)).toEqual({ isValid: true, lat: -90, lng: -180 });
      expect(validateCoordinates(90, 180)).toEqual({ isValid: true, lat: 90, lng: 180 });
      expect(validateCoordinates(' 24.8607 ', ' 67.0011 ')).toEqual({ isValid: true, lat: 24.8607, lng: 67.0011 });
    });

    it('rejects invalid, empty, NaN, and out of range inputs', () => {
      expect(validateCoordinates('', 74.3587).isValid).toBe(false);
      expect(validateCoordinates('   ', 74.3587).isValid).toBe(false);
      expect(validateCoordinates(91, 74.3587).isValid).toBe(false);
      expect(validateCoordinates(-91, 74.3587).isValid).toBe(false);
      expect(validateCoordinates(31.5204, 181).isValid).toBe(false);
      expect(validateCoordinates(31.5204, -181).isValid).toBe(false);
      expect(validateCoordinates(NaN, 74.3587).isValid).toBe(false);
      expect(validateCoordinates(31.5204, Infinity).isValid).toBe(false);
      expect(validateCoordinates('abc', 74.3587).isValid).toBe(false);
    });
  });

  describe('getCardinalDirection', () => {
    it('maps bearings correctly to cardinal points', () => {
      expect(getCardinalDirection(0)).toBe('N');
      expect(getCardinalDirection(90)).toBe('E');
      expect(getCardinalDirection(180)).toBe('S');
      expect(getCardinalDirection(270)).toBe('W');
      expect(getCardinalDirection(266)).toBe('W');
      expect(getCardinalDirection(258)).toBe('WSW');
    });
  });

  describe('calculateQiblaDirection with reference cities', () => {
    it('calculates expected bearing for Lahore, Pakistan', () => {
      // Approx 258° (West-Southwest)
      const res = calculateQiblaDirection(31.5204, 74.3587);
      expect(res.bearing).toBeGreaterThanOrEqual(255);
      expect(res.bearing).toBeLessThanOrEqual(262);
      expect(res.cardinalDirection).toMatch(/W|WSW/);
    });

    it('calculates expected Qibla bearing for test coordinates (31.5826, 74.3276)', () => {
      const res = calculateQiblaDirection(31.5826, 74.3276);
      expect(res.userLat).toBe(31.5826);
      expect(res.userLng).toBe(74.3276);
      expect(res.bearing).toBeGreaterThanOrEqual(258);
      expect(res.bearing).toBeLessThanOrEqual(263);
      expect(res.cardinalDirection).toMatch(/W|WSW/);
    });

    it('calculates expected bearing for Karachi, Pakistan', () => {
      // Approx 266° (West)
      const res = calculateQiblaDirection(24.8607, 67.0011);
      expect(res.bearing).toBeGreaterThanOrEqual(263);
      expect(res.bearing).toBeLessThanOrEqual(270);
      expect(res.cardinalDirection).toMatch(/W|WSW/);
    });

    it('calculates expected bearing for Islamabad, Pakistan', () => {
      const res = calculateQiblaDirection(33.6844, 73.0479);
      expect(res.bearing).toBeGreaterThanOrEqual(253);
      expect(res.bearing).toBeLessThanOrEqual(261);
    });

    it('calculates expected bearing for Dubai, UAE', () => {
      // Approx 250-256°
      const res = calculateQiblaDirection(25.2048, 55.2708);
      expect(res.bearing).toBeGreaterThanOrEqual(250);
      expect(res.bearing).toBeLessThanOrEqual(258);
    });

    it('calculates expected bearing for London, UK', () => {
      // Approx 118-121° (East-SouthEast)
      const res = calculateQiblaDirection(51.5074, -0.1278);
      expect(res.bearing).toBeGreaterThanOrEqual(115);
      expect(res.bearing).toBeLessThanOrEqual(122);
      expect(res.cardinalDirection).toMatch(/ESE|SE/);
    });

    it('calculates expected bearing for New York, USA', () => {
      // Approx 58-60° (East-NorthEast)
      const res = calculateQiblaDirection(40.7128, -74.0060);
      expect(res.bearing).toBeGreaterThanOrEqual(55);
      expect(res.bearing).toBeLessThanOrEqual(62);
      expect(res.cardinalDirection).toMatch(/ENE|NE/);
    });

    it('handles boundary conditions near equator, poles, and longitude wrapping', () => {
      // Equator & Prime Meridian
      const resEquator = calculateQiblaDirection(0, 0);
      expect(resEquator.bearing).toBeGreaterThanOrEqual(0);
      expect(resEquator.bearing).toBeLessThanOrEqual(360);

      // Near North Pole
      const resNorthPole = calculateQiblaDirection(89.9, 0);
      expect(resNorthPole.bearing).toBeGreaterThanOrEqual(0);
      expect(resNorthPole.bearing).toBeLessThanOrEqual(360);

      // Longitude wrapping boundary -179 and 179
      const resWest = calculateQiblaDirection(20, -179);
      const resEast = calculateQiblaDirection(20, 179);
      expect(resWest.bearing).toBeGreaterThanOrEqual(0);
      expect(resEast.bearing).toBeGreaterThanOrEqual(0);
    });

    it('throws error for invalid coordinates', () => {
      expect(() => calculateQiblaDirection(100, 20)).toThrow();
    });
  });
});
