import { IMenuItem, ISocials } from "@/types";

// Non-text data only (links, contact details, social URLs). All copy
// (subheading, headings, link labels, copyright) lives in
// `messages/{locale}.json` under `footer`.
export const footerDetails: {
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    quickLinks: [
        {
            key: "features",
            url: "#features"
        },
        {
            key: "pricing",
            url: "#pricing"
        },
        {
            key: "testimonials",
            url: "#testimonials"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}
