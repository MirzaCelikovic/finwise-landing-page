import { IPricingVisual } from "@/types";

// Numeric prices are non-text and stay here. Tier names, feature lists and the
// textual "Custom" price for the Enterprise tier live in
// `messages/{locale}.json` under `pricing.tiers`, keyed by index.
// A `price` of `null` means the tier uses the localized text price instead.
export const tiers: IPricingVisual[] = [
    {
        price: 29,
    },
    {
        price: 99,
    },
    {
        price: null,
    },
]
