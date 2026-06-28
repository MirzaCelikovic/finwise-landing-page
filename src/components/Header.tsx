'use client';

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import clsx from 'clsx';

import Container from './Container';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const LanguageSwitcher: React.FC = () => {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const activeLocale = useLocale();

    return (
        <div className="flex items-center gap-2" aria-label={t('switchLanguage')}>
            {routing.locales.map((locale, index) => (
                <React.Fragment key={locale}>
                    {index > 0 && <span className="text-foreground-accent" aria-hidden="true">/</span>}
                    <Link
                        href={pathname}
                        locale={locale}
                        aria-current={activeLocale === locale ? 'true' : undefined}
                        className={clsx('uppercase text-sm transition-colors', {
                            'font-semibold text-foreground': activeLocale === locale,
                            'text-foreground-accent hover:text-foreground': activeLocale !== locale,
                        })}
                    >
                        {locale}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('nav');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <FaFingerprint className="text-foreground min-w-fit w-7 h-7" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {menuItems.map(item => (
                            <li key={item.key}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {t(`links.${item.key}`)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors">
                                {t('download')}
                            </Link>
                        </li>
                        <li>
                            <LanguageSwitcher />
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">{t('toggleNavigation')}</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.key}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {t(`links.${item.key}`)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                {t('getStarted')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
