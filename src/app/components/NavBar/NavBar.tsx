import React from "react";
import './navBar.css'
import Link from "next/link";

const NavBar = () => {
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
                                    <img className="languageButton" src="../languages/idiomas.png" alt="logo idiomas"/> 
                                </button>
                            </ul>

                        </nav>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                </div>
            </div>
        </header>
    )
}

export default NavBar