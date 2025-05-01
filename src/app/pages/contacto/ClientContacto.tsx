'use client'
import React from "react"
import FormContact from "../../components/FormContact/FormContact"
import './pageContacto.css'
import Whatsapp from "../../components/Icons/Whatsapp"
import Consulta from "../../components/Icons/Consulta"
import Instagram from "../../components/Icons/Instagram"
import Linkedin from "../../components/Icons/Linkedin"
import Tiktok from "../../components/Icons/Tiktok"
import { useTranslation } from "next-i18next"

export default function ClientContacto() {
    const { t } = useTranslation('contacto')

    return (

        <main>
            <h1 className="mx-4 md:mx-10 my-6 md:my-10 seccionTitle">{t('mainTitle')}</h1>
            <p className="generalDescriptions mb-6 mx-4 md:mx-10">{t('mainText')}</p>

            <div className="md:grid md:grid-cols-2 mx-4 md:mx-10 my-10 md:my-14">
                <div className="contactInformation">
                    <h2 className="mb-6 md:mb-9">{t('informationContactTitle')}</h2>
                    <div>
                        <h3 className="mb-2 md:mb-4">Whatsapp</h3>
                        <div className="networkContainer">
                            <Whatsapp width={40} height={40} fill="#107D70" />
                            <p>
                                +54 9 11 6787-7298
                            </p>
                        </div>
                        <h3 className="mt-5 md:mt-8 mb-2 md:mb-4">{t('emailTitle')}</h3>
                        <div className="networkContainer">
                            <Consulta width={48} height={40} />
                            <p>
                                iweb.contacto@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="mt-7 md:mt-14 mb-4">{t('follow')}</h2>
                        <a href="https://www.instagram.com/iwebtecnology/" target="_blank" rel="noopener noreferrer" className="networkContainer boxShadowContac mb-5 md:mb-9  rounded-[10px] md:w-[80%] flex justify-center py-1 bg-[#7232BD] border-[2px] border-[#7232BD] hover:bg-opacity-15 group transition-colors duration-300">
                            <Instagram width={40} height={40} fill="#f3f3f3"/>
                            <p>
                                Instagram
                            </p>
                        </a>
                        <a href="https://www.tiktok.com/@iwebtechnology" target="_blank" rel="noopener noreferrer" className="networkContainer boxShadowContac mb-6 md:mb-10 border-[3px] border-black rounded-[10px] md:w-[80%] flex justify-center py-1 bg-black hover:bg-opacity-10 group transition-colors duration-500">
                            <Tiktok width={40} height={40} fill1="#FF3434" fill2="#00F2EA"/>
                            <p className="text-[#FF3434] group-hover:text-white transition-colors duration-200">
                                Tiktok
                            </p>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/105166671/admin/page-posts/published/"
                            target="_blank" rel="noopener noreferrer" className="networkContainer boxShadowContac mb-11 border-[2px] border-[#32ACE7] rounded-[10px] md:w-[80%] flex justify-center py-1 hover:bg-opacity-20 bg-[#32ACE7] group transition-colors duration-500"
                        >
                            <Linkedin width={40} height={40} className="fill-black group-hover:fill-[#f3f3f3] transition-colors duration-300" />
                            <p className="text-black group-hover:text-[#f3f3f3] transition-colors duration-300">
                                Linkedin
                            </p>
                        </a>
                    </div>
                </div>

                <FormContact />
            </div>
        </main>

    )
}