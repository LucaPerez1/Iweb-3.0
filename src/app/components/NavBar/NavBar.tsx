"use client"
import { useState } from "react";
import './navBar.css'
import Link from "next/link";
import i18n from 'i18next';
import { useTranslation } from "next-i18next";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [flages, setFlages] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleFlags = () => {
        setFlages(!flages);
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); 
        setFlages(!flages); 
    };

    const {t} = useTranslation ('componentes')

    return (
        <header className="header z-50">
            <div className=" px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-between sm:items-stretch">
                        <div className="flex shrink-0 items-center">
                            <Link href={'/'}>
                                <img className="h-8 w-auto" src="../logo.svg" alt="iweb logo" />
                            </Link>
                        </div>
                        <nav className="hidden md:flex">
                            <ul className="space-x-4">
                                <li>
                                    <Link href={'/'}>{t('linkHome')}</Link>
                                </li>
                                <li>
                                    <Link href={'/nosotros'}>{t('linkUs')}</Link>
                                </li>
                                <li>
                                    <Link href={'/servicios'}>{t('linkServices')}</Link>
                                </li>
                                <li>
                                    <Link href={'/proyectos'}>{t('linkProyects')}</Link>
                                </li>
                                <li>
                                    <Link href={'/contacto'}>{t('linkContact')}</Link>
                                </li>

                                <div className="relative z-50">
                                    <button onClick={toggleFlags} id="button-idioms">
                                        <img className="languageButton" src="../languages/idiomas.png" alt="icono de idiomas" />
                                    </button>

                                    <div className={`flex flex-col absolute mt-[10px] ${flages ? 'hidden' : 'notHidden'}`}>
                                        <button className="grayscale hover:grayscale-0 rounded-full" onClick={() => changeLanguage('es')}>
                                            <img className="languageButton" src="../languages/spanish.png" alt="icono español" />
                                        </button>
                                        <button className="grayscale hover:grayscale-0 rounded-full" onClick={() => changeLanguage('en')}>
                                            <img className="languageButton" src="../languages/english.png" alt="icono ingles" />
                                        </button>
                                    </div>
                                </div>
                            </ul>

                        </nav>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                        >

                            <svg
                                className={`block size-6 ${menuOpen ? 'hidden' : 'block'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>


                            <svg
                                className={`size-6 ${menuOpen ? 'block' : 'hidden'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link href="/" className="menuMovilLink px-3 py-2">
                    {t('linkHome')}
                    </Link>
                    <Link href="/nosotros" className="menuMovilLink px-3 py-2">
                    {t('linkUS')}
                    </Link>
                    <Link href="/servicios" className="menuMovilLink px-3 py-2">
                    {t('linkServices')}
                    </Link>
                    <Link href="/proyectos" className="menuMovilLink px-3 py-2">
                    {t('linkProyects')}
                    </Link>
                    <Link href="/contacto" className="menuMovilLink px-3 py-2">
                    {t('linkContact')}
                    </Link>
                    <div>
                        <button className="rounded-full" onClick={() => changeLanguage('es')}>
                            <img className="languageButton" src="../languages/spanish.png" alt="icono ingles" />
                        </button>
                        <button className="rounded-full" onClick={() => changeLanguage('en')}>
                            <img className="languageButton" src="../languages/english.png" alt="icono ingles" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar