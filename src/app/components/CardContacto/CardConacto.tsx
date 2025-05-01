import React from "react";
import Link from "next/link";
import './cardContacto.css'
import { useTranslation } from "next-i18next";

const CardContacto = () =>{
    const {t} = useTranslation('nosotros') 
    return (
        <div className="cardContacto mt-8 md:mt-16">
            <div className="titleCardContainer py-7">
                <p>{t('cardNosotrosFirstTitle')}</p>
                <h2>{t('cardNosotrosSecondTitle')}</h2>
            </div>

        <div className="btnContainer">
            <Link href={'/contacto'} className="btn"> 
                <button className="px-6 py-3 bg-[#08E6F5] hover:bg-opacity-20 backdrop-blur-md border-[3px] border-[#08E6F5] hover:text-[#191919] hover:bg-[#08E6F5] text-[#191919] transition">
                    {t('cardNosotrosBtn')}
                </button>
            </Link>
        </div>
        </div>
    )
}

export default CardContacto