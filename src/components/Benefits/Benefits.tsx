import { getTranslations } from "next-intl/server"

import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = async () => {
    const t = await getTranslations("benefits")

    return (
        <div id="features">
            <h2 className="sr-only">{t("srHeading")}</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} index={index} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits
