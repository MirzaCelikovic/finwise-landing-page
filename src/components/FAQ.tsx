"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useTranslations } from "next-intl";

import SectionTitle from "./SectionTitle";
import { siteDetails } from "@/data/siteDetails";

const FAQ: React.FC = () => {
    const t = useTranslations("faq");
    const items = t.raw("items") as { question: string; answer: string }[];

    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-foreground-accent">{t("label")}</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">{t("heading")}</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        {t("tagline")}
                    </p>
                    <a href="mailto:" className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left">help@finwise.com</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    {items.map((_, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                                            <span className="text-2xl font-semibold">{t(`items.${index}.question`, { brand: siteDetails.siteName })}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                            {t(`items.${index}.answer`, { brand: siteDetails.siteName })}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
