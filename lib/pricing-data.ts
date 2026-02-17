// Pricing curve data from flight-club research
// X = days before departure, Y = price multiplier

export const domesticPricing = [
  { days: 60, multiplier: 1.0 },
  { days: 50, multiplier: 1.05 },
  { days: 40, multiplier: 1.1 },
  { days: 30, multiplier: 1.0 },
  { days: 21, multiplier: 1.0 },
  { days: 14, multiplier: 1.35 },
  { days: 10, multiplier: 1.8 },
  { days: 7, multiplier: 2.5 },
  { days: 5, multiplier: 3.2 },
  { days: 3, multiplier: 5.0 },
  { days: 1, multiplier: 8.0 },
  { days: 0, multiplier: 10.0 },
]

export const internationalPricing = [
  { days: 60, multiplier: 0.95 },
  { days: 50, multiplier: 1.0 },
  { days: 40, multiplier: 1.0 },
  { days: 30, multiplier: 1.0 },
  { days: 21, multiplier: 1.05 },
  { days: 14, multiplier: 1.2 },
  { days: 10, multiplier: 1.5 },
  { days: 7, multiplier: 2.0 },
  { days: 5, multiplier: 2.5 },
  { days: 3, multiplier: 3.5 },
  { days: 1, multiplier: 4.5 },
  { days: 0, multiplier: 5.0 },
]

// Stats for callout cards
export const pricingStats = {
  avgPremium: "$700",
  markupRange: "3-10x",
  airlineProfits: "$29 billion",
}
