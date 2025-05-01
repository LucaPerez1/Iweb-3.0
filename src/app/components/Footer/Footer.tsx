'use client'
import Instagram from '../Icons/Instagram'
import Linkedin from '../Icons/Linkedin'
import './footer.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Tiktok from '../Icons/Tiktok'
import { useState } from 'react'



const Footer = () => {
    const [isHoveredTiktok, setIsHoveredTiktok] = useState(false);
    const [isHoveredIg, setIsHoveredIg] = useState (false)
    const { t } = useTranslation('componentes')

    return (
        <footer className="footer pb-4 py-6 sm:px-6 lg:px-8 lg:pt-8 lg:pb-4">
            <div className="grid md:grid-cols-3 gap-8">
                <div className='flex flex-col'>
                    <Link href={'/'}>
                        <img src="../logo.svg" alt="iweb logo" className='w-auto animate-pulse' />
                    </Link>
                    <p>{t('descriptionFooter')}</p>
                </div>
                <div className='flex flex-col h-[100%]'>
                    <h2 className='mb-5 md:mb-0'>{t('followUs')}</h2>
                    <div className='redes md:h-[75%]'>
                        <a href="https://www.instagram.com/iwebtecnology/" aria-label={t('footerAriaIg')} target="_blank" rel="noopener noreferrer" className='group transition-all duration-400' onMouseEnter={() => setIsHoveredIg(true)} onMouseLeave={() => setIsHoveredIg(false)}>
                            <Instagram width={48} height={48}  fill={isHoveredIg ? "url(#paint0_linear_113_578)" : "#f3f3f3"} className='transition-all duration-400 group-hover:w-[52px] group-hover:h-[52px]'/>
                        </a>
                        <a href="https://www.linkedin.com/company/105166671/admin/page-posts/published/"
                            aria-label={t('footerAriaLinkedin')} target="_blank" rel="noopener noreferrer" className='group transition-all duration-400'>
                            <Linkedin width={48} height={48} className='fill-[#f3f3f3] group-hover:fill-[#32ACE7] transition-all duration-400 group-hover:w-[56px] group-hover:h-[56px]' />
                        </a>
                        <a href="https://www.tiktok.com/@iwebtechnology" aria-label={t('footerAriaTiktok')} target="_blank" rel="noopener noreferrer" className='group transition-all duration-400' onMouseEnter={() => setIsHoveredTiktok(true)} onMouseLeave={() => setIsHoveredTiktok(false)}>
                            <Tiktok width={48} height={48} fill1={isHoveredTiktok ? "#FF004F" : "#f3f3f3"}
                                fill2={isHoveredTiktok ? "#00F2EA" : "#f3f3f3"} className='transition-all duration-400 group-hover:w-[49px] group-hover:h-[56px]'/>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='mb-5'>Explora</h2>
                    <ul>
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
                    </ul>
                </div>
            </div>

            <div>
                <h3 className='reserved'>©2025 <strong className='text-[#08E6F5]'>iWeb</strong> - {t('rightsReserved')}</h3>
            </div>
        </footer>
    )
}

export default Footer