import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: "I'm Ready.",
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$10', '2': '$49' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'f9423d7e-9052-4bd2-96b7-a9a1ef29022d',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'b78e14a5-a69f-485c-bc08-f864b5196661',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
