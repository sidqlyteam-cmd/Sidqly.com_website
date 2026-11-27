export type BillingCycle = 'monthly' | 'annual';
export type PlanKey = 'starter' | 'growth' | 'premium';
export type ModuleKey = 'matrimonial' | 'hifz' | 'janazah';

export interface PaddlePlanConfig {
  key: PlanKey;
  name: string;
  productId: string;
  monthlyPriceId: string;
  annualPriceId: string;
  monthlyAmount: number;
  annualAmount: number;
  staffLimit: number;
  workspaceLimit: number;
  summary: string;
}

export interface PaddleModuleConfig {
  key: ModuleKey;
  name: string;
  productId: string;
  monthlyPriceId: string;
  annualPriceId: string;
  monthlyAmount: number;
  annualAmount: number;
}

export const PADDLE_PLANS: Record<PlanKey, PaddlePlanConfig> = {
  starter: {
    key: 'starter',
    name: 'Starter',
    productId: 'pro_01m86maesepw0peg4jxwc7mk2v',
    monthlyPriceId: 'pri_01m86mag68rmyvv7narq28qt3n',
    annualPriceId: 'pri_01m86maghs7g0t94nwrh3a5ygt',
    monthlyAmount: 29,
    annualAmount: 290,
    staffLimit: 3,
    workspaceLimit: 1,
    summary: '3 staff accounts · 1 workspace · Unlimited donors',
  },
  growth: {
    key: 'growth',
    name: 'Growth',
    productId: 'pro_01m86mah2psawezm8ap56qe5fa',
    monthlyPriceId: 'pri_01m86mahwyy603mxsx2pjmm0ww',
    annualPriceId: 'pri_01m86maj6m6mg0hp43sme26777',
    monthlyAmount: 99,
    annualAmount: 990,
    staffLimit: 10,
    workspaceLimit: 3,
    summary: '10 staff accounts · Up to 3 workspaces · Custom domain',
  },
  premium: {
    key: 'premium',
    name: 'Premium',
    productId: 'pro_01m86majjmgazmhncnzwarx1dw',
    monthlyPriceId: 'pri_01m86makj81jmzn19nnv4m0ktw',
    annualPriceId: 'pri_01m86makwq6pr74cs75w3h7wk6',
    monthlyAmount: 199,
    annualAmount: 1990,
    staffLimit: 30,
    workspaceLimit: 10,
    summary: '30 staff accounts · Up to 10 workspaces · Master switcher',
  },
};

export const PADDLE_MODULES: PaddleModuleConfig[] = [
  {
    key: 'matrimonial',
    name: 'Matrimonial & Nikah Portal',
    productId: 'pro_01m86n5e6y9hsgb2wdvdhgnnkm',
    monthlyPriceId: 'pri_01m86n5f8pmsh2nfe5b34t701m',
    annualPriceId: 'pri_01m86n5fgynbsc051bgw0xhspj',
    monthlyAmount: 29,
    annualAmount: 290,
  },
  {
    key: 'hifz',
    name: 'Hifz & Quran Academy',
    productId: 'pro_01m86n5h40hvcdcdy7wret8nkz',
    monthlyPriceId: 'pri_01m86n5hkc2kr5hgng64z20s0c',
    annualPriceId: 'pri_01m86n5hv83raxjdyp6jbafq2x',
    monthlyAmount: 39,
    annualAmount: 390,
  },
  {
    key: 'janazah',
    name: 'Janazah & Bereavement Fund',
    productId: 'pro_01m86n5j5z8e3mdkq7p847vq4f',
    monthlyPriceId: 'pri_01m86n5jvxy57vj6f0vtfheg6r',
    annualPriceId: 'pri_01m86n5k43gka0bd8y8hdpteaf',
    monthlyAmount: 19,
    annualAmount: 190,
  },
];
