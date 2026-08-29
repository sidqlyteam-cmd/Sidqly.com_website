import { describe, it, expect } from 'vitest';
import { calculateZakatEstimate, sanitizeAmount, type ZakatState } from '../zakatCalculator';

describe('Zakat Calculator Calculation & Validation', () => {
  describe('sanitizeAmount', () => {
    it('handles normal numbers and strings', () => {
      expect(sanitizeAmount(100)).toBe(100);
      expect(sanitizeAmount(' 250.50 ')).toBe(250.5);
      expect(sanitizeAmount(0)).toBe(0);
    });

    it('sanitizes invalid inputs, negatives, NaN, Infinity to 0', () => {
      expect(sanitizeAmount(-50)).toBe(0);
      expect(sanitizeAmount('-100')).toBe(0);
      expect(sanitizeAmount(NaN)).toBe(0);
      expect(sanitizeAmount(Infinity)).toBe(0);
      expect(sanitizeAmount('abc')).toBe(0);
      expect(sanitizeAmount('')).toBe(0);
      expect(sanitizeAmount(null)).toBe(0);
      expect(sanitizeAmount(undefined)).toBe(0);
    });

    it('prevents floating point errors', () => {
      expect(sanitizeAmount(10.000000000000002)).toBe(10);
      expect(sanitizeAmount(100.126)).toBe(100.13);
    });
  });

  describe('calculateZakatEstimate', () => {
    const baseState: ZakatState = {
      cash: 1000,
      bankBalance: 2000,
      goldValue: 500,
      silverValue: 500,
      businessInventory: 1000,
      receivables: 500,
      investments: 500,
      otherAssets: 500, // Total assets = 6500
      shortTermLiabilities: 1500, // Net zakatable = 5000
      manualNisabValue: 4000,
      nisabMethod: 'gold'
    };

    it('calculates Zakat correctly when net wealth exceeds Nisab', () => {
      const res = calculateZakatEstimate(baseState);
      expect(res.totalAssets).toBe(6500);
      expect(res.totalLiabilities).toBe(1500);
      expect(res.netZakatableWealth).toBe(5000);
      expect(res.nisabThreshold).toBe(4000);
      expect(res.isEligible).toBe(true);
      expect(res.zakatRate).toBe(0.025);
      expect(res.estimatedZakat).toBe(125); // 5000 * 0.025
    });

    it('returns zero Zakat when net wealth is below Nisab', () => {
      const state = { ...baseState, manualNisabValue: 6000 };
      const res = calculateZakatEstimate(state);
      expect(res.netZakatableWealth).toBe(5000);
      expect(res.nisabThreshold).toBe(6000);
      expect(res.isEligible).toBe(false);
      expect(res.estimatedZakat).toBe(0);
    });

    it('returns eligible Zakat when net wealth is exactly at Nisab', () => {
      const state = { ...baseState, manualNisabValue: 5000 };
      const res = calculateZakatEstimate(state);
      expect(res.netZakatableWealth).toBe(5000);
      expect(res.nisabThreshold).toBe(5000);
      expect(res.isEligible).toBe(true);
      expect(res.estimatedZakat).toBe(125);
    });

    it('handles zero assets or missing Nisab gracefully', () => {
      const emptyState: ZakatState = {
        cash: 0,
        bankBalance: 0,
        goldValue: 0,
        silverValue: 0,
        businessInventory: 0,
        receivables: 0,
        investments: 0,
        otherAssets: 0,
        shortTermLiabilities: 0,
        manualNisabValue: 0,
        nisabMethod: 'gold'
      };
      const res = calculateZakatEstimate(emptyState);
      expect(res.totalAssets).toBe(0);
      expect(res.netZakatableWealth).toBe(0);
      expect(res.isEligible).toBe(false);
      expect(res.estimatedZakat).toBe(0);
    });

    it('prevents negative net zakatable wealth when liabilities exceed assets', () => {
      const state = { ...baseState, shortTermLiabilities: 10000 };
      const res = calculateZakatEstimate(state);
      expect(res.totalAssets).toBe(6500);
      expect(res.totalLiabilities).toBe(10000);
      expect(res.netZakatableWealth).toBe(0);
      expect(res.isEligible).toBe(false);
      expect(res.estimatedZakat).toBe(0);
    });

    it('handles decimal values accurately', () => {
      const state: ZakatState = {
        cash: 1234.56,
        bankBalance: 2345.67,
        goldValue: 0,
        silverValue: 0,
        businessInventory: 0,
        receivables: 0,
        investments: 0,
        otherAssets: 0,
        shortTermLiabilities: 100.23,
        manualNisabValue: 500,
        nisabMethod: 'gold'
      };
      // Total assets: 3580.23
      // Net zakatable: 3480
      // 3480 * 0.025 = 87
      const res = calculateZakatEstimate(state);
      expect(res.totalAssets).toBe(3580.23);
      expect(res.totalLiabilities).toBe(100.23);
      expect(res.netZakatableWealth).toBe(3480);
      expect(res.estimatedZakat).toBe(87);
    });

    it('handles very large numbers without NaN or Infinity', () => {
      const state = { ...baseState, cash: 1000000000, manualNisabValue: 5000 };
      const res = calculateZakatEstimate(state);
      expect(Number.isFinite(res.totalAssets)).toBe(true);
      expect(Number.isFinite(res.estimatedZakat)).toBe(true);
      expect(res.isEligible).toBe(true);
    });
  });
});
