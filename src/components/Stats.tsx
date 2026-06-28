import { getTranslations } from "next-intl/server"

import { stats } from "@/data/stats"

const Stats: React.FC = async () => {
    const t = await getTranslations('stats')
    const items = t.raw('items') as { title: string; description: string }[]

    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                            {stat.icon}
                            {items[index].title}
                        </h3>
                        <p className="text-foreground-accent">{items[index].description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
