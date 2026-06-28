import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStatVisual } from "@/types";

// Icons only. Stat titles and descriptions live in
// `messages/{locale}.json` under `stats.items`, keyed by index.
export const stats: IStatVisual[] = [
    {
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
    },
    {
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    },
    {
        icon: <PiGlobeFill size={34} className="text-green-600" />,
    }
];
