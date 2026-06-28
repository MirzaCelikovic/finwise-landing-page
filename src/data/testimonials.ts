import { ITestimonialVisual } from "@/types";

// Avatar image paths only. Names, roles and messages live in
// `messages/{locale}.json` under `testimonials.items`, keyed by index.
export const testimonials: ITestimonialVisual[] = [
    {
        avatar: '/images/testimonial-1.webp',
    },
    {
        avatar: '/images/testimonial-2.webp',
    },
    {
        avatar: '/images/testimonial-3.webp',
    },
];
