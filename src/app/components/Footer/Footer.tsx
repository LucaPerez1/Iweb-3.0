'use client'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Linkedin from '../Icons/Linkedin'
import './footer.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Footer = () => {
    const {t} = useTranslation('componentes')
    return (
        <footer className="footer py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div className='flex flex-col'>
                    <Link href={'/'}>
                        <img src="../logo.svg" alt="iweb logo" className='w-auto animate-pulse'/>
                    </Link>
                    <p>{t('descriptionFooter')}</p>
                </div>
                <div className='flex flex-col h-[100%]'>
                    <h4 className='mb-5 md:mb-0'>{t('followUs')}</h4>
                    <div className='redes md:h-[75%]'>
                        <Instagram width={48} height={48} fill='#F3F3F3' />
                        <Linkedin width={48} height={48} fill='#F3F3F3' />
                        <Facebook width={48} height={48} fill='#F3F3F3' />
                    </div>
                </div>
                <div>
                    <h4 className='mb-5'>Explora</h4>
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
                <h5 className='reserved'>©2025 iWeb - {t('rightsReserved')}</h5>
            </div>
        </footer>
    )
}

export default Footer