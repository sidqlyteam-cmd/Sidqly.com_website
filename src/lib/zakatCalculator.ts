export interface ZakatState {
  cash: number;
  bankBalance: number;
  goldValue: number;
  silverValue: number;
  businessInventory: number;
  receivables: number;
  investments: number;
  otherAssets: number;
  shortTermLiabilities: number;
  manualNisabValue: number;
  nisabMethod: 'gold' | 'silver' | 'custom';
}

export interface ZakatResult {
  totalAssets: number;
  totalLiabilities: number;
  netZakatableWealth: number;
  nisabThreshold: number;
  isEligible: boolean;
  zakatRate: number; // e.g. 0.025 (2.5%)
  estimatedZakat: number;
}

/**
 * Sanitizes and validates a numeric input for Zakat calculation.
 * Returns 0 if negative, NaN, Infinity, non-numeric, or invalid.
 */
export function sanitizeAmount(value: unknown): number {
  if (value === undefined || value === null || value === '') {
    return 0;
  }
  const num = typeof value === 'number' ? value : Number(String(value).trim());
  if (!Number.isFinite(num) || Number.isNaN(num) || num < 0) {
    return 0;
  }
  // Round to 2 decimal places to avoid floating point anomalies while retaining precision
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates Zakat estimate transparently based on net zakatable wealth and Nisab threshold.
 */
export function calculateZakatEstimate(state: ZakatState): ZakatResult {
  const cash = sanitizeAmount(state.cash);
  const bankBalance = sanitizeAmount(state.bankBalance);
  const goldValue = sanitizeAmount(state.goldValue);
  const silverValue = sanitizeAmount(state.silverValue);
  const businessInventory = sanitizeAmount(state.businessInventory);
  const receivables = sanitizeAmount(state.receivables);
  const investments = sanitizeAmount(state.investments);
  const otherAssets = sanitizeAmount(state.otherAssets);

  const totalAssets = Math.round(
    (cash + bankBalance + goldValue + silverValue + businessInventory + receivables + investments + otherAssets + Number.EPSILON) * 100
  ) / 100;

  const totalLiabilities = sanitizeAmount(state.shortTermLiabilities);

  // Net zakatable wealth cannot be negative
  const netZakatableWealth = Math.max(0, Math.round((totalAssets - totalLiabilities + Number.EPSILON) * 100) / 100);

  const nisabThreshold = sanitizeAmount(state.manualNisabValue);

  const isEligible = netZakatableWealth >= nisabThreshold && nisabThreshold > 0;

  const zakatRate = 0.025;

  const estimatedZakat = isEligible
    ? Math.round((netZakatableWealth * zakatRate + Number.EPSILON) * 100) / 100
    : 0;

  return {
    totalAssets,
    totalLiabilities,
    netZakatableWealth,
    nisabThreshold,
    isEligible,
    zakatRate,
    estimatedZakat
  };
}
