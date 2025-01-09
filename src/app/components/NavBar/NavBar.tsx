"use client"
import { useState } from "react";
import './navBar.css'
import Link from "next/link";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
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
                                    <Link href={'/'}>Inicio</Link>
                                </li>
                                <li>
                                    <Link href={'/nosotros'}>Nosotros</Link>
                                </li>
                                <li>
                                    <Link href={'/servicios'}>Servicios</Link>
                                </li>
                                <li>
                                    <Link href={'/proyectos'}>Proyectos</Link>
                                </li>
                                <li>
                                    <Link href={'/contacto'}>Contacto</Link>
                                </li>

                                <button id="button-idioms">
                                    <img className="languageButton" src="../languages/idiomas.png" alt="logo idiomas" />
                                </button>
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
                        Inicio
                    </Link>
                    <Link href="/nosotros" className="menuMovilLink px-3 py-2">
                        Nosotros
                    </Link>
                    <Link href="/servicios" className="menuMovilLink px-3 py-2">
                        Servicios
                    </Link>
                    <Link href="/proyectos" className="menuMovilLink px-3 py-2">
                        Proyectos
                    </Link>
                    <Link href="/contacto" className="menuMovilLink px-3 py-2">
                        Contacto
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar