import React from "react";
import Link from "next/link";
import './cardContacto.css'
import { useTranslation } from "next-i18next";

const CardContacto = () =>{
    const {t} = useTranslation('nosotros') 
    return (
        <div className="cardContacto mt-8 md:mt-16">
            <div className="titleCardContainer">
                <p>{t('cardNosotrosFirstTitle')}</p>
                <h3>{t('cardNosotrosSecondTitle')}</h3>
            </div>

        <div className="btnContainer">
            <Link href={'/contacto'} className="btn"> 
                <button>
                    {t('cardNosotrosBtn')}
                </button>
            </Link>
        </div>
        </div>
    )
}

export default CardContacto