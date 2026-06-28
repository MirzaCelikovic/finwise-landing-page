export interface IMenuItem {
    key: string;
    url: string;
}

// Non-text presentation data. All copy lives in the message catalogs and is
// read by index/key via next-intl; these interfaces describe what remains in
// the `src/data/**` files (icons, image paths, prices, etc.).
export interface IBenefitVisual {
    imageSrc: string;
    bullets: IBenefitBulletVisual[];
}

export interface IBenefitBulletVisual {
    icon: JSX.Element;
}

export interface IPricingVisual {
    // Numeric monthly price, or `null` for tiers that show a localized text
    // price (e.g. "Custom") read from the message catalog.
    price: number | null;
}

export interface ITestimonialVisual {
    avatar: string;
}

export interface IStatVisual {
    icon: JSX.Element;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}
