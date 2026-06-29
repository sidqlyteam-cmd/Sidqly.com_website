export interface ZakatState {
  cash: number;
  bankBalance: number;
  goldValue: number;
  silverValue: number;
  businessInventory: number;
  receivables: number;
  investments: number;
  shortTermLiabilities: number;
  manualNisabValue: number;
  nisabMethod: 'gold' | 'silver';
}

export interface ZakatResult {
  totalAssets: number;
  totalLiabilities: number;
  zakatableAssets: number;
  isEligible: boolean;
  estimatedZakat: number;
}

export function calculateZakatEstimate(state: ZakatState): ZakatResult {
  const totalAssets =
    (state.cash || 0) +
    (state.bankBalance || 0) +
    (state.goldValue || 0) +
    (state.silverValue || 0) +
    (state.businessInventory || 0) +
    (state.receivables || 0) +
    (state.investments || 0);

  const totalLiabilities = state.shortTermLiabilities || 0;

  const zakatableAssets = Math.max(0, totalAssets - totalLiabilities);

  const nisabThreshold = state.manualNisabValue || 0;

  const isEligible = zakatableAssets >= nisabThreshold && nisabThreshold > 0;

  const estimatedZakat = isEligible ? zakatableAssets * 0.025 : 0;

  return {
    totalAssets,
    totalLiabilities,
    zakatableAssets,
    isEligible,
    estimatedZakat
  };
}
