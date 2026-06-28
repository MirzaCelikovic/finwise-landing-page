import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefitVisual } from "@/types"

// Non-text presentation data only. All copy (titles, descriptions, bullet
// text) lives in `messages/{locale}.json` under `benefits.items` and is keyed
// by the index of each entry here.
export const benefits: IBenefitVisual[] = [
    {
        bullets: [
            { icon: <FiBarChart2 size={26} /> },
            { icon: <FiTarget size={26} /> },
            { icon: <FiTrendingUp size={26} /> }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        bullets: [
            { icon: <FiDollarSign size={26} /> },
            { icon: <FiBriefcase size={26} /> },
            { icon: <FiPieChart size={26} /> }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        bullets: [
            { icon: <FiLock size={26} /> },
            { icon: <FiUser size={26} /> },
            { icon: <FiShield size={26} /> }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
